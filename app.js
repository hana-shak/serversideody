//entry point of the server
const { ApolloServer } = require('apollo-server');
const typeDefs  = require ('./src/schema');
const resolvers = require('./src/resolvers');
const CATAPI = require('./src/datasources/category-api');

/*
const mocks = {
    Query : () => ({
        categoriesForHome : () => [...new Array(6)]
    }),
    Category: ()=>({
        id: () => 'c1',
        name:() =>'Atopic',
        color:() =>'#f5428d'
    }
    // {
    //     id: () => 'c2',
    //     name:() =>'AWWWWWc',
    //     color:() =>'#f5428d'
    // },
    // {
    //     id: () => 'c3',
    //     name:() =>'OOOOOOOO',
    //     color:() =>'#f5428d'
    // } 
    )
    // User:()=>({}),
    // Discussion : () => ({})
}
*/

const server = new ApolloServer({ 
    typeDefs,
    resolvers,
    dataSources : ()=> {
        return { 
            catApi : new CATAPI()
        };
    }
});

server.listen({port: process.env.PORT || 4000}).then(()=>{
    console.log(
        `Server is running!
         Listening on port 4000
         Query at http://localhost:4000`
    )
})