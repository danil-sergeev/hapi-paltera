const Hapi = require('hapi');
const mongoose = require('mongoose');
const {ApolloServer, gql} = require('apollo-server-hapi');
const cron = require('node-cron');
const axios = require('axios');

const schema = require('./graphql/schema');

const DuoTransaction = require('./models/transactions/DuoTransaction');
const {ExchangeConfig} = require('./models/configs');

const mongoDbUrl = 'mongodb://user:qazwsx11@ds024748.mlab.com:24748/paltera';
const mongoDbOptions = {
    useNewUrlParser: true,
    autoIndex: false,
    reconnectTries: 100,
    reconnectInterval: 500,
    poolSize: 10,
    bufferMaxEntries: 0
};

mongoose.connect(mongoDbUrl, mongoDbOptions)
    .catch(reason => {
        console.log('Reason: ', reason)
    });

mongoose.connection.once('open', () => {
    console.log('Connected to database!')
});


const app = new Hapi.server({
    port: 1488,
    host: 'localhost'
});

const graphqlServer = new ApolloServer({schema});


const init = async () => {

    app.route([
        {
            method: 'GET',
            path: '/api/v1/duotransactions',
            handler: (request, reply) => {
                return DuoTransaction.find();
            }
        },
        {
            method: 'POST',
            path: '/api/v1/duotransactions',
            handler: (request, reply) => {
                const transaction = new DuoTransaction({
                    ...request.payload
                });

                return transaction.save();
            }
        },
        {
            method: 'GET',
            path: '/api/v1/configs',
            handler: (request, reply) => {
                ExchangeConfig.find();
            }
        }
    ])

    await graphqlServer.applyMiddleware({app,});
    await graphqlServer.installSubscriptionHandlers(app.listener);
    await app.start();
    console.log(`Server running at : ${app.info.uri}`)
};

cron.schedule('* * * * *', () => {
    console.log('Started task!')
    axios.get('http://localhost:5000/duo')
        .then(response => {
            const {data} = response;

            data.map((transaction, index) => {
                const newTransaction = new DuoTransaction({
                    ...transaciton
                });

                newTransaction.save();
                console.log(`New transaction created: ${newTransaction}`)

            })
        })
        .catch(reason => {
            console.log(reason)
        });

});


init();
