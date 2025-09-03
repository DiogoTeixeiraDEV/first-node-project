
import { fastify } from 'fastify'
import videoRoutes from './routes/movie.routes.js';
import { movieReviewsRoutes } from './routes/movie.review.routes.js';
import { DatabasePostgres } from './db/database-postgres.js';
import fastifyJwt from '@fastify/jwt';
import {authRoutes } from './routes/auth.routes.js';

const server = fastify();


server.register(fastifyJwt, {
     secret:  "secret-key",
});


server.register(videoRoutes, {prefix: "/movies"})
server.register(movieReviewsRoutes);
server.register(authRoutes);

const database = new DatabasePostgres();
server.decorate ("database", database);

server.listen({
     host: '0.0.0.0',
     port: process.env.PORT ?? 3333,
})