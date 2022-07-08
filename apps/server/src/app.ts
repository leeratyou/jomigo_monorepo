import fastify from 'fastify'
import cors from '@fastify/cors'
import routes from './routes'
import config from './config'

const server = fastify({
  logger: false
})

server.register(cors)
server.register(routes, { prefix: config.prefix })

export default server
