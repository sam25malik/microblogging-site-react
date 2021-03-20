/**
 * @openformation/recruiting-challenge-frontend-engineer
 *
 * Copyright, 2021
 *
 * All rights reserved
 *
 */

import { ApolloError, ApolloServer, gql } from "apollo-server-micro";

import { createPersistence } from "services";

const typeDefs = gql`
  scalar DateTime

  type Query {
    shouts: [Shout!]!
  }

  type Mutation {
    createShout(contents: String!): Shout!
  }

  type Shout {
    id: ID!
    contents: String!
    createdAt: DateTime!
  }
`;

const resolvers = {
  Query: {
    async shouts() {
      const persistence = createPersistence();

      try {
        const shouts = await persistence.findAll();

        return shouts;
      } catch (err) {
        throw new ApolloError(
          "Unable to find all shout",
          "ShoutPersistenceError"
        );
      }
    },
  },
  Mutation: {
    async createShout(parent, args: { contents: string }) {
      const persistence = createPersistence();

      try {
        const shout = await persistence.createShout({
          contents: args.contents,
        });

        return shout;
      } catch (err) {
        throw new ApolloError(
          "Unable to persist the shout",
          "ShoutPersistenceError"
        );
      }
    },
  },
};

const apolloServer = new ApolloServer({ typeDefs, resolvers });

export const config = {
  api: {
    bodyParser: false,
  },
};

export default apolloServer.createHandler({ path: "/api/graphql" });
