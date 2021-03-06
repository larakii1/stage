const Subscription = require('./resolvers/Subscription')
const { prisma } = require('./generated/prisma-client')
const { GraphQLServer } = require('graphql-yoga')

// 1


const Query = require('./resolvers/Query')
const Mutation = require('./resolvers/Mutation')
const User = require('./resolvers/User')
const Link = require('./resolvers/Link')
  
// 2
const resolvers = {
    Query,
    Mutation,
    User,
    Link,
    Subscription,

  }

// 3
const server = new GraphQLServer({
    typeDefs: './src/schema.graphql',
    resolvers,
    context: request => {
      return {
        ...request,
        prisma,
      }
    },
  })
server.start(() => console.log(`Server is running on http://localhost:4000`))