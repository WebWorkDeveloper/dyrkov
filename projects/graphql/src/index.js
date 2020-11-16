const { graphql, buildSchema } = require('graphql');

const userSchema = buildSchema(`
    type User {
        name: String
        Age: Float
    }
`)

`query U`

console.log(userSchema)
