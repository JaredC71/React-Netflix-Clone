const { AuthenticationError } = require("apollo-server-express");
const { gql } = require("apollo-server-express");
const User = require("./User");
const { signToken } = require("./auth");

const resolvers = {
  Query: {
    users: async () => {
      //complete

      return User.find().populate("posts");
    },
  },
  Mutation: {
    signup: async (parent, { username, password }) => {
     
      const user = await User.create({ username, password });
      const token = signToken(user);

      return { token, user };
    },
    login: async (parent, { username, password }) => {
      //complete
      //good
      const user = await User.findOne({ username });

      if (!user) {
        throw new AuthenticationError("No username found!");
      }

      const correctPw = await user.isCorrectPassword(password);

      if (!correctPw) {
        throw new AuthenticationError("Incorrect password!");
      }

      const token = signToken(user);
      return { token, user };
    },
  },
};

const typeDefs = gql`
  type User {
    _id: ID
    username: String
    password: String
  }
  type Auth {
    token: ID!
    user: User
  }
  type Query {
    users: [User]
    
  }
  type Mutation {
    signup(username: String!, password: String!): Auth
    login(username: String!, password: String!): Auth
    
  }
`;

module.exports = {
    resolvers,
    typeDefs
};