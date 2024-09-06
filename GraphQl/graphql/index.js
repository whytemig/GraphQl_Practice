import { createSchema, createYoga } from "graphql-yoga";
import { typeDefs as User, userResolvers } from "./models/user.js";
import _ from "lodash";
import { run } from "./database/index.js";

const { data } = await run();

const queries = `#graphql
    type Query{
        hello: String
    }
    `;

const resolvers = {
  //   resolver for the Queries
  Query: {
    hello: () => "Miguel",
  },
};

const schema = createSchema({
  typeDefs: [queries, User],
  resolvers: _.merge(resolvers, userResolvers),
});

export const yoga = createYoga({
  schema,
  context: { data },
});
