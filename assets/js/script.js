// Assignment code here
const UPPERCASE_CHAR_CODES = fromLowToHigh(65, 90)
const lowercase_char_codes = fromLowToHigh(97, 122)
const number_char_codes = fromLowToHigh(48, 57)
const symbol_char_codes = fromLowToHigh(33, 47).concat(fromLowToHigh(58, 64))

// Get references to the #generate element
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.innherText = password;
}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);


// Generate password Logic based on character Input
function generatePassword(pwdLength, uppercase, lowercase, numbers, symbols) {
  let charCodes = lowercase_char_codes
  if(uppercase === true) charCodes = charCodes.concat(UPPERCASE_CHAR_CODES)
  if(symbols === true) charCodes.concat(symbol_char_codes)
  if(numbers === true) charCodes.concat(number_char_codes)
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
  }
    const passwordCharacters = []
    for (let i = 0; i < pwdLength, i++;) {
      const characterCode = charCodes[Math.floor(Math.random() * charCodes.length)]
      passwordCharacters.push(String.fromCharCode(characterCode))
      
    }
  
  return passwordCharacters.join("")
};

function fromLowToHigh(low, high) {
  const array = []
  for (let i = low; i<= high; i++) {
  array.push(i)
}
return array
}
