import { sql } from "./db.js";


async function createTable() {

 

  await sql`
    CREATE TABLE videos (
    id          TEXT    PRIMARY KEY,
    title       TEXT    NOT NULL,
    description TEXT,
    duration    INTEGER NOT NULL CHECK (duration > 0)
    );
  `;
  console.log("✅ Tabela criada com sucesso!");
}

createTable();
