const express = require('express');
const graphqlHTTP = require('express-graphql');


const schema = require('./graphql/schema');
const rootResolver = require('./graphql/resolver');

const app = express();
const port = process.env.PORT || 4000; 

app.use("/graphql", graphqlHTTP({
    schema,
    rootValue: rootResolver,
    graphiql: true,
    customFormatErrorFn: (error) => {
        // console.log(error);
        return error;
    }
}))

app.listen(port, () => console.log(`server started on port ${port}`));