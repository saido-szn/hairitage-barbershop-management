const express = require("express");
const pool = require("./db");
const nodemailer = require("nodemailer");

const app = express();

app.use(express.json());
app.use(express.static(__dirname));
const transporter = nodemailer.createTransport({
    service: "gmail",
    auth: {
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_PASSWORD
    }
});
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
// Get all bookings from the database
app.get("/bookings", async (req, res) => {
    try {
        // Run a SQL query to get every booking
        const result = await pool.query(
            "SELECT * FROM bookings ORDER BY id ASC"
        );
        // Send the bookings back to the browser as JSON
        res.json(result.rows);
    } catch (error) {
        console.log(error);
        res.status(500).send("Database Error");
    }
});
// Update an existing booking
app.put("/booking/:id", async (req, res) => {
    try {
        // Get the booking ID from the URL
        const { id } = req.params;

        // Get the new information from the request body
        const { name, email, service } = req.body;

        // Update the booking in PostgreSQL
        const result = await pool.query(
            `UPDATE bookings
             SET name = $1,
                 email = $2,
                 service = $3
             WHERE id = $4
             RETURNING *`,
            [name, email, service, id]
        );

        // Check whether the booking existed
        if (result.rows.length === 0) {
            return res.status(404).send("Booking not found");
        }

        // Send the updated booking back to the browser
        res.json(result.rows[0]);
    } catch (error) {
        console.log(error);
        res.status(500).send("Database Error");
    }
});

app.listen(4000, () => {
    console.log("Server running at http://localhost:4000");
});