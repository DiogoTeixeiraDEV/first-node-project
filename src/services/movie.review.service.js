import { DatabasePostgres } from '../db/database-postgres.js';

const database = new DatabasePostgres();

export async function createReview(review) {
    return await database.createReview(review);
}

export async function getReviewByMovie(movieId) {
    return await database.getReviewByMovie(movieId);
}

export async function deleteReview(reviewId, movieId) {
    return await database.deleteReview(reviewId, movieId);
}