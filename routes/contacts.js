const router = require('express').Router();
// const sgMail = require('@sendgrid/mail');
let Contacts= require('../models/contacts.models');

// sgMail.setApiKey(process.env.SENDGRID_API_KEY);

router.route('/').get((req,res) => {
    Contacts.find()
    .then(contacts => res.json(contacts))
    .catch(err => res.status(400).json('Error: ' + err));
});

// router.route('/mail').get((req, res) => {
    
    
//     const msg = {
//     to: 'arashhajihassanzadeh@gmail.com',
//     from: 'Arash@arashhaji.com',
//     subject: 'Sending with Twilio SendGrid is Fun',
//     text: 'and easy to do anywhere, even with Node.js',
//     html: '<strong>and easy to do anywhere, even with Node.js</strong>',
//     };
//     sgMail.send(msg).catch(err => console.log(err));
//     res.status(201).json({message: "Sent mail"})
// })

// router.route('/mail/send').post((req, res) => {
//     const email = req.body.email
//     const comments = req.body.comments
//     const msg = {
//         to: 'arashhajihassanzadeh@gmail.com',
//         from: `${email}`,
//         subject: 'Contact Form',
//         text: comments
//     }
//     sgMail.send(msg).catch(err => console.log(err));
//     res.status(201).json({message: "Sent mail"})
// })

module.exports = router;