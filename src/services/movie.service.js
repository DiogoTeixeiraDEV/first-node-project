import { DatabasePostgres } from '../db/database-postgres.js';

const database = new DatabasePostgres();

export async function createMovie(movie){
    return database.create(movie)
}

export async function getMovies(search){
    return database.list(search);
}

export async function updateMovie (id, movie){
    return database.update(id, movie)
}

export async function deleteMovie(id){
    return database.delete(id)
}