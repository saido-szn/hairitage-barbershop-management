require("dotenv").config();
const nodemailer = require("nodemailer");
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
const transporter = nodemailer.createTransport({
    service: "gmail",
    auth: {
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_PASSWORD
    }
});
pool.query("SELECT NOW()", (err, result) => {
    if (err) {
        console.log(err);
    } else {
        console.log(result.rows);
    }
});
app.post("/booking", async (req, res) => {
    try {
        const { name, email, service } = req.body;
        // Save booking in PostgreSQL
        const result = await pool.query(
            `INSERT INTO bookings(name, email, service)
             VALUES($1, $2, $3)
             RETURNING *`,
            [name, email, service]
        );
        console.log(result.rows);
        // Send confirmation email to the customer
        await transporter.sendMail({
            from: process.env.EMAIL_USER,
            to: email,
            subject: "Hairitage BarberShop Booking Confirmation",

            text: `Hello ${name},
Your booking has been received.
Service: ${service}

Thank you for choosing Hairitage BarberShop.
`
        });
        // Send notification email to the barbershop
        await transporter.sendMail({
            from: process.env.EMAIL_USER,
            to: process.env.SHOP_EMAIL,
            subject: "New Hairitage BarberShop Booking",

            text: `A new booking has been received.

Customer: ${name}
Email: ${email}
Service: ${service}

Please check the booking system for more details.
`
        });

        res.send("Booking saved and emails sent!");
    } catch (error) {
        console.log(error);
        res.status(500).send("Database or Email Error");
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