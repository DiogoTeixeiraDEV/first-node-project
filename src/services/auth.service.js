import bcrypt from "bcrypt";

export async function registerUser(username, password){
    const hashPassword = await bcrypt.hash(password, 10);

    const [newUser] = await global.db.sql`
        INSERT INTO users (username, password)
        VALUES (${username}, ${hashPassword})
        RETURNING id, username, created_at
        `;
    return newUser;
}

export async function loginUser(username, password, jwt) {
    const [user] = await global.db.sql`
    SELECT * FROM users WHERE username = ${username}`;

    if (!user) throw new Error("invalid credentias");

    const isValid = await bcrypt.compare(password, user.password);
    if (!isValid) throw new Error("Invalid Password");

    const token = jwt.sign({id : user.id, username: user.username});
    return token;
}