// Assignment code here
var upchar = "ABCDEFGHIJKLMNOPQRSTUVWXYZ"
var lowchar = "abcdefghijklmnopqrstuvwxyz"
var num = "1234567890"
var symb = "~!@#$%^&*()-_=+[]{};:',./<>?"
var chars = "";

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

 function addSpecial() {
  if (symbols === true) {

  }
}

// Add number character to string
function number() {
if (numbers === true) {
  
  }
}

// Add lowercase letters to string
function addLower() {
  if (lowercase === true) {
    
  }
}

// Add uppercase letters to string
function addUpper() {
  if (uppercase === true) {
    
  }
}

// Generate password Logic based on character Input
function generatePassword() {
  var pwdLength = prompt("How many characters would you like in your password? Choose a number between 8 and 128");
  
  if (pwdLength > 128 || pwdLength < 8) {
    alert("Invalid input. Please enter a number between 8 and 128");
  }

  else if (pwdLength >= 8 && pwdLength <= 128) {
    var symbols = confirm("Include symbols in your password?")
    var numbers = confirm("Include numbers in your password?")
    var uppercase = confirm("Include uppercase letters in your password?")
    var lowercase = confirm("Include lowercase letters in your password?")

    
    if (symbols === false && numbers === false && uppercase === false && lowercase === false) {
      alert("Please choose at leaset one character type to proceed.");
    }
    
    for (i = true; i < pwdLength; i++) {
      var x = Math.floor(Math.random() * chars.length);
      password += chars.charAt(x);
    }
  }
  return password;
}