const graphql = require('graphql');
const ExchangeConfigType = require('./ExchangeConfigType')

const {GraphQLObjectType, GraphQLString, GraphQLBoolean} = graphql;


const MethodType = new GraphQLObjectType({
    name: 'Method',
    fields: () => ({
        title: {type: GraphQLString},
        url: {type: GraphQLString},
        isPrivate: {type: GraphQLBoolean},
        config: ExchangeConfigType
    })
});

module.exports = MethodType;

