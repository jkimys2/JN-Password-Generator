// Assignment Code
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}


// create a function that will return the final password
function generatePassword() {

    // when use clicks generate password button the page will prompt user to put in a number
    var passwordLength = window.prompt("How many characters would you like your password to contain?");

    // when user puts in a number that is not between 8 and 128, it will alert the user to change their value to match the criteria
    if (passwordLength < 8 || passwordLength > 128) {
        alert("You must choose between 8 and 128 characters. Please try again.")
        var passwordLength = window.prompt("How many characters would you like your password to contain?");
    }

}


// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
