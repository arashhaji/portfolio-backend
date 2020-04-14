const router = require('express').Router();
let Contacts= require('../models/contacts.models');

router.route('/').get((req,res) => {
    Contacts.find()
    .then(contacts => res.json(contacts))
    .catch(err => res.status(400).json('Error: ' + err));
});

module.exports = router;