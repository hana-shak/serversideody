const { gql } = require('apollo-server');

const typeDefs = gql`
    
    type Mutation {
        incrementTrackView(id:ID!):IncrementTypeViewsResponse!
    }

    type IncrementTypeViewsResponse {
        code : Int!
        success: Boolean!
        message: String!
        track:Track
    }

    type Query {
        tracksForHome:[Track!]!
        track(id:ID!):Track

    }

   

    type Track {
        id:	ID!
        thumbnail:	String
        topic:	String
        author:	Author
        title: String!
        description:	String
        numberOfViews:	Int
        numberOfLikes:	Int
        createdAt:	String
        length:	Int
        modulesCount:Int
        mod:[Mod!]
       

    }
    
    type Author {
        id :ID!
        name : String!
        photo : String
    }

    type Mod{
        id: ID!
        title:	String!
        trackId:	String!
        authorId:	String!
        topic:	String
        length:	Int
        content: String	
        videoUrl: String
    }
  
   
`

module.exports = typeDefs;