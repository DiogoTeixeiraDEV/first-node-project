
import { sql } from './db.js'

export class DatabasePostgres {

    async list(search) {
        let videos
        
        if (search) {
            videos = await sql `select * from videos where title ilike ${'%' + search + '%'}`
        }   else {
            videos = await sql `select * from videos`
        }
    
        return videos
    }
    
    async create(video) {

        const {title, description, duration} = video

        const [newVideo] = await sql `insert into videos (title, description, duration) VALUES ( ${title}, ${description}, ${duration})
        RETURNING *
        `
        return newVideo;
    }

    async update(id, video) {
        const {title, description, duration} = video

        await sql `update videos set title = ${title}, description =  ${description}, duration =  ${duration} WHERE id = ${id} `
    }

    async delete(id) {
        await sql `delete from videos where id =  ${id}`
       
    }

    async getMovieById(id) {
        const [movie] = await sql`SELECT * FROM videos WHERE id = ${id}`;
        return movie || null;
      }

    async createReview(review) {
        const { movie_id, reviewer_name, rating, comment } = review;

        const [newReview] = await sql`
            INSERT INTO movie_reviews (movie_id, reviewer_name, rating, comment)
            VALUES (${movie_id}, ${reviewer_name}, ${rating}, ${comment})
            RETURNING *;
            `;

    return newReview;
}

    async getReviewByMovie(movieId) {
        return await sql`
            SELECT r.id, r.reviewer_name, r.rating, r.comment, v.title AS movie_title
            FROM movie_reviews r
            JOIN videos v ON r.movie_id = v.id
            WHERE r.movie_id = ${movieId};
            `;
    }

    async deleteReview(reviewId, movieId) {
    await sql`
        DELETE FROM movie_reviews
        WHERE id = ${reviewId} AND movie_id = ${movieId};
    `;
}

    async getReviewById(reviewId) {
        const [review] = await sql`
        SELECT * FROM movie_reviews
        WHERE id = ${reviewId};
        `;
        return review || null;
    }
    

}