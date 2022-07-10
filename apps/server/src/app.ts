import fastify from 'fastify'
import cors from '@fastify/cors'
import routes from './routes'
import config from './config'
import swagger from './services/swagger'

const server = fastify({
  logger: true
})

server
  .register(cors)
  .register(routes, { prefix: config.prefix })
  .then(() => {
    server.register(swagger)
  })

export default server
