const express = require("express");
const { typeDefs, resolvers } = require("./schema");
const { ApolloServer } = require("apollo-server-express");
const db = require("./connection");

const { authMiddleware } = require('./auth');
const path = require("path");
const PORT = process.env.PORT || 3001; //specifiy the port for deployment, use 3001 for development
const app = express(); //get the express juice

app.use(express.urlencoded({ extended: false }));
app.use(express.json());
const server = new ApolloServer({
    introspection: true,
    typeDefs,
    resolvers,
    context: authMiddleware
  });
  
  server.applyMiddleware({ app });

  if (process.env.NODE_ENV === "production") {
    app.use(express.static(path.join(__dirname, "../client/build")));
  }
  
  app.get("*", (req, res) => {
    res.sendFile(path.join(__dirname, "../client/build/index.html"));
  });

  db.once("open", () => {
    app.listen(PORT, () => {
      console.log(`API server running on port ${PORT}!`);
      console.log(`Use GraphQL at http://localhost:${PORT}${server.graphqlPath}`);
    });
  });