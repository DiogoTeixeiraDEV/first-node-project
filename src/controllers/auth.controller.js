import * as authService from "../services/auth.service.js";


export async function registerUser(request, reply) {
    const {username, password} = request.body;
    const newUser = await authService.registerUser(username, password, request.server.database);
    return reply.status(201).send(newUser);
}

export async function loginUser(request, reply) {
    const {username, password} = request.body;
    const token = await authService.loginUser(username, password, request.server.database, reply);
    return reply.send ({ token });
}
