import { FastifyInstance } from 'fastify'
import { verififyJWT } from '@/http/middlewares/verify-jwt'
import { search } from './search'
import { create } from './create'
import { nearby } from './nearby'

export async function gymsRoutes(app: FastifyInstance) {
  app.addHook('onRequest', verififyJWT)

  app.get('/gyms/search', search)
  app.get('/gyms/nearby', nearby)

  app.post('/gyms', create)
}
