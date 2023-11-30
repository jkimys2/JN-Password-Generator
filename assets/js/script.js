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

    // when use clicks generate password button the page will prompt user to put in a number for length of password
    var passwordLength = prompt("How many characters would you like your password to contain?");

    // when user puts in a number that is not between 8 and 128, it will alert the user to change their value to match the criteria
    if (passwordLength < 8 || passwordLength > 128) {
        alert("You must choose between 8 and 128 characters. Please try again.")
        var passwordLength = prompt("How many characters would you like your password to contain?");
    }

    // allows user to choose if they want to include special characters
    var specialCharacters = confirm("Please select OK to include special characters!")

    // if statement to include special characters in password
    if (specialCharacters)

    // allows user to include numbers in password
    var numeric = confirm("Please select OK to include numbers!")

    // if statement to include numbers

    // allows user to include lowercase letters
    var lowercase = confirm("Please select OK to include lowercase characters!")

    // if state to include lowercase letters

    // allows user to include uppercase letters
    var uppercase = confirm("Please select OK to include uppercase characters!")

    // if statement to include uppercase letters

    

}


// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
