const graphql = require('graphql');

const {GraphQLObjectType, GraphQLString, GraphQLFloat} = graphql;


const DuoTransactionType = new GraphQLObjectType({
    name: 'DuoTransaction',
    fields: () => ({
        id: {type: GraphQLString},
        sellStock: {type: GraphQLString},
        buyStock: {type: GraphQLString},
        tradeCoin: {type: GraphQLString},
        mainCoin: {type: GraphQLString},
        sell: {type: GraphQLFloat},
        buy: {type: GraphQLFloat},
        profit: {type: GraphQLFloat},
        sellVolume: {type: GraphQLFloat},
        buyVolume: {type: GraphQLFloat},
    })
});

module.exports = DuoTransactionType;