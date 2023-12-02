// Assignment Code
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}var potentialCharacters = [];


// create a function that will return the final password
function generatePassword() {


  // Variables that contain the characters that will make up the random password
  var passwordLength
  var specialCharactersChoice = "! # $ % & ' ( ) * + , - / : ; < = > ? [ | \ ] ^ _ { } | ~ `";
  var numberChoice = "0 1 2 3 4 5 6 7 8 9";
  var lowecaseChoice = "a b c d e f g h i j k l m n o p q r s t u v w x y z";
  var uppercaseChoice =  "A B C D E F G H I J K L M N O P Q R S T U V W X Y Z";
  
  // Prompts that will alert the user to choose the 
  var passwordLength = prompt("How many characters would you like your password to contain?");
  
  // when user puts in a number that is not between 8 and 128, it will alert the user to change their value to match the criteria
  if (passwordLength < 8 || passwordLength > 128) {
    alert("You must choose between 8 and 128 characters. Please try again.")
    var passwordLength = prompt("How many characters would you like your password to contain?");
    console.log(passwordLength: )
    }

    // allows user to choose if they want to include special characters
    var specialCharactersChoice = confirm("Please select OK to include special characters!")
    var specialCharactersChoice = " ! @ # $ ^ & * ( ) /"

    // if statement to include special characters in password
    if (specialCharactersChoice)

    // allows user to include numbers in password
    var numericChoice = confirm("Please select OK to include numbers!")

    // if statement to include numbers


    // allows user to include lowercase letters
    var lowercaseChoice = confirm("Please select OK to include lowercase characters!")
   
    // if state to include lowercase letters


    // allows user to include uppercase letters
    var uppercaseChoice = confirm("Please select OK to include uppercase characters!")
    
    // if statement to include uppercase letters
    if (uppercase) {
      // logic that includes the upper case letters
      // create array that holds the potential characters that will make up the PW
     
    }
// push the values based on potiential characters
var potentialCharacters = 
// create an arrau variable that holds the uipper characters

}
potentialcharacters.push(uppercase)
// time to generate passwords
var length = 


// once i get my potcharact with all of the potential characters based on user choice, I need to iterate through the array and choose a random character from the potential characters arrays

// iterate thorugh array and choose one randome charact based on chosen link, keep in mind you want each character type represented
// if the lenght is 10, you need to iterate through it 10 times









// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
