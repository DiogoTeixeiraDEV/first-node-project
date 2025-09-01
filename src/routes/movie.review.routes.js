import * as reviewController from '../controllers/moview.review.controller.js'
import * as movieMiddleware from "../middlewares/movie.middleware.js";

export async function movieReviewsRoutes(fastify) {
    fastify.post('/movies/:movieId/reviews', { preHandler : [movieMiddleware.validateMovieId]}, reviewController.createReview);
    fastify.get('/movies/:movieId/reviews',  { preHandler : [movieMiddleware.validateMovieId]}, reviewController.getReviewByMovie);
    fastify.delete('/movies/:movieId/reviews/:reviewId',{ preHandler : [movieMiddleware.validateMovieId, movieMiddleware.validateReviewId]}, reviewController.deleteReview);
}