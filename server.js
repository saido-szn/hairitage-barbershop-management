//Import Node's built-in http module
const http = require('http');

//Creating server
//Request- something the browser aske for from the server
//Response- what the server sends back to the browser
const server = http.createServer(function(request, response){
    response.end("Welcome to Hairitage BarberShop!")
});

//Server listening on port 3000
server.listen(3000, function(){
    console.log("Server is running on http://localhost:3000");
});