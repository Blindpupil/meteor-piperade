import { ApolloServer } from 'apollo-server-express'
import { WebApp } from 'meteor/webapp'
import { getUser } from 'meteor/apollo'
import merge from 'lodash/merge'

const hiSchema = `
type Query {
  hi: String
}
`
const hiResolver = {
  Query: {
    hi: () => 'Hello World',
  },
}

const typeDefs = [hiSchema]
const resolvers = merge(
  hiResolver,
)

const server = new ApolloServer({
  typeDefs,
  resolvers,
  context: async ({ req }) => ({
    user: await getUser(req.headers.authorization),
  }),
})

server.applyMiddleware({
  app: WebApp.connectHandlers,
  path: '/graphql',
})
