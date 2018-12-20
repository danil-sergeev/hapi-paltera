const mongoose = require('mongoose');
const ExchangeConfig = require('./ExchangeConfig')

const Schema = mongoose.Schema;


const MethodSchema = new Schema({
    title: String,
    url: String,
    isPrivate: Boolean,
    config: ExchangeConfig
});


module.exports = mongoose.model('Method', MethodSchema);
