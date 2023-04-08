
  // Need the following variables:
  // selected length of the password
  // array of lowercase letters
  // array of uppercase letters
  // array of numbers
  // array of special characters
  // to hold the password we're building
  // possibly the mega-array

  // prompt for password length --> stored in a variable
  // Validate the user input --> if user chooses <8 or >128, alert that they need to choose a valid password length, then they're going to need to restart OR call the function that prompts for length again
  // prompt --> Do they want uppercase letters?
  // prompt --> Do they want lowercase letters?
  // prompt --> Do they want numbers?
  // prompt --> Do they want special characters?
  // Validate that the user has chosen at least one character set --> if not, either have them start over OR recursively call the function that prompts for the character sets
  // With each of those prompts, you need an array of those character types
  // There needs to be at least one of each selected character type included in the password
  // Randomly generate a character from each character set as it's chosen and add it to the end of the password that you're building (.push() for an array or .concat() for a string)
  // for loop:
  // for (var i = password.length - 1; i < passwordLength; i++)
  // EITHER keep the character sets separate OR combine them to a mega-array to pull the rest of the characters from
  // IF keeping the character sets separate, randomly generate a number to tell which array you're pulling from, then randomly generate a number to pull the character from the array (character will by array[number])
  // IF pushing to a mega-array randomly generate a number to pull a character from the array
  // IF pushing to a mega-array, remember to set the array back to an empty array at the start of the process!
  // return the generated password


  // Write password to the #password input
  


  var generateBtn = document.querySelector("#generate");

// Define character sets
var lowercaseLetters = "abcdefghijklmnopqrstuvwxyz";
var uppercaseLetters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
var numbers = "0123456789";
var specialCharacters = "!@#$%^&*()_+~`|}{[]:;?><,./-=";

// Prompt user for password length
function generatePassword() {
  var passwordLength = prompt("Choose a length of at least 8 characters and no more than 128 characters.");

  if (passwordLength < 8 || passwordLength > 128) {
    alert("Please choose a valid length between 8 and 128 characters.");
    return "";
  }
// confirm the character set user will use
  var includeLowercase = confirm("Include lowercase letters?");
  var includeUppercase = confirm("Include uppercase letters?");
  var includeNumbers = confirm("Include numbers?");
  var includeSpecialCharacters = confirm("Include special characters?");

  if (!includeLowercase && !includeUppercase && !includeNumbers && !includeSpecialCharacters) {
    alert("Please choose at least one character set.");
    return "";
  }

  // options of chosen character sets
  var allCharacters = "";
  if (includeLowercase) {
    allCharacters += lowercaseLetters;
  }
  if (includeUppercase) {
    allCharacters += uppercaseLetters;
  }
  if (includeNumbers) {
    allCharacters += numbers;
  }
  if (includeSpecialCharacters) {
    allCharacters += specialCharacters;
  }

  // password auto generator
  var password = "";
  if (includeLowercase) {
    password += lowercaseLetters.charAt(Math.floor(Math.random() * lowercaseLetters.length));
  }
  if (includeUppercase) {
    password += uppercaseLetters.charAt(Math.floor(Math.random() * uppercaseLetters.length));
  }
  if (includeNumbers) {
    password += numbers.charAt(Math.floor(Math.random() * numbers.length));
  }
  if (includeSpecialCharacters) {
    password += specialCharacters.charAt(Math.floor(Math.random() * specialCharacters.length));
  }
  for (var i = password.length; i < passwordLength; i++) {
    password += allCharacters.charAt(Math.floor(Math.random() * allCharacters.length));
  }

  return password;
}

// writes and displays password
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;
}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);