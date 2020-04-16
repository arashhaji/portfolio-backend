const sgMail = require("@sendgrid/mail");
sgMail.setApiKey("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");

    const msg = {
    to: "arashhajihassanzadeh@gmail.com",
    from: "arashhajihassanzadeh@gmail.com",
    subject: 'Sending with Twilio SendGrid is Fun',
    text: 'and easy to do anywhere, even with Node.js',
    html: '<strong>and easy to do anywhere, even with Node.js</strong>',
    };
    sgMail.send(msg);