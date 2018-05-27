# Q-Mailer

## Introduction
Q-Mailer is an online web survey application. Users can generate their own customised survey campaign and send questionnaires out to a customised email list. The application then generates a report detailing the outome of the campaign.  


## Features
### Online payment
* Secure online payment system via credit card.

### Survey reporting:
* Logged in users are able to view past survey campaigns and the user responses.

### Customised surveys
* Survey questions can be customised according to user needs.
* Surveys only require a simple Yes / No answer thereby ensuring a faster response.
* Send up to 100 emails per day


## Usage
1. User logs in using their Google+ account
1. User pays for email credits with credit card
1. User creates campaign with custom questionnaire and email list
1. Emails are sent out
1. Respondents click on link provided in the email
1. The responses are collected and a running report is generated



## API
### oAuth
* oAuth authentication with google+

### Payment
* Online credit card payment using Stripe

### emails
* Email delivery using SendGrid

### Database
* MongoDB for information storage




## Tech stack
* User authentication: PassportJs, MongoDB
* Payment: Stripe, MongoDB
* Custom questionnaire: React, Redux, Redux Form
* Email delivery: SendGrid
* Respondent feedback: SendGrid, Express, Mongo
* Survey outcome reporting: Mongo, React, Redux



