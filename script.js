// Assignment Code
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  // var password = generatePassword();
  var password = "Hello this is a password";
  var passwordText = document.querySelector("#password");
  var passwordLength = Number(
    prompt("Choose a password length between 8 and 128 characters")
  );
  var isUpperCase = confirm("include uppercase characters?");
  var isNumber = confirm("include numbers?");
  var specialChar = confirm("include special characters?");

  console.log(passwordLength);
  console.log(isUpperCase);
  console.log(isNumber);
  console.log(specialChar);

  passwordText.value = password;
}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
