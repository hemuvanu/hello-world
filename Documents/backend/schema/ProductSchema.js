let mongoose = require('mongoose');
var db = require('../db.js');
let Schema = mongoose.Schema;
let productSchema = new Schema({
    images : 'string'
 }, {
        timestamps: true
    }
 
)

module.exports = mongoose.model('productSchema', productSchema);