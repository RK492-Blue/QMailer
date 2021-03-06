const passport = require('passport');
console.log('loaded');

module.exports = app => {
    app.get(
        '/auth/google', 
        passport.authenticate('google', {   // 'google' strategy is part of passport
            scope: ['profile', 'email']     // options pbject - asks google for user's profile and email
        })                                  // https://stackoverflow.com/questions/12826977/multiple-arguments-vs-options-object
    );

    app.get(
        '/auth/google/callback', 
        passport.authenticate('google'),
        (req, res) => {
            res.redirect('/surveys');
        }
    );

    app.get('/api/logout', (req, res) => {
        req.logout();
        //res.send(req.user);
        res.redirect('/');
    });

    app.get('/api/current_user', (req, res) => {
        res.send(req.user);
    });
};
