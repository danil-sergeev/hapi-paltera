const mongoose = require('mongoose')

const Schema = mongoose.Schema;


const ExchangeConfigSchema = new Schema({
    title: String
});

module.exports = mongoose.model('ExchangeConfig', ExchangeConfigSchema)
