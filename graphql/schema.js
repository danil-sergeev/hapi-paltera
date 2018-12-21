'use strict';
const graphql = require('graphql');
// transactions
const {DuoTransaction} = require('../models/transactions');
const {DuoTransactionType} = require('./transactions');
// configs
const {ExchangeConfig, Method, Param, ExchangeSecret} = require('../models/configs');
const {ExchangeConfigType, MethodType, ParamType, ExchangeSecretType} = require('./configs');



const {GraphQLObjectType, GraphQLString, GraphQLSchema, GraphQLList, GraphQLNonNull, GraphQLInputObjectType} = graphql;


const RootMutation = new GraphQLInputObjectType({
    name: 'RootMutationType',
    fields : {
        ExchangeSecret: {
            type: ExchangeSecretType,
            args: {
                exchangeTitle: {type: GraphQLString},
                secret: {type: GraphQLString},
                apiKey: {type: GraphQLString}
            },
            resolve(parents, args) {
                if (!args) {
                    throw Error("Please provide initials to create exchange secret object.")
                }
                const exchangeSecret = new ExchangeSecret({
                    ...args
                });
                return exchangeSecret.save();
            }
        }
    }
});


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
        },

        exchangeConfig: {
            type: ExchangeConfigType,
            args: {title: {type: GraphQLString}},
            resolve(parents, args) {
                return ExchangeConfig.find({title: args.title})
            }
        },
        configs: {
            type: new GraphQLList(ExchangeConfigType),
            resolve() {
                return ExchangeConfig.find().populate([Method, Param]);
            }
        },
        param: {
            type: ParamType,
            args: {id: {type: GraphQLString}, title: {type: GraphQLString}},
            resolve(parents, args) {
                return Param.find(...args).populate(ExchangeConfig)
            }
        },
        allParams: {
            type: new GraphQLList(ParamType),
            resolve() {
                return Param.find()
            }
        },
        method: {
            type: MethodType,
            args: {id: {type: GraphQLString}, title: {type: GraphQLString}},
            resolve(parents, args) {
                return Method.find(...args).populate(ExchangeConfig)
            }
        },
        allMethods: {
            type: new GraphQLList(MethodType),
            resolve() {
                return Method.find().populate(ExchangeConfig)
            }
        }
    }
});


module.exports = new GraphQLSchema({
    query: RootQuery,
    mutation: RootMutation
});
