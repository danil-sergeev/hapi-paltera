const graphql = require('graphql');
const {ExchangeSecret} = require('.../models/configs/');

const {GraphQLString, GraphQLObjectType} = graphql;


const ExchangeSecretType = new GraphQLObjectType({
    name: 'ExchangeSecret',
    fields: () => ({
      title: {type: GraphQLString},
      secret: {type: GraphQLString},
      apiKey: {type: GraphQLString}
    })
})


module.exports = ExchangeSecretType;
