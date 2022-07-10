import { FastifySchema } from 'fastify'

export const getLaunchesSchema: FastifySchema = {
  description: 'get all launches data',
  tags: ['launch'],
  summary: 'get all',
  response: {
    201: {
      description: 'Successful response',
      type: 'object',
      properties: {
        hello: { type: 'string' }
      }
    },
    default: {
      description: 'Default response',
      type: 'object',
      properties: {
        foo: { type: 'string' }
      }
    }
  },
  security: [
    {
      "apiKey": []
    }
  ]
}

export const getLaunchesYearSchema: FastifySchema = {
  description: 'get year launches data',
  tags: ['launch'],
  summary: 'get year',
  response: {
    201: {
      description: 'Successful response',
      type: 'object',
      properties: {
        hello: { type: 'string' }
      }
    },
    default: {
      description: 'Default response',
      type: 'object',
      properties: {
        foo: { type: 'string' }
      }
    }
  },
  security: [
    {
      "apiKey": []
    }
  ]
}
