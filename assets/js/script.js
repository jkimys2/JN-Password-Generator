// Assignment Code
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}
// var potentialCharacters = [];


// create a function that will return the final password
function generatePassword() {

  // Variables that contain the characters that will make up the random password
  var specialCharacter = "! # $ % & ' ( ) * + , - / : ; < = > ? [ | \ ] ^ _ { } | ~ `";
  var numeric = "0 1 2 3 4 5 6 7 8 9";
  var lowercase = "a b c d e f g h i j k l m n o p q r s t u v w x y z";
  var uppercase =  "A B C D E F G H I J K L M N O P Q R S T U V W X Y Z";
  
  // Prompt that will allow the user to choose a password length
  var passwordLength = prompt("How many characters would you like your password to contain?");
  
  // if statement that will close prompt if the user clicks cancel
  if (passwordLength === null) {
    return;
  } else {
    passwordLength;
  };

   // if statement to alert the user that their password has to be between 8-128 characters
  if (passwordLength < 8 || passwordLength > 128) {
    alert("You must choose between 8 and 128 characters! \nPlease try again.")
    var passwordLength = prompt("How many characters would you like your password to contain?");
   };
 
  // prompts that will allow the user to choose the rest of the criteria for their password
  var specialCharacterChoice = confirm("Please select OK to include SPECIAL CHARACTERS!");
  var numericChoice = confirm("Please select OK to include NUMBERS!");
  var lowercaseChoice = confirm("Please select OK to include lowercase CHARACTERS!");
  var uppercaseChoice = confirm("Please select OK to include UPPERCASE CHARACTERS!");


  // if statements to include the characters chosen by the user
  var charactersChosen = "";
  if(specialCharacterChoice) {
    charactersChosen += specialCharacter;
  };

  if(numericChoice) {
    charactersChosen += numeric;
  };

  if(lowercaseChoice) {
    charactersChosen += lowercase;
  };

  if(uppercaseChoice) {
    charactersChosen += uppercase;
  };
 
  // Array that holds the characters chosen by user
  var chosenArray = charactersChosen.split(" ");
  console.log(chosenArray)
  // for loop that will generate radom password based on chosen characters
  var passwordString = "";
  for (var i = 0; i < passwordLength; i++) {
    var randomCharacters = Math.floor((Math.random() * chosenArray.length - 1) + 1);
    passwordString += chosenArray[randomCharacters];
  };



}
  

//     // if statements to include the prompts that are chosen by the user
//     if (specialCharactersChoice)

    
   
//     // if state to include lowercase letters
    
//     // if statement to include uppercase letters
//     if (uppercase) {
//       // logic that includes the upper case letters
//       // create array that holds the potential characters that will make up the PW
     
//     }
// // push the values based on potiential characters
// var potentialCharacters = 
// // create an arrau variable that holds the uipper characters

// }
// potentialcharacters.push(uppercase)
// // time to generate passwords
// var length = 


// once i get my potcharact with all of the potential characters based on user choice, 
// I need to iterate through the array and choose a random character from the potential characters arrays

// iterate thorugh array and choose one randome charact based on chosen link, keep in mind you want each character type represented
// if the lenght is 10, you need to iterate through it 10 times









// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
