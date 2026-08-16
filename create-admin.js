const bcrypt = require("bcrypt");
const pool = require("./db");

async function createAdmin() {
    try {
        const username = "admin";
        const password = "admin123";

        // Convert the plain password into a secure hash
        const hashedPassword = await bcrypt.hash(password, 10);

        // Store the username and hashed password in PostgreSQL
        await pool.query(
            `INSERT INTO admins(username, password)
             VALUES($1, $2)`,
            [username, hashedPassword]
        );

        console.log("Admin created successfully!");

    } catch (error) {
        console.log(error);
    } finally {
        // Close the database connection
        await pool.end();
    }
}

createAdmin();