export async function createReview(db, review) {
    return await db.createReview(review);
  }
  
  export async function getReviewByMovie(db, movieId) {
    return await db.getReviewByMovie(movieId);
  }
  
  export async function deleteReview(db, reviewId, movieId) {
    return await db.deleteReview(reviewId, movieId);
  }