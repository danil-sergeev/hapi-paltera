const graphql = require('graphql');

const DuoTransaction = require('../models/transactions/DuoTransaction')
const DuoTransactionType = require('./transactions/DuoTransactionType');

const {GraphQLObjectType, GraphQLString, GraphQLSchema, GraphQLList} = graphql;


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

        duoTransactions: {
            type: new GraphQLList(DuoTransactionType),
            resolve() {
                return DuoTransaction.find();
            }
        }
    }
});


module.exports = new GraphQLSchema({
    query: RootQuery
});
