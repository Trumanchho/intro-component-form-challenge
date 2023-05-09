
const regex = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;

function checkFields() {
    const firstName = document.getElementById('first-name'), 
          lastName = document.getElementById('last-name'), 
          email = document.getElementById('email'), 
          password = document.getElementById('password'),
          firstErr = document.getElementById('first-empty'),
          lastErr = document.getElementById('last-empty'),
          emailErr = document.getElementById('email-empty'),
          passwordErr = document.getElementById('password-empty');

    let validFirstName = false,
        validLastName = false,
        validEmail = false,
        validPassword = false;

    if (firstName.value == null || firstName.value == "") {
        firstName.style.backgroundImage = "url(./images/icon-error.svg)";
        firstName.style.borderColor = "#ff7a7a";
        firstErr.style.display = "block";
        firstName.classList.add("transparent");
    } else {
        firstName.style.backgroundImage = "none";
        firstName.style.borderColor = "lightgrey";
        firstErr.style.display = "none";
        validFirstName = true;
    }
    if (lastName.value == null || lastName.value == "") {
        lastName.style.backgroundImage = "url(./images/icon-error.svg)";
        lastName.style.borderColor = "#ff7a7a";
        lastErr.style.display = "block";
        lastName.classList.add("transparent");
    } else {
        lastName.style.backgroundImage = "none";
        lastName.style.borderColor = "lightgrey";
        lastErr.style.display = "none";
        validLastName = true;
    }
    if (email.value == null || email.value == "") {
        email.style.backgroundImage = "url(./images/icon-error.svg)";
        email.style.borderColor = "#ff7a7a";
        emailErr.innerHTML = "Email Address cannot be empty";
        emailErr.style.display = "block";
        email.classList.add("transparent");
    } else if (!regex.test(email.value)) {
        email.style.backgroundImage = "url(./images/icon-error.svg)";
        email.style.borderColor = "#ff7a7a";
        email.style.color = "#ff7a7a";
        emailErr.innerHTML = "Looks like this is not an email";
        emailErr.style.display = "block";
    } else {
        email.style.backgroundImage = "none";
        email.style.borderColor = "lightgrey";
        email.style.color = "#3e3c49";
        emailErr.style.display = "none";
        validEmail = true;
    }
    if (password.value == null || password.value == "") {
        password.style.backgroundImage = "url(./images/icon-error.svg)";
        password.style.borderColor = "#ff7a7a";
        passwordErr.style.display = "block";
        password.classList.add("transparent");
    } else {
        password.style.backgroundImage = "none";
        password.style.borderColor = "lightgrey";
        passwordErr.style.display = "none";
        validPassword = true;
    }

    if (validEmail && validFirstName && validLastName && validPassword) {
        alert("You have claimed you free trial.");
    }
}
