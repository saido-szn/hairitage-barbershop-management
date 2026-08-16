const loginForm = document.getElementById("login-form");

const usernameInput = document.getElementById("username");

const passwordInput = document.getElementById("password");

const loginMessage = document.getElementById("login-message");


loginForm.addEventListener("submit", async function (event) {

    // Stop the browser from refreshing the page
    event.preventDefault();

    // Get the values entered by the admin
    const username = usernameInput.value;
    const password = passwordInput.value;


    try {

        // Send the username and password to our server
        const response = await fetch("/login", {

            method: "POST",

            headers: {
                "Content-Type": "application/json"
            },

            body: JSON.stringify({
                username: username,
                password: password
            })

        });


        // Convert the server response into JSON
        const data = await response.json();


        if (response.ok) {

            loginMessage.textContent = data.message;

            loginMessage.style.color = "green";

        } else {

            loginMessage.textContent = data.message;

            loginMessage.style.color = "red";

        }

    } catch (error) {

        console.log(error);

        loginMessage.textContent = "Something went wrong.";

        loginMessage.style.color = "red";

    }

});