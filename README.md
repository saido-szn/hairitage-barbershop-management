# Hairitage Barbershop Management System

Hairitage Barbershop Management System is a full stack web application for a barbershop. The website allows customers to view available services, create a personal service wishlist, view information about the barbershop, and submit an appointment booking.

I originally started this project as a frontend website using HTML, CSS, and JavaScript. As I continued working on it, I added a Node.js and Express.js backend and connected the application to a PostgreSQL database.

The main purpose of this project is to learn full stack web development by building a practical application instead of only following tutorials.

## Preview

Screenshots will be added as the project continues to develop.

## Current Features

### Website

The website contains a home section with a hero banner and information about the barbershop.

There is an About section explaining the barbershop and its services.

The Services section displays the available services dynamically using JavaScript.

The Gallery section displays images of the barbershop and its environment.

The Contact section contains the booking form, contact information, and opening hours.

The website also includes links to WhatsApp, Instagram, and Facebook.

The layout is responsive and adapts to smaller screens.

### Services

The services are stored inside a JavaScript array and displayed dynamically on the page.

Each service contains a name, description, and price.

This helped me practice working with arrays, objects, loops, DOM manipulation, and dynamic HTML content.

### Appointment Wishlist

Customers can enter services into an appointment wishlist.

Services can be added and removed using JavaScript.

The wishlist is stored in the browser using Local Storage, so the information remains available after refreshing the page.

### Appointment Booking

Customers can submit their name, email, and preferred service through the booking form.

JavaScript handles the form submission and validation.

The frontend sends the booking information to the Express backend using a POST request.

The backend then stores the booking inside PostgreSQL.

### Backend

The application uses Node.js and Express.js to create the backend server.

The server handles requests from the frontend and communicates with the PostgreSQL database.

The current API includes functionality for creating bookings, retrieving bookings, and updating existing bookings.

### Database

PostgreSQL is used to permanently store appointment information.

The current bookings table stores the customer's name, email, selected service, booking ID, and the date and time when the booking was created.

## Technologies Used

### Frontend

HTML5

CSS3

JavaScript ES6

### Backend

Node.js

Express.js

### Database

PostgreSQL

### Development Tools

Visual Studio Code

Git

GitHub

npm

## Project Structure

```text
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

## Getting Started

### Clone the repository

```bash
git clone https://github.com/saido-szn/hairitage-barbershop-management.git
```

### Open the project

```bash
cd hairitage-barbershop-management
```

### Install dependencies

```bash
npm install
```

This installs the packages required by the project.

### Create the environment file

Create a file named `.env` in the root directory.

Add your PostgreSQL connection details:

```env
DB_USER=your_username
DB_HOST=localhost
DB_NAME=hairitage_db
DB_PASSWORD=your_password
DB_PORT=5432
```

The `.env` file should not be uploaded to GitHub because it contains database credentials.

### Create the PostgreSQL database

Create a database named:

```sql
hairitage_db
```

Then create the bookings table:

```sql
CREATE TABLE bookings (
    id SERIAL PRIMARY KEY,
    name VARCHAR(100) NOT NULL,
    email VARCHAR(100) NOT NULL,
    service VARCHAR(100) NOT NULL,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);
```

### Start the server

```bash
node server.js
```

The server should start on:

```text
http://localhost:4000
```

### Open the website

Open the following address in a browser:

```text
http://localhost:4000
```

## API

### Create a Booking

```text
POST /booking
```

Example request:

```json
{
  "name": "John Doe",
  "email": "john@example.com",
  "service": "Fade Cut"
}
```

The booking is then inserted into the PostgreSQL database.

The server returns:

```text
Booking saved successfully!
```

### Get Bookings

```text
GET /bookings
```

This endpoint retrieves the bookings stored in the PostgreSQL database.

This functionality is intended for the management side of the application rather than something that should be publicly visible to customers.

### Update a Booking

```text
PUT /booking/:id
```

This endpoint allows an existing booking to be updated using its booking ID.

## Database

The main database table is:

```text
bookings
```

The table currently contains the following columns:

| Column     | Description                           |
| ---------- | ------------------------------------- |
| id         | Unique ID for each booking            |
| name       | Customer's name                       |
| email      | Customer's email                      |
| service    | Preferred service                     |
| created_at | Date and time the booking was created |

## Documentation

The project also contains additional documentation.

`PROJECT_GUIDE.md` explains the purpose of the different files and folders in the project.

`Project_Journey.md` documents my development process, the problems I encountered, the technologies I learned, and the changes I made while building the application.

## What I Am Learning From This Project

This project is helping me understand how the different parts of a web application work together.

I am learning frontend development using HTML, CSS, and JavaScript.

I am learning how JavaScript can manipulate the DOM and create content dynamically.

I am learning how Local Storage can be used to keep data in the browser.

I am learning how forms communicate with a backend.

I am learning how Node.js and Express.js can be used to create a server.

I am learning how REST API endpoints work.

I am learning how a backend communicates with a PostgreSQL database.

I am also getting more experience with Git and GitHub while keeping track of the development process.

## Current Status

The frontend website is working.

The services are dynamically generated using JavaScript.

The appointment wishlist is working with Local Storage.

The booking form is connected to the backend.

The Express server is running successfully.

The PostgreSQL database is connected successfully.

Bookings are being saved permanently in the database.

The website also contains opening hours and social media links.

The project is still under development and I am continuing to add features as I learn more about full stack development.

## Future Improvements

The next stage of the project will focus more on turning the application into an actual barbershop management system.

I plan to create a separate management area where the barbershop owner can view appointments without exposing customer booking information on the public website.

I plan to add the ability to delete bookings.

I plan to improve the booking update functionality.

I plan to add appointment status such as pending, confirmed, completed, or cancelled.

I plan to improve the booking form so customers can select services instead of manually typing them.

I plan to add a date and preferred appointment time to the booking system.

I plan to add customer reviews and testimonials to the public website.

I plan to improve the error handling and user feedback throughout the application.

I plan to add better validation on both the frontend and backend.

I plan to make the application more secure before deploying it online.

I also plan to deploy the application so that it can be accessed without running it locally.

## Author

Said Ahmed

GitHub:

https://github.com/saido-szn

## License

This project is licensed under the MIT License.

See the `LICENSE` file for more information.
