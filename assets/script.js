// Assignment Code
var generateBtn = document.querySelector("#generate");
var passwordText = document.querySelector("#password");
// Write password to the #password input
function writePassword() {
    

  var length = 12;
  var alpha = 'abcdefghijklmnopqrstuvwxyz';
  var alphaUpper = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
  var numbers = '1234567890';
  var symbols = '!@#$%^&*()';

let password = '';


while (password.length < length){
    const characterSet = alpha + alphaUpper + numbers + symbols;
    const character = characterSet[Math.floor(Math.random() * characterSet.length)];

        password += character;
        
    }

     passwordText.value = password;
    
}
 




// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
    
    