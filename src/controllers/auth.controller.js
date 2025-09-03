import * as authService from "../services/auth.service.js";


export async function registerUser(request, reply) {
    const {username, password} = request.body;
    const user = await authService.registerUser(username, password);
    return reply.status(201).send(user);
}

export async function loginUser(request, reply) {
    const {username, password} = request.body;
    const token = await authService.loginUser(username, password, request.server.jwt);
    return reply.send ({ token });
}
