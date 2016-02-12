function validateForm() {
  //getting variables from form
  var firstName = document.getElementById("firstname").value;
  var errorMessage = "";
  //validity variables
  var validFirstName = false;
  //if statements
  if (firstName.length <= 10 && firstName.length > 0) {
    validFirstName = true;
  } else {
    errorMessage += "<p>Please enter a name with 10 characters max.</p>";
  }

  //returning values
  document.getElementById("error").innerHTML = errorMessage;
  return validFirstName
}