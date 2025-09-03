import * as authController from "../controllers/auth.controller.js";

export async function authRoutes(fastify) {
  fastify.post("/auth/register", authController.registerUser);
  fastify.post("/auth/login", authController.loginUser);
}