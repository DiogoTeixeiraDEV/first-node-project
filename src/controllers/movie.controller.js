import * as movieService from "../services/movie.service.js";

export async function createMovie(request, reply) {
  const db = request.server.database;
  const { title, description, duration } = request.body;

  const newMovie = await movieService.createMovie(db, {
    title,
    description,
    duration
  });

  return reply.status(201).send(newMovie);
}

export async function getMovies(request, reply) {
  const db = request.server.database;
  const search = request.query.search;

  const movies = await movieService.getMovies(db, search);
  return reply.send(movies);
}

export async function updateMovie(request, reply) {
  const db = request.server.database;
  const videoId = request.params.id;
  const { title, description, duration } = request.body;

  await movieService.updateMovie(db, videoId, {
    title,
    description,
    duration
  });

  return reply.status(204).send();
}

export async function deleteMovie(request, reply) {
  const db = request.server.database;
  const videoId = request.params.id;

  await movieService.deleteMovie(db, videoId);
  return reply.status(204).send();
}
