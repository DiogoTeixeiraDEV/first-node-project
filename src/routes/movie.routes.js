import * as movieController from "../controllers/movie.controller.js";
import * as movieMiddleware from "../middlewares/movie.middleware.js"


export default async function videoRoutes(server){
    server.post("/", movieController.createMovie);
    server.get("/", movieController.getMovies);
    server.put("/:id", { preHandler : [movieMiddleware.validateMovieId]}, movieController.updateMovie);
    server.delete("/:id", { preHandler : [movieMiddleware.validateMovieId]}, movieController.deleteMovie);
}