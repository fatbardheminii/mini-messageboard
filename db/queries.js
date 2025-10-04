const pool = require("./pool");

async function addMessage(text, user) {
  const { rows } = await pool.query(
    'INSERT INTO messages (text, "user") VALUES ($1, $2) RETURNING *',
    [text, user]
  );
  return rows[0];
}

async function getMessages() {
  const { rows } = await pool.query(
    "SELECT * FROM messages ORDER BY added DESC"
  );
  return rows;
}

async function getMessageById(id) {
  const { rows } = await pool.query("SELECT * FROM messages WHERE id = $1", [
    id,
  ]);
  return rows[0];
}

module.exports = { getMessages, addMessage, getMessageById };
