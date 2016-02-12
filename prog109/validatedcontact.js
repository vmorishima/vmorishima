function validateEmail() {
    var x = document.getElementById("email").value;
    var atpos = x.indexOf("@");
    var dotpos = x.lastIndexOf(".");
    if (atpos < 1 || dotpos < atpos + 2 || dotpos + 2 >= x.length) {
        return false;
    } else {
        return true;
    }
}

function validateForm() {
    //getting variables from form
    var firstName = document.getElementById("firstname").value;
    var lastName = document.getElementById("lastname").value;
    var phone = document.getElementById("phone").value;
    var username = document.getElementById("username").value;
    var password = document.getElementById("password").value;
    var address = document.getElementById("address").value;
    var city = document.getElementById("city").value;
    var country = document.getElementById("country").value;
    var zip = document.getElementById("zip").value;
    var errorMessage = "";
    //validity variables
    var validFirstName = false;
    var validLastName = false;
    var validEmail = false;
    var validPhone = false;
    var validUsername = false;
    var validPassword = false;
    var validAddress = false;
    var validCity = false;
    var validCountry = false;
    var validZip = false;
    //if statements
    if (firstName.length <= 20 && firstName.length > 0) {
        validFirstName = true;
    } else {
        errorMessage += "<p>Please enter a first name with 20 characters max.</p>";
    }
    if (lastName.length <= 50 && firstName.length > 0) {
        validLastName = true;
    } else {
        errorMessage += "<p>Please enter a last name with 50 characters max.</p>";
    }
    if (validateEmail()) {
        validEmail = true;
    } else {
        errorMessage += "<p>Please enter a valid email address.</p>";
    }
    if (phone.length <= 15 && phone.length > 0 && !isNaN(phone)) {
        validPhone = true;
    } else {
        errorMessage += "<p>Please enter a phone number.</p>";
    }
    if (username.length <= 12 && username.length > 0) {
        validUsername = true;
    } else {
        errorMessage += "<p>Please enter a username with 12 characters max.</p>";
    }
    if (password.length <= 7 && password.length > 0) {
        validPassword = true;
    } else {
        errorMessage += "<p>Please enter a password with 7 characters max.</p>";
    }
    if (address.length > 0) {
        validAddress = true;
    } else {
        errorMessage += "<p>Please enter an address.</p>";
    }
    if (city.length > 0) {
        validCity = true;
    } else {
        errorMessage += "<p>Please enter a city.</p>";
    }
    if (country.length > 0) {
        validCountry = true;
    } else {
        errorMessage += "<p>Please select a country.</p>";
    }
    if (country === "USA") {
        if (zip.length <= 5 && zip.length > 0) {
            validZip = true;
        } else {
            errorMessage += "<p>Please enter a US zip code.</p>";
        }
    }
    else {
        validZip = true;
    }
    //returning values
    document.getElementById("error").innerHTML = errorMessage;
    return (validFirstName && validLastName && validEmail && validPhone && validUsername && validPassword && validAddress && validCity && validCountry && validZip);
}
