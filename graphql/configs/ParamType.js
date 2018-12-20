const graphql = require('graphql');
const MethodType = require('./MethodType')

const {GraphQLString, GraphQLObjectType} = graphql;


const ParamType = new GraphQLObjectType({
    name: 'Param',
    fields: () => ({
        title: {type: GraphQLString},
        _default: {type: GraphQLString},
        method: MethodType
    })
});

module.exports = ParamType;
