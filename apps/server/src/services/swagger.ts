import { FastifyInstance } from 'fastify'
import swagger from '@fastify/swagger'

export default async function swaggerInit(fastify: FastifyInstance) {
  fastify.register(
    swagger,
    {
      routePrefix: '/documentation',
      swagger: {
        info: {
          title: 'Test swagger',
          description: 'Testing the Fastify swagger API',
          version: '0.1.0'
        },
        externalDocs: {
          url: 'https://swagger.io',
          description: 'Find more info here'
        },
        host: 'localhost',
        schemes: ['http'],
        consumes: ['application/json'],
        produces: ['application/json'],
        tags: [
          { name: 'launches', description: 'Launches related end-points' },
        ],
        definitions: {
          Launch: {
            type: 'object',
            required: ['launch_number'],
            properties: {
              success: { type: 'boolean' },
              launch_number: { type: 'number' },
              launch_name: { type: 'string' },
              launch_date_utc: { type: 'string', format: 'ISOString' },
            }
          }
        },
        securityDefinitions: {
          apiKey: {
            type: 'apiKey',
            name: 'apiKey',
            in: 'header'
          }
        }
      },
      uiConfig: {
        docExpansion: 'full',
        deepLinking: false
      },
      uiHooks: {
        onRequest: function (_request: any, _reply: any, next: () => void) { next() },
        preHandler: function (_request: any, _reply: any, next: () => void) { next() }
      },
      staticCSP: true,
      transformStaticCSP: (header: any) => header,
      exposeRoute: true
  })
}
