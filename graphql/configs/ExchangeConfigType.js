const graphql = require('graphql');

const {GraphQLString, GraphQLObjectType} = graphql;


const ExchangeConfigType = new GraphQLObjectType({
    name: 'ExchangeConfig',
    fields: () => ({
        title: {type: GraphQLString}
    })
})

module.exports = ExchangeConfigType;
