import * as movieController from "../controllers/movie.controller.js";

export default async function videoRoutes(server){
    server.post("/", movieController.createMovie);
    server.get("/", movieController.getMovies);
    server.put("/:id", movieController.updateMovie);
    server.delete("/:id", movieController.deleteMovie);
}