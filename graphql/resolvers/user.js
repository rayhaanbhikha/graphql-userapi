const path = require('path');
const users = require(path.resolve('users.json'));

const getUserById = id => users.filter(user => user.id === id);

const createUser = ({input}) => {
    const id = users.length;
    const user = new User(id, input);
    //in memory add to json array
    users.push(user);
    return user;
}

class User {
    constructor(id, {name, age, gender}) {
        this.id = id;
        this.name = name;
        this.age = age;
        this.gender = gender;
    }
}

module.exports = {
    users: ({ id }) => id ? getUserById(id) : users,
    createUser
}