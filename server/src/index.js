const { ApolloServer } = require("@apollo/server");
const { startStandaloneServer } = require("@apollo/server/standalone");
const typeDefs = require("./schema");

const startApolloSever = async () => {
  const server = new ApolloServer({ typeDefs });

  //this func. is a promise and needs the await keyword.
  //
  const { url } = await startStandaloneServer(server);

  console.log(`Appolo server is running at ${url}`);
};

startApolloSever();
