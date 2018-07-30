let mongoose = require('mongoose');
var db = require('../db.js');
let Schema = mongoose.Schema;
let userDetail = new Schema({
    email_id : 'string',
    password : 'string'
}, {
    timestamps: true
})
module.exports = mongoose.model('userDetail', userDetail);