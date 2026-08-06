# 💈 Hairitage Barbershop Management System

A modern **full-stack barbershop management website** built to help customers explore services and book appointments online.

This project started as a frontend website using **HTML, CSS, and JavaScript** and is gradually being transformed into a full-stack application using **Node.js**, **Express.js**, and **PostgreSQL**.

The purpose of this project is to strengthen my web development skills by building a real-world application while learning each technology step by step.

---

# 📸 Preview

> Screenshots will be added as the project grows.

---

# ✨ Current Features

- Responsive website design
- Modern user interface
- Hero section
- About section
- Services section
- Gallery section
- Contact section
- Appointment booking form
- Dynamic service cards using JavaScript
- Service wishlist
- Local Storage support for wishlist
- Client-side form validation
- Express.js backend server
- REST API endpoint for bookings
- PostgreSQL database integration
- Stores customer bookings permanently

---

# 🛠️ Technologies Used

## Frontend

- HTML5
- CSS3
- JavaScript (ES6)

## Backend

- Node.js
- Express.js

## Database

- PostgreSQL

## Development Tools

- Visual Studio Code
- Git
- GitHub
- npm

---

# 📁 Project Structure

```
Hairitage-Barbershop/
│
├── css/
│
├── images/
│
├── js/
│
├── node_modules/
│
├── .env
├── .gitignore
├── db.js
├── index.html
├── LICENSE
├── package.json
├── package-lock.json
├── PROJECT_GUIDE.md
├── Project_Journey.md
├── README.md
└── server.js
```

---

# 🚀 Getting Started

## 1. Clone the repository

```bash
git clone https://github.com/saido-szn/hairitage-barbershop-management.git
```

---

## 2. Open the project

```bash
cd hairitage-barbershop-management
```

---

## 3. Install dependencies

```bash
npm install
```

This installs all required packages listed in `package.json`.

---

## 4. Create a `.env` file

Create a file named `.env` in the project root and add:

```env
DB_USER=your_username
DB_HOST=localhost
DB_NAME=hairitage_db
DB_PASSWORD=your_password
DB_PORT=5432
```

> **Note:** Never upload your `.env` file to GitHub.

---

## 5. Create the PostgreSQL database

Create a database named:

```sql
hairitage_db
```

Then create the `bookings` table:

```sql
CREATE TABLE bookings (
    id SERIAL PRIMARY KEY,
    name VARCHAR(100) NOT NULL,
    email VARCHAR(100) NOT NULL,
    service VARCHAR(100) NOT NULL,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);
```

---

## 6. Start the server

```bash
node server.js
```

You should see:

```
Server running at http://localhost:4000
```

---

## 7. Open the website

Visit:

```
http://localhost:4000
```

---

# 📡 API

## Create Booking

**Endpoint**

```
POST /booking
```

**Request Body**

```json
{
  "name": "John Doe",
  "email": "john@example.com",
  "service": "Fade Cut"
}
```

**Response**

```
Booking saved successfully!
```

---

# 🗄️ Database

Bookings are stored inside the PostgreSQL database.

Current table:

```
bookings
```

Columns:

| Column | Description |
|---------|-------------|
| id | Unique booking ID |
| name | Customer's name |
| email | Customer's email |
| service | Selected service |
| created_at | Date and time booking was created |

---

# 📚 Documentation

Additional project documentation:

- **PROJECT_GUIDE.md** – explains the purpose of every file and folder in the project.
- **Project_Journey.md** – documents how the project was built and the technologies learned throughout development.

---

# 🎯 Learning Objectives

This project is helping me learn:

- Frontend web development
- Backend development with Node.js
- Express.js
- REST APIs
- PostgreSQL
- Git and GitHub
- Full-stack application development
- Writing clean and maintainable code

---

# 🚧 Current Status

✅ Frontend complete

✅ Express server running

✅ PostgreSQL connected

✅ Booking form sends data to the backend

✅ Booking information is saved in the database

The project is actively being improved as I continue learning full-stack web development.

---

# 🔮 Future Improvements

Planned features include:

- View all bookings
- Update bookings
- Delete bookings
- Better user feedback
- Improved error handling
- Appointment management

These features will be added as I continue learning.

---

# 👨‍💻 Author

**Said Ahmed**

GitHub:
https://github.com/saido-szn

---

# 📄 License

This project is licensed under the MIT License.

See the `LICENSE` file for more information.