const express = require('express');
const { Pool } = require('pg');
const app = express();
const port = 5000;

// PostgreSQL connection pool
const pool = new Pool({
  user: process.env.PGUSER,
  host: process.env.PGHOST,
  database: process.env.PGDATABASE,
  password: process.env.PGPASSWORD,
  port: process.env.PGPORT,
});

// Simple "hello" route
app.get('/api/hello', (req, res) => {
  res.json({ message: 'Hello from backend!' });
});

// Route to fetch all data from a sample table (e.g., "items")
app.get('/api/data', async (req, res) => {
  try {
    const result = await pool.query('SELECT * FROM items'); // <-- make sure "items" table exists
    res.json(result.rows);
  } catch (error) {
    console.error('Error querying database:', error);
    res.status(500).json({ error: 'Failed to fetch data from database' });
  }
});

app.listen(port, () => {
  console.log(`Backend listening at http://localhost:${port}`);
});
