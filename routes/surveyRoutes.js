const _ = require('lodash');
const Path = require ('path-parser').default;
const { URL } = require('url');
const mongoose = require('mongoose');
const requireLogin = require('../middlewares/requireLogin');
const requireCredits = require('../middlewares/requireCredits');
const Mailer = require('../services/Mailer');
const surveyTemplate = require('../services/emailTemplates/surveyTemplate');

const Survey = mongoose.model('surveys');

module.exports = app => {
    app.get('/api/surveys', requireLogin, async (req, res) => {
        const surveys = await Survey.find({ _user: req.user.id })
            .select({ 
                recipients: false
             });
        res.send(surveys);
    });

    //app.get('/api/surveys/thanks', (req, res) => {
    app.get('/api/surveys/:surveyId/:choice', (req, res) => {
        res.send('Thank you for your response! :-)');
    });

    app.post('/api/surveys/webhooks', (req, res) => {
        console.log(req.body);
        res.send({});
        //
        // const events = _.map(req.body, (event) => {
        //     const pathname = new URL(event.url).pathname;
        //     const p = new Path('/api/surveys/:surveyId/:choice');
        //     //console.log(p.test(pathname));
        //     const match = p.test(pathname); // match will be either an object, or null
        //     if(match){
        //         return { 
        //             email: event.email,
        //             surveyId: match.surveyId,
        //             choice: match.choice
        //         };
        //     }
        // });

        // --- SNIP ---
        const p = new Path('/api/surveys/:surveyId/:choice');

        _.chain(req.body)
            .map(({email, url}) => {
                const match = p.test(new URL(url).pathname);
                if(match){
                    return { 
                        email,
                        surveyId: match.surveyId,
                        choice: match.choice
                    }
                }
            })
            .compact()
            .uniqBy('email', 'surveyId')
            .each(({ surveyId, email, choice }) => {
                Survey.updateOne({
                    _id: surveyId,
                    recipients: {
                        $elemMatch: { email: email, responded: false }
                    }
                },
                {
                    $inc: { [choice]: 1 },
                    $set: { 'recipients.$.responded': true },
                    lastResponded: new Date()
                }).exec();
            })
            .value();
        
        res.send({});
        // --- SNIP ---
    });

    app.post('/api/surveys', requireLogin, requireCredits, async (req, res) => {
        const { title, subject, body, recipients } = req.body;

        const survey = new Survey({
            //title: title,
            title,
            subject,
            body,
            // recipients: recipients.split(',').map(
            //     email => { 
            //         return { email: email }
            //     })
            recipients: recipients.split(',').map(email => ({ email: email.trim() })),
            _user: req.user.id,
            dateSent: Date.now()
        });

        // Send an email
        const mailer = new Mailer(survey, surveyTemplate(survey));
        try
            {await mailer.send();
            await survey.save();
            req.user.credits -= 1;
            const user = await req.user.save();

            res.send(user);
         } catch (err) {
             res.status(422).send(err);
         }
    });
};