// Import the Express framework.
// Express helps us create a web server and build APIs.
const express = require("express");

// Import the PostgreSQL connection from db.js.
// The pool object allows us to communicate with the database.
const pool = require("./db");

// Create an Express application.
const app = express();

// Tell Express to automatically convert incoming JSON data
// into JavaScript objects so we can access it using req.body.
app.use(express.json());

app.use(express.static(__dirname));

pool.query("SELECT NOW()", (err, result) => {

    if (err) {
        console.log(err);
    } else {
        console.log(result.rows);
    }

});

app.post("/booking", async (req, res) => {
    try {
        //destructuring
        const { name, email, service } = req.body;
        const result = await pool.query(
            `INSERT INTO bookings(name, email, service)
             VALUES($1, $2, $3)
             RETURNING *`,
            [name, email, service]
        );
        console.log(result.rows);
        res.send("Booking saved successfully!");
    } catch (error) {
        console.log(error);
        res.status(500).send("Database Error");
    }
});

app.listen(4000, () => {
    console.log("Server running at http://localhost:4000");
});