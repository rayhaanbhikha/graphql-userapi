const userType = `
    type User {
        id: Int
        name: String
        age: Int
        gender: String
    }
`

const userQueries = `
    users(id: Int): [User]!
`

const userInputType = `
    input UserInput {
        name: String
        age: Int
        gender: String
    }
`

const userMutations = `
    createUser(input: UserInput): User
`

module.exports = {
    types: `
        ${userType}
        ${userInputType}
    `,
    query: userQueries,
    mutations: userMutations
}