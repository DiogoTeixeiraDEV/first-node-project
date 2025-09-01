export async function createMovie(db, movie) {
  return await db.create(movie);
}

export async function getMovies(db, search) {
  return await db.list(search);
}

export async function updateMovie(db, id, movie) {
  return await db.update(id, movie);
}

export async function deleteMovie(db, id) {
  return await db.delete(id);
}