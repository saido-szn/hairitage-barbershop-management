# Hairitage Barbershop - Project Journey

## Introduction

Hairitage Barbershop is my first full-stack web development project.

The goal of this project is to learn modern web development by building a real-world application from scratch. Instead of only learning theory, I decided to build a complete website step by step while learning each technology along the way.

This document records my development journey, the technologies I learned, and how the project evolved over time.

---

# Phase 1 – Planning

Before writing any code, I planned the structure of the website.

I decided to create a modern barbershop website that would allow customers to:

- Learn about the business
- View available services
- Browse the gallery
- Create a personal service wishlist
- Book appointments

At this stage, the project was only an idea.

---

# Phase 2 – Building the Frontend

I built the user interface using:

- HTML
- CSS
- JavaScript

The website included:

- Navigation bar
- Hero section
- About section
- Services section
- Wishlist
- Gallery
- Contact section
- Footer

During this phase I learned how HTML structures a webpage and how CSS controls its appearance.

---

# Phase 3 – Making the Website Interactive

I used JavaScript to add interactivity.

Some of the features I built include:

- Displaying services dynamically
- Creating a wishlist
- Removing wishlist items
- Saving wishlist data using Local Storage
- Form validation
- Clickable banner with additional information

This helped me understand how JavaScript can change a webpage without reloading it.

---

# Phase 4 – Version Control

I initialized Git and created a GitHub repository.

This allowed me to:

- Track changes
- Create commits
- Push my project online
- Maintain a history of my work

I also learned the importance of using meaningful commit messages.

---

# Phase 5 – Learning Node.js

After completing the frontend, I started learning backend development.

I installed Node.js and npm.

I learned:

- What Node.js is
- Why JavaScript can run outside the browser
- How npm manages packages

I initialized the project using:

npm init

which created the package.json file.

---

# Phase 6 – Creating My First Express Server

I installed Express and created my first backend server.

The server allowed me to:

- Run the website through Node.js
- Listen for incoming requests
- Create API endpoints

This was my introduction to server-side development.

---

# Phase 7 – Understanding APIs

I learned that an API allows the frontend and backend to communicate.

When a customer submits the booking form:

Frontend
↓

Fetch API
↓

Express Server

The server receives the booking information.

---

# Phase 8 – Connecting PostgreSQL

I installed PostgreSQL and created my own database.

Inside PostgreSQL I created:

- Database
- Bookings table

I then connected PostgreSQL to Node.js using the pg package.

---

# Phase 9 – Saving Bookings

I created my first API endpoint:

POST /booking

When a customer submits the booking form:

1. JavaScript sends the booking.
2. Express receives it.
3. PostgreSQL stores it permanently.
4. The server sends a success message.

Seeing my first booking saved in the database was an important milestone because it was my first complete full-stack feature.

---

# Current Technologies Learned

Frontend

- HTML5
- CSS3
- JavaScript

Backend

- Node.js
- Express.js

Database

- PostgreSQL

Development Tools

- VS Code
- Git
- GitHub
- npm

---

# Current Project Status

Completed

- Responsive website
- Dynamic services
- Wishlist using Local Storage
- Form validation
- Express backend
- REST API endpoint
- PostgreSQL integration
- Booking storage

---

# Next Goals

As I continue learning full-stack development, I plan to add:

- View all bookings
- Update bookings
- Delete bookings
- Email notifications
- User authentication
- Admin dashboard
- Deployment to the internet

---

# Reflection

This project has helped me understand how a complete web application is built from the ground up.

Instead of only learning concepts, I have applied them by building a working project that combines frontend development, backend development, databases, APIs, and version control.

I will continue improving this project as I learn more advanced web development concepts.