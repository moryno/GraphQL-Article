import { buildSchema } from "graphql";

const graphqlSchema = buildSchema(`
    type Post {
        _id: ID!
        title: String!
        content: String!
        imageUrl: String!
        author: User!
        createdAt: String!
        updatedAt: String!
    }

    type User {
        _id: ID!
        name: String!
        email: String!
        password: String!
        posts: [Post!]!
    }

    type AuthData{
        userId: String!
        token: String!
        name: String!
    }

    input UserInputData {
        email: String!
        name: String!
        password: String!
    }
        
    input PostInputData {
        title: String!
        content: String!
        imageUrl: String!
    }

    type RootMutation {
        register(userInput: UserInputData): User!
        createPost(postInput: PostInputData): Post!
        deletePost(id: ID!): String!
    }
    
    type RootQuery {
        login(email: String!, password: String!): AuthData!
        posts: [Post!]!
        post(id: ID!): Post!
    }

    schema {
        query: RootQuery
        mutation: RootMutation
    }
    `);

export default graphqlSchema;
