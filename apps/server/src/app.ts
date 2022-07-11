import fastify from 'fastify'
import cors from '@fastify/cors'
import routes from './routes'
import config from './config'
import swagger from './services/swagger'

const server = fastify({
  logger: true
})

server.register(cors)
server.register(swagger)
server.register(routes, { prefix: config.prefix })

export default server
