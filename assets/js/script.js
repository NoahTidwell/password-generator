// Assignment code here

// Get references to the #generate element
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password")

  passwordText.value = password;
}
// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);

 //Password values
 var symbols = ['~', '!', '@', '#', '$', '%', '^', '&', '*', '(', ')', '-', '_', '=', '+', ':', ';', ',', '<', '>', '?']
 var numbers = ['1', '2', '3', '4', '5', '6', '7', '8', '9', '0']
 var uppercase = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z']
 var lowercase = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z']
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
    var numConfirm = confirm("Include numbers in your password?")
    var upConfirm = confirm("Include uppercase letters in your password?")
    var lowConfirm = confirm("Include lowercase letters in your password?")

    
    if (symConfirm === false && numConfirm === false && upConfirm === false && lowConfirm === false) {
      alert("Please choose at leaset one character type to proceed.");

      symConfirm = confirm("Include symbols in your password?")
      addSymbol(symbols)
      console.log(pwd)

      numConfirm = confirm("Include numbers in your password?")
      addNumber(numbers)
      console.log(pwd)

      upConfirm = confirm("Include uppercase letters in your password?")
      addUpper(uppercase)
      console.log(pwd)

      lowConfirm = confirm("Include lowercase letters in your password?")
      addLower(lowercase)
      console.log(pwd)
    }
  }
    
    for (let i = 1; i < pwdLength, i++;) {
      var chars = Math.floor(Math.random() * pwd.length + 1);
      password += pwd.charAt(chars)
    }
 return password;

};