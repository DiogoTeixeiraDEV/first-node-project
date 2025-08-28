import * as reviewController from '../controllers/moview.review.controller.js'

export async function movieReviewsRoutes(fastify) {
    fastify.post('/movies/:movieId/reviews', reviewController.createReview);
    fastify.get('/movies/:movieId/reviews', reviewController.getReviewByMovie);
    fastify.delete('/movies/:movieId/reviews/:reviewId', reviewController.deleteReview);
}