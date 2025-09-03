import * as movieController from "../controllers/movie.controller.js";
import * as movieMiddleware from "../middlewares/movie.middleware.js"
import { authenticate } from "../middlewares/auth.middlewares.js";

export default async function videoRoutes(server){
    server.post(
        "/",
        {preHandler : [authenticate]},
        movieController.createMovie
    );
    
    server.get("/", movieController.getMovies);

    server.put(
        "/:id",
        { preHandler : [authenticate, movieMiddleware.validateMovieId]},
         movieController.updateMovie);

    server.delete("/:id",
         { preHandler : [authenticate, movieMiddleware.validateMovieId]},
          movieController.deleteMovie);
}