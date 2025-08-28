CREATE TABLE IF NOT EXISTS movie_reviews (
    id SERIAL PRIMARY KEY,
    movie_id INTEGER NOT NULL REFERENCES videos(id) ON DELETE CASCADE,
    reviewer_name TEXT NOT NULL,
    rating INTEGER CHECK (rating >= 0 AND rating <= 10),
    comment TEXT
);