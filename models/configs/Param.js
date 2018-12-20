const mongoose = require('mongoose')
const Method = require('./Method')

const Schema = mongoose.Schema;


const ParamSchema = new Schema({
    title: String,
    _default: String,
    method: Method
});

module.exports = mongoose.model('Param', ParamSchema)



