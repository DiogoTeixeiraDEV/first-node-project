export async function validateMovieId(request, reply) {
  const movieId = parseInt(request.params.movieId || request.params.id); 
  if (isNaN(movieId) || movieId <= 0) {
    return reply.status(400).send({ error: "Invalid movie ID" });
  }

  const movie = await request.server.database.getMovieById(movieId);
  if (!movie) {
    return reply.status(404).send({ error: "Movie not found" });
  }

}


export async function validateReviewId(request,reply){

    const db = request.server.database;
    const movieId = parseInt(request.params.movieId);
    const reviewId = parseInt(request.params.reviewId);
  
   
    if (isNaN(reviewId) || reviewId <= 0) {
      return reply.status(400).send({ error: "Invalid review ID" });
    }
  
    const review = await db.getReviewById(reviewId);
  
    if (!review) {
      return reply.status(404).send({ error: "Review not found" });
    }
  
    // Verifica se a review pertence ao movie
    if (review.movie_id !== movieId) {
      return reply
        .status(400)
        .send({ error: "Review does not belong to this movie" });
    }
  }
