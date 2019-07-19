const path = require('path');
const users = require(path.resolve('users.json'));

const getUserById = id => users.filter(user => user.id === id);

module.exports = ({ id }) => id ? getUserById(id) : users;