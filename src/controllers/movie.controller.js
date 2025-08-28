
import * as movieService from "../services/movie.service.js"

export async function createMovie(request, reply){
    
    const { title, description, duration} = request.body;

    const newMovie = await movieService.createMovie({
        title,
        description,
        duration
    })

    return reply.status(201).send(newMovie);
}

export async function getMovies(request){

    const search = request.query.search;

    return await movieService.getMovies(search);

}

export async function updateMovie (request, reply) {

    const videoId = request.params.id
    const { title, description, duration} = request.body
    await movieService.updateMovie(videoId, {
        title,
        description,
        duration
    })

    return reply.status(204).send()
}

export async function deleteMovie (request, reply){

    const videoId = request.params.id

    await movieService.deleteMovie(videoId)

    return reply.status(204).send()
}