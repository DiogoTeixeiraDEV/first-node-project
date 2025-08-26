
import { fastify } from 'fastify'
import videoRoutes from './routes/movie.routes.js';

const server = fastify();

server.register(videoRoutes, {prefix: "/videos"})

server.listen({
     host: '0.0.0.0',
     port: process.env.PORT ?? 3333,
    })