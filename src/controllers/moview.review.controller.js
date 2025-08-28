import * as reviewService from '../services/movie.review.service.js'

export async function createReview(request, reply) {
    const movie_id = parseInt(request.params.movieId);
    const { reviewer_name, rating, comment } = request.body;

    const newReview = await reviewService.createReview({
        movie_id,
        reviewer_name,
        rating,
        comment
    });

    return reply.status(201).send(newReview);
}

export async function getReviewByMovie(request, reply) {
    const movieId = parseInt(request.params.movieId);

    const reviews = await reviewService.getReviewByMovie(movieId);

    return reply.status(200).send(reviews);
}

export async function deleteReview(request, reply) {
    const reviewId = parseInt(request.params.reviewId);
    const movieId = parseInt(request.params.movieId);
    
    await reviewService.deleteReview(reviewId, movieId);

    return reply.status(204).send(); // No Content
}