const mongoose = require('mongoose');
const Schema = mongoose.Schema;


const ExchangeSecretSchema = new Schema({
    exchangeTitle: String,
    secret: String,
    apiKey: String
});

module.exports = mongoose.model('ExchangeSecret', ExchangeSecretSchema)