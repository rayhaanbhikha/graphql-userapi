var { buildSchema } = require('graphql');
var user = require('./schemas/user');

module.exports = buildSchema(`
    ${user.types}
    type Query {
       ${user.query}
    }

    type Mutation {
        ${user.mutations}
    }
`)