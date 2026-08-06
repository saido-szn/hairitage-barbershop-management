const express = require("express");
//Bring me the PostgreSQL connection
const pool = require("./db");

const app = express();
// Allows Express to read JSON data
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