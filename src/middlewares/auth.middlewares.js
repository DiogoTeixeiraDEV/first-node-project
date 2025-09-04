import { DatabasePostgres } from "../db/database-postgres.js";

export async function authenticate(request, reply) {
  try {
    const decoded = await request.jwtVerify();   // o plugin já injeta o método

    const userId = decoded.id;

    const user = await DatabasePostgres.getUserById(userId);
    if (!user){
      return reply.code(401).send({error : "User not found"})
    }

    request.user = user;
  } catch (err) {
    return reply.status(401).send({ error: "Unauthorized" });
  }
}

