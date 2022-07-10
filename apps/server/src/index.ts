import app from './app'
import config from './config'

app.listen({ port: config.port }, (err, address) => {
  if (err) {
    app.log.error(err)
    process.exit(1)
  } else {
    console.log('--- index.ts ->  -> app.swagger', app.swagger)
    console.log(`🚀 Fastify server running on address: ${address}`);
  }
})
