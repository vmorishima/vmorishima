//var userInput = prompt("Enter a number between 0 and 6");

function getNameWeek(userInput, greeting) {
  //SWITCH statement
  console.log(greeting);
  var myMessage;
  switch (userInput) {
    case "2":
      myMessage = "Monday";
      break;
    case "3":
      myMessage = "Tuesday";
      break;
    case "4":
      myMessage = "It is Wednesday";
      break;
    case "5":
      myMessage = "Thursday";
      break;
    case "1":
    case "6":
    case "7":
      myMessage = "WEEKEND!";
      break;
    default:
      myMessage = "ERROR: You didn't enter a number between 1 and 7";
      break;
  }
  document.getElementById("message").textContent = greeting + " " + myMessage;
}