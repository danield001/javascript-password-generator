// Assignment Code
var generateBtn = document.querySelector("#generate");
var passwordText = document.querySelector("#password");

function checkLength() {

  var pLength = document.querySelector("#length").value;
  var length = parseInt(pLength);
  var password = "";

  if (length < 8 || length > 128) {
    passwordText.value = "PLEASE ENTER NUMBER GREATER THAN 8 AND LESS THAN 128";
    return false;
  }
  return true;
}



// Write password to the #password input
function writePassword() {
  if (!checkLength()) {
    return
  }

  var length = parseInt(document.querySelector("#length").value);
  var numbersCheck = document.querySelector("#numbers").checked;
  var upperCheck = document.querySelector("#upper-case").checked;
  var symbolCheck = document.querySelector("#symbols").checked;
  var alpha = 'abcdefghijklmnopqrstuvwxyz';
  var alphaUpper = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
  var numbers = '1234567890';
  var symbols = '!@#$%^&*()';

  let password = '';

  if (numbersCheck) {

    password += numbers[Math.floor(Math.random() * numbers.length)];
  }

  if (upperCheck) {

    password += alphaUpper[Math.floor(Math.random() * alphaUpper.length)];
  }

  if (symbolCheck) {

    password += symbols[Math.floor(Math.random() * symbols.length)];
  }

  while (password.length < length) {
    const characterSet = alpha + alphaUpper + numbers + symbols;
    const character = characterSet[Math.floor(Math.random() * characterSet.length)];

    password += character;

  }

  passwordText.value = password;

}





// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);

