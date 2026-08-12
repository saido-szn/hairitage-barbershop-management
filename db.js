//This file is used to connect to the PostgreSQL database using the pg library. 
// It uses environment variables to store sensitive information such as the database user, host, name, password, and port. 
// The dotenv library is used to load these environment variables from a .env file.
require("dotenv").config();
// Import the Pool class from the pg library.
// The Pool class allows us to create a pool of connections to the PostgreSQL database, which can be reused for multiple queries.
const { Pool } = require("pg");
// Create a new Pool instance with the database connection configuration.
const pool = new Pool({
    user: process.env.DB_USER,
    host: process.env.DB_HOST,
    database: process.env.DB_NAME,
    password: process.env.DB_PASSWORD,
    port: process.env.DB_PORT
});
// Export the pool object so it can be used in other files, such as server.js, to execute queries against the PostgreSQL database.
module.exports = pool;