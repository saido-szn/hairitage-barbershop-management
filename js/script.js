//Feature 1:Loop-rendered dynamic content
// Array of barbershop services TO store the services
const services = [
    {
        name: "Classic Cut",
        description: "A timeless haircut that suits all ages and styles.",
        price: "KSh 1500"
    },
    {
        name: "Fade Cut",
        description: "A stylish modern haircut with smooth blending.",
        price: "KSh 1000"
    },
    {
        name: "Beard Trim",
        description: "Professional beard grooming for a clean look.",
        price: "KSh 800"
    },
    {
        name: "Kids Haircut",
        description: "Comfortable haircuts specially designed for children.",
        price: "KSh 500"
    },
    {
        name: "Hair Wash",
        description: "Professional washing and hair care.",
        price: "KSh 450"
    },
    {
        name: "Line Up & Styling",
        description: "Sharp edges and modern styling.",
        price: "KSh 350"
    },
    {
        name: "Sauna",
        description: "Relaxing sauna session followed by a soothing massage.",
        price: "KSh 3000"
    },
    {
        name: "Manicure",
        description: "Professional nail care and grooming.",
        price: "KSh 2200"
    },
    {
        name: "Pedicure",
        description: "Professional foot care and grooming.",
        price: "KSh 2500"
    },
    {
        name: "Back Massage",
        description: "Relaxing back massage to relieve tension and stress.",
        price: "KSh 3000"
    },
    {
        name: "Full Body Massage",
        description: "A complete massage experience for relaxation and rejuvenation.",
        price: "KSh 10,000"
    },
    {
        name: "Facial Treatment",
        description: "Professional facial treatment for healthy and glowing skin.",
        price: "KSh 5000"
    },
    {
        name: "Hair Coloring and Dyeing",
        description: "Professional hair coloring and dyeing services for a vibrant look.",
        price: "KSh 3000"
    },
    {
        name: "Bald Cut",
        description: "Professional bald grooming and maintenance.",
        price: "KSh 2000"
    },
    {
        name: "Taper Cut",
        description: "A stylish haircut with a gradual fade from short to long.",
        price: "KSh 1200"
    }
];
//Finding the container element in HTML where the service cards will be appended
const servicesContainer=document.getElementById("services-container");

//Loop for going through each and every service in the services array and creating a card for each service
services.forEach(function(service){
    //Creating a new div element for each service card
    const card = document.createElement("div");
    //Giving it same name as the class name in the CSS file to apply the styles
    card.classList.add("service-card");

    //Adding content to the card using innerHTML
    //Notice we don't use (')apostrophes but (`) backticks for multi-line Strings 
    //<strong> used to indicate that an element is important
    //$ is used to indicate that we are using a variable inside the string but it is not necessary to use it if we are not using a variable inside the string
    /*card.innerHTML =`
    <h3>${service.name}</h3>
    <p>${service.description}$</p>
    <strong>${service.price}</strong>
    `;*/
    //or
    card.innerHTML =
    "<h3>" + service.name + "</h3>" +
    "<p>" + service.description + "</p>" +
    "<strong>" + service.price + "</strong>";
    
    //Appending (meaning  adding an element to the end of another element) the card to the services container
    servicesContainer.appendChild(card);
});


//Feature 2: Dynamically adding and removing Elements by the user through an input button of 
//Feature 4: Persistent Data Storage using Local Storage
//using createElement() and appendChild()), and each item gets its own button to remove it (using remove()).
//Finding the input element in HTML where the user will type the service name
const input= document.getElementById("service-input");
const button = document.getElementById("add-button");
const list= document.getElementById("service-list");
//Creating an empty array to store the services added by the user
let wishlist = [];

//Loading storage
const savedWishlist = localStorage.getItem("wishlist");
    //Storing the updated wishlist array in the local storage in form of a string using JSON.stringify() method, so that it can be retrieved later even after the page is refreshed or closed
