const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const contactsSchema = new Schema ({
    firstName: { type: String, required: true, unique: true, trim: true, minlength: 3 },
    lastName: { type: String, required: true, unique: true, trim: true, minlength: 3 },
    companyName: { type: String, required: true, unique: true, trim: true,minlength:3 },
    phoneNumber: { type: Number, required: true, unique: true, trim: true, minlength:10 },
    email: { type: String, required: true, unique: true, trim: true, minlength:6 }, 

}, {
    timestamps: true,
});

const Contacts = mongoose.model('Contacts',  contactsSchema)

module.exports = Contacts;