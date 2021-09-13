// Assignment code here

// Get references to the #generate element
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;
  pwd = "";
}
// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);

 //Password values
 const values = {
  symbols: "~!@#$%^&*()-_=+:;,<>?",
  numbers: "0123456789",
  uppercase: "ABCDEFGHIJKLMNOPQRSTUVWXYZ",
  lowercase:"abcdefghijklmnopqrstuvwxyz"
 }
  
const getValues = [
  function addUpper() {
    return values.uppercase[Math.floor(Math.random()* values.uppercase.length)];
  },
  function addLower() {
    return values.lowercase[Math.floor(Math.random() * values.lowercase.length)];
  },
  function addNumber() {
    return values.numbers[Math.floor(Math.random() * values.numbers.length)];
  },
  function addSymbols() {
    return values.symbols[Math.floor(Math.random() * values.symbols.length)];
  }
];
 
 
// Generate password Logic based on character Input
function generatePassword() {

  pwd = ""

  var pwdLength = prompt("How many characters would you like in your password? Choose a number between 8 and 128");
  
  if (pwdLength > 128 || pwdLength < 8) {
    alert("Invalid input. Please enter a number between 8 and 128");
  }

  else if (pwdLength >= 8 && pwdLength <= 128) {

        var symConfirm = confirm("Include symbols in your password?")
        var numConfirm = confirm("Include numbers in your password?")
        var upConfirm = confirm("Include uppercase letters in your password?")
        var lowConfirm = confirm("Include lowercase letters in your password?")
    
    if (symConfirm === false && numConfirm === false && upConfirm === false && lowConfirm === false) {
      alert("Please choose at leaset one character type to proceed.");
        var symConfirm = confirm("Include symbols in your password?")
        var numConfirm = confirm("Include numbers in your password?")
        var upConfirm = confirm("Include uppercase letters in your password?")
        var lowConfirm = confirm("Include lowercase letters in your password?")
      }
    
  
    }
    for (i = 0; i <= pwdLength; i++) {
      valueToAdd = getValues[Math.floor(Math.random() * getValues.length)];
      pwd += valueToAdd();
    }
    return pwd;
    
}