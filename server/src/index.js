const { ApolloServer } = require("@apollo/server");
const { startStandaloneServer } = require("@apollo/server/standalone");
const typeDefs = require("./schema");
const resolvers = require("./resolvers");
const TrackAPI = require("./datasource/track-api");
// const { addMocksToSchema } = require("@graphql-tools/mock");
// const { makeExecutableSchema } = require("@graphql-tools/schema");

// const mocks = {
//   Query: () => ({
//     tracksForHome: () => [...new Array(6)],
//   }),

//   Track: () => ({
//     id: () => "track_01",
//     title: () => "Astro Kitty, Space Explorer",
//     author: () => {
//       return {
//         name: "Grumpy Cat",
//         photo:
//           "https://res.cloudinary.com/dety84pbu/image/upload/v1606816219/kitty-veyron-sm_mctf3c.jpg",
//       };
//     },
//     thumbnail: () =>
//       "https://res.cloudinary.com/dety84pbu/image/upload/v1598465568/nebula_cat_djkt9r.jpg",
//     length: () => 1210,
//     modulesCount: () => 6,
//   }),
// };

const startApolloSever = async () => {
  const server = new ApolloServer({
    typeDefs,
    resolvers,
  });

  //this func. is a promise and needs the await keyword.
  //
  const { url } = await startStandaloneServer(server, {
    context: async () => {
      const { cache } = server;
      return {
        dataSources: {
          trackAPI: new TrackAPI({ cache }),
        },
      };
    },
  });

  console.log(`Appolo server is running at ${url}`);
};

startApolloSever();
