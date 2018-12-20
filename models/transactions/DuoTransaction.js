const mongoose = require('mongoose')


const Schema = mongoose.Schema;


const DuoTransactionSchema = new Schema({
    sellStock: String,
    buyStock: String,
    tradeCoin: String,
    mainCoin: String,
    sell: Number,
    buy: Number,
    profit: Number,
    sellVolume: Number,
    buyVolume: Number,
});

module.exports = mongoose.model('DuoTransaction', DuoTransactionSchema)