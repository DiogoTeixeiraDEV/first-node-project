import bcrypt from "bcrypt";

export async function registerUser(username, password, db) {
  const hash = await bcrypt.hash(password, 10);
  return await db.createUser(username, hash);
}

export async function loginUser(username, password, db, reply) {
  const user = await db.getUserByUsername(username);
  if (!user) throw new Error("Invalid credentials");

  const valid = await bcrypt.compare(password, user.password);
  if (!valid) throw new Error("Invalid credentials");

  const token = await reply.jwtSign({ id: user.id, username: user.username });
  return token;
}