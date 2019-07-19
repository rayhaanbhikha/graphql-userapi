const userType = `
    type User {
        id: Int
        name: String
        age: Int
        gender: String
    }
`

const userQuery = `
    users(id: Int): [User]!
`

module.exports = {
    type: userType,
    query: userQuery
}