if(savedWishlist){
        //Parsing the saved wishlist from local storage back into an array using JSON.parse() method
        wishlist = JSON.parse(savedWishlist);
        //Display the saved wishlist
        wishlist.forEach(function(service) {
        // We will use a function to create each list item
        createService(service);
    });
}
//Adding an event listener to the button so that when it is clicked, the function inside it will be executed
//we have many events including click dblclick, mouseover, keydown ,keyup ,submit etc
button.addEventListener("click", function(){
    // Getting the value of the input element
    const newService = input.value;
    // Preventing the user from adding an empty service
    if(newService === ""){
        alert("Kindly Enter a Service");
        return;
    }
    // Add the service to the array
    wishlist.push(newService);
    // Save the array in localStorage
    localStorage.setItem("wishlist", JSON.stringify(wishlist));
    // Display the new service
    createService(newService);
    // Empty the textbox
    input.value = "";
});
    //Function that creates ONE service item
    //We create a function to avoid code repetition, since we are creating the same elements for each service in the wishlist
   function createService(service){
    //Creating a new list item element for the service
    const listItem = document.createElement("li");
    //Setting the text content of the list item to the service name
    listItem.textContent = service;

    //Creating a remove button for the service item
    const removeButton = document.createElement("button");
    //Setting the text content of the remove button to "Remove"
    removeButton.textContent = "Remove";

    //Adding a class to the remove button for styling purposes
    removeButton.classList.add("remove-button");
    //Adding an event listener to the remove button so that when it is clicked, the function inside it will be executed
    removeButton.addEventListener("click", function(){
        //Removing the list item from the list when the remove button is clicked
        listItem.remove();
        //Removing the service from the wishlist array when the remove button is clicked
        wishlist = wishlist.filter(function(item){
            //Filtering the wishlist array to remove the service that was clicked
            return item !== service;
        });
        //Updating the local storage with the new wishlist array after removing the service
        localStorage.setItem("wishlist", JSON.stringify(wishlist));
    });
    //Appending the remove button to the list item
    listItem.appendChild(removeButton);
    //Appending the list item to the list
    list.appendChild(listItem);
}


//Feature 3:Form Handling with validation Feedback using event.preventDefault()
// For us we are going to use Book Appointment form 
//where the user will enter their name, email, phone number and select a service from the dropdown list and then click the submit button to book an appointment
const bookingForm = document.getElementById("booking-form");

//Getting the input fields from the form
const customerName = document.getElementById("customer-name");
const customerEmail = document.getElementById("customer-email");
const customerService = document.getElementById("customer-service");
//Display message getting from HTML to show the user if the form was submitted successfully or not
const formMessage = document.getElementById("form-message");

//Adding an Event Listener to the form so that when it is submitted, the function inside it will be executed
bookingForm.addEventListener("submit", function(event){
    //To prevent the form from submitting and refreshing the page 
    event.preventDefault();
    //Getting the values of the input fields
    const name = customerName.value;
    const email = customerEmail.value;
    const service = customerService.value;

    //Validating the form fields to make sure they are not empty
    // || in JavaScript is the logical OR operator, it returns true if either of the operands is true, and false if both are false
    if(name ===""|| email ==="" || service ===""){
        formMessage.textContent = "Please fill in all the fields.";
        formMessage.style.color = "red";
    }else{
        //If the form is valid, we can submit the form and show a success message
        formMessage.textContent = "Thank you for booking your service with us!";
        formMessage.style.color = "green";
        //Here we can also clear the form fields after successful submission
        customerName.value = "";
        customerEmail.value = "";
        customerService.value = "";
        //  Here we can also send the form data to the server using AJAX or Fetch API, but for now we will just show a success message
        //We can also clear the form message after a few seconds using setTimeout() function
        //setTimeout(function(){
           // formMessage.textContent = "";
        //}, 3000); we can also use this to clear the form message after 3 seconds
    }
});

//Feature 5: Clickable Banner with Caption revealing more information about the barbershop
//Finding the banner element in HTML document
const banner = document.getElementById("banner");
//Finding the banner caption element in HTML document
const bannerCaption = document.getElementById("banner-caption");

//Adding an event listener to the banner so that when it is clicked, the function inside it will be executed
banner.addEventListener("click", function(){
    console.log("Banner clicked");
    //Toggle means:
    //If class exists, REMOVE IT, if class does not exist, ADD IT
    bannerCaption.classList.toggle("show");
})

