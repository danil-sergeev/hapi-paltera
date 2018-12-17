const graphql = require('graphql');

const DuoTransaction = require('../models/DuoTransaction')
const DuoTransactionType = require('./DuoTransactionType');

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
