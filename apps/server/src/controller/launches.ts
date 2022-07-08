import { FastifyInstance, FastifyRequest, FastifyReply } from 'fastify'
import LaunchesRepo from '../repository/launches'

interface IYearParams {
  year: string
}

export default async function launchesController(fastify: FastifyInstance) {
  
  fastify.get('/', async (_request: FastifyRequest, reply: FastifyReply) => {
    const repo = new LaunchesRepo()
    const launches = await repo.getAllLaunches()
    
    return reply.send({ launches })
  })
  
  fastify.get('/:year', async (request: FastifyRequest<{ Params: IYearParams }>, reply: FastifyReply) => {
    const year = request.params.year
    const repo = new LaunchesRepo()
    
    const launches = await repo.getLaunches(year)
    
    return reply.send({ launches })
  })
  
}
