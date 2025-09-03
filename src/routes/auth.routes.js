import * as authController from "../controllers/auth.controller.js";

export async function authRoutes(fastify) {
  fastify.post("/register", authController.registerUser);
  fastify.post("/login", authController.loginUser);
}