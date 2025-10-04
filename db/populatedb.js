const pool = require("./pool");

async function populateDB() {
  const messages = [
    { text: "Hello, world!", user: "Alice" },
    { text: "Welcome to the mini message board.", user: "Bob" },
    { text: "PostgreSQL is now working!", user: "Charlie" },
  ];

  for (const msg of messages) {
    await pool.query('INSERT INTO messages (text, "user") VALUES ($1, $2)', [
      msg.text,
      msg.user,
    ]);
  }

  console.log("Database populated!");
  await pool.end();
}

populateDB().catch((err) => {
  console.error("Error populating database:", err);
});
