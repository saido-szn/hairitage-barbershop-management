const express = require("express");

const app = express();

app.use(express.static(__dirname));
// Allows Express to read JSON data
app.use(express.json());

app.post("/booking", (req, res) => {

    console.log(req.body);

    res.send("Booking received!");

});

app.listen(4000, () => {
    console.log("Server running at http://localhost:4000");
});