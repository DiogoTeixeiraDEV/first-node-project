import * as reviewController from '../controllers/moview.review.controller.js'
import * as movieMiddleware from "../middlewares/movie.middleware.js";
import { authenticate } from '../middlewares/auth.middlewares.js';


export async function movieReviewsRoutes(fastify) {
    fastify.post(
        '/movies/:movieId/reviews',
         { preHandler : [authenticate, movieMiddleware.validateMovieId]},
          reviewController.createReview);

    fastify.get(
        '/movies/:movieId/reviews',
          { preHandler : [movieMiddleware.validateMovieId]},
           reviewController.getReviewByMovie);

    fastify.delete(
        '/movies/:movieId/reviews/:reviewId',
        { preHandler : [authenticate,
        movieMiddleware.validateMovieId,
        movieMiddleware.validateReviewId]},
        
        reviewController.deleteReview);
}