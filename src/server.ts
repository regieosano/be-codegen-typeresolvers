import { PrismaClient } from "@prisma/client";
import { ApolloServer } from "apollo-server";

// import resolvers
import { resolvers } from "./_main-resolvers/resolvers";

// import schema
import { typeDefs } from "./_main-graphql/schema.graphql";

export const prisma = new PrismaClient();

// instantiate the apollo server
const server = new ApolloServer({ typeDefs, resolvers });

// start the graphql server
server.listen().then(({ url }) => {
  // eslint-disable-next-line no-console
  console.log(`Server ready at ${url}`);
});
