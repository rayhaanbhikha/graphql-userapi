var { buildSchema } = require('graphql');
var user = require('./schemas/user');

module.exports = buildSchema(`
    ${user.type}
    type Query {
       ${user.query}
    }
`)