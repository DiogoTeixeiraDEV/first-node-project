export async function authenticate(request, reply) {
  try {
    await request.jwtVerify();   // o plugin já injeta o método
  } catch (err) {
    return reply.status(401).send({ error: "Unauthorized" });
  }
}