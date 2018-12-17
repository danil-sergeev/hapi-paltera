const graphql = require('graphql');

const DuoTransaction = require('../models/DuoTransaction')
const DuoTransactionType = require('./DuoTransactionType');

const {GraphQLObjectType, GraphQLString, GraphQLSchema} = graphql;


const RootQuery = new GraphQLObjectType({
    name: 'RootQueryType',
    fields: {
        DuoTransaction: {
            type: DuoTransactionType,
            args: {id: {type: GraphQLString}},
            resolve(parents, args) {
                return DuoTransaction.findById(args.id);
            }
        },

        allDuoTransactions: {
            type: DuoTransactionType,
            args: {},
            resolve(parents, args) {
                return DuoTransaction.find(args);
            }
        }
    }
});


module.exports = new GraphQLSchema({
    query: RootQuery
});
