import { FastifyInstance } from 'fastify'
import launchesController from './controller/launches/launches'

export default async function router(fastify: FastifyInstance) {
  fastify.register(launchesController, { prefix: "/launches" })
}
