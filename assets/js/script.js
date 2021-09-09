// Assignment code here
var upchar = "ABCDEFGHIJKLMNOPQRSTUVWXYZ"
var lowchar = "abcdefghijklmnopqrstuvwxyz"
var num = "1234567890"
var symb = "~!@#$%^&*()-_=+[]{};:',./<>?"
var chars = "";

// Reset Password
function reset() {
  var passwordText = document.querySelector("#password");
  passwordText.value = password
}

// Get references to the #generate element
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);

// Add special characters to string

function addSpecial(specialCharacters) {
  if (specialCharacters === true) {
    chars = chars.concat(symb)
  }
}

// Add number character to string
function addNumber(numberCharacters) {
if (numberCharacters === true) {
  chars = chars.concat(num)
  }
}

// Add lowercase letters to string
function addLower(lowercase) {
  if (lowercase === true) {
    chars = chars.concat(lowchar)
  }
}

// Add uppercase letters to string
function addUpper(uppercase) {
  if (uppercase === true) {
    chars = chars.concat(upchar)
  }
}

// Generate password Logic based on character Input
function generatePassword() {
  var pwdLength = prompt("How many characters would you like in your password? Choose a number between 8 and 24.");
  if (pwdLength > 128 || pwdLength < 8) {
    alert("Invalid input. Please enter a number between 8 and 24")
  }
  else if (pwdLength <= 128 || pwdLength >= 8) {
    var specialCharacters = confirm("Include special characters in your password?")

    var numberCharacters = confirm("Include number characters in your password?")

    var uppercase = confirm("Include uppercase letters in your password?")

    var lowercase = confirm("Include lowercase letters in your password?")

    if (specialCharacters === false && numberCharacters === false && uppercase === false && lowercase === false) {
      alert("Please choose at least one type of character to generate a password.")
    }

    for (i=1; i<pwdLength; i++) {
      var k = Math.floor(Math.random()*chars.length + 1);
      password += chars.charAt(k)
    }
    return password;
  }

}