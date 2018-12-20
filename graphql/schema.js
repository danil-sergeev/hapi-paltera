'use strict';
const graphql = require('graphql');
// transactions
const {DuoTransaction} = require('../models/transactions');
const {DuoTransactionType} = require('./transactions');
// configs
const {ExchangeConfig, Method, Param} = require('../models/configs');
const {ExchangeConfigType, MethodType, ParamType} = require('./configs');

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
