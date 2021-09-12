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
 var symbols = "~!@#$%^&*()-_=+:;,<>?"
 var numbers = "0123456789"
 var uppercase = "ABCDEFGHIJKLMNOPQRSTUVWXYZ"
 var lowercase = "abcdefghijklmnopqrstuvwxyz"
 var pwd = "";

 // Add symbol character to pwd string
 function addSymbol(x) {
   if (x===true) {
     pwd = pwd.concat(symbols)
   }
 }

 // Add Number to pwd String
 function addNumber(x) {
   if (x===true) {
     pwd = pwd.concat(numbers)
   }
 }

 // Add uppercase letter to pwd string
 function addUpper(x) {
   if (x===true) {
     pwd = pwd.concat(uppercase)
   }
 }

 // Add lowercase letter to pwd string
 function addLower(x) {
   if (x===true) {
     pwd = pwd.concat(lowercase)
   }
 }
// Generate password Logic based on character Input
function generatePassword() {
  var pwdLength = prompt("How many characters would you like in your password? Choose a number between 8 and 128");
  
  if (pwdLength > 128 || pwdLength < 8) {
    alert("Invalid input. Please enter a number between 8 and 128");
  }

  else if (pwdLength >= 8 && pwdLength <= 128) {

    var symConfirm = confirm("Include symbols in your password?")
      addSymbol(symbols)
      console.log(pwd)

    var numConfirm = confirm("Include numbers in your password?")
      addNumber(numbers)
      console.log(pwd)

    var upConfirm = confirm("Include uppercase letters in your password?")
      addUpper(uppercase)
      console.log(pwd)

    var lowConfirm = confirm("Include lowercase letters in your password?")
      addLower(lowercase)
      console.log(pwd)
  
    
    if (symConfirm === false && numConfirm === false && upConfirm === false && lowConfirm === false) {
      alert("Please choose at leaset one character type to proceed.");
        symConfirm = confirm("Include symbols in your password?")
        numConfirm = confirm("Include numbers in your password?")
        upConfirm = confirm("Include uppercase letters in your password?")
        lowConfirm = confirm("Include lowercase letters in your password?")
      }
    
    for (i = 1; i <= pwdLength; i++) {
      var z = Math.floor(Math.random() * pwd.length + 1);
      output += pwd.charAt(z)
    }
 return output;
    }

}