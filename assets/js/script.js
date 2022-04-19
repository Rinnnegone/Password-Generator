
// Get references to the #generate element
var generateBtn = document.querySelector("#generate");

function generatePassword() {
  console.log("hey! you clicked me")

// user prompt for password criteria

// password length 8 - 128
let passwordlength = 8;
let passwordValue = '';
//lower case, upper case , numbers , special characters
let characters = '01234567890abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ!@#$%^&*()_+{}:"<>?|';
// validate input
const createPassword = () => {
  passwordValue = '';

  for (let i = 0; i < passwordlength; i++) {
    let number = Math.floor(Math.random()* characters.length);
    passwordValue += characters.substring(number, number + 1);
  }

  password.value = passwordValue;
}
//display password to the page

    

  return "Generate password will go here"
}

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
