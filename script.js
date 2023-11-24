// Assignment Code
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  // var password = "Hello this is a password";
  var passwordText = document.querySelector("#password");

  function generatePassword() {
    var passwordLength = Number(
      prompt("Choose a password length between 8 and 128 characters")
    );
    var isLowerCase = confirm("include lowercase characters?");
    var isUpperCase = confirm("include uppercase characters?");
    var isNumber = confirm("include numbers?");
    var specialChar = confirm("include special characters?");

    // check if all conditions are true
    if (isLowerCase && isUpperCase && isNumber && specialChar) {
      console.log("we're using them all");
    } // check if one of them is false
    else if (!isLowerCase && isUpperCase && isNumber && specialChar) {
      console.log("don't use lowercase characters!");
    } else if (isLowerCase && !isUpperCase && isNumber && specialChar) {
      console.log("don't use uppercase characters!");
    } else if (isLowerCase && isUpperCase && !isNumber && specialChar) {
      console.log("don't use numeric characters!");
    } else if (isLowerCase && isUpperCase && isNumber && !specialChar) {
      console.log("don't use special characters!");
    } //check if two conditions are false
    else if (!isLowerCase && !isUpperCase && isNumber && specialChare) {
      console.log("don't use any letters");
    } else if (!isLowerCase && isUpperCase && !isNumber && specialChar) {
      console.log("don't use lowercase or numbers!");
    } else if (!isLowerCase && isUpperCase && isNumber && !specialChar) {
      console.log("don't use lowercase letters or special characters");
    } else if (isLowerCase && !isUpperCase && !isNumber && specialChar) {
      console.log("don't use uppercase or numbers");
    } else if (isLowerCase && !isUpperCase && isNumber && !specialChar) {
      console.log("don't use uppercase or special characters");
    } else if (isLowerCase && isUpperCase && !isNumber && !specialChar) {
      console.log("don't use numbers or special characters");
    } //check if only is true
    else if (isLowerCase && !isUpperCase && !isNumber && !specialChar) {
      console.log("only use lowercase characters");
    } else if (!isLowerCase && isUpperCase && !isNumber && !specialChar) {
      console.log("only use uppercase characters");
    } else if (!isLowerCase && !isUpperCase && isNumber && !specialChar) {
      console.log("only use numeric characters");
    } else if (!isLowerCase && !isUpperCase && !isNumber && specialChar) {
      console.log("only use special characters");
    } //if they're all false
    else {
      console.log("one of the requirements must be selected");
    }

    console.log("password length", passwordLength);
    console.log("lowercase", isLowerCase);
    console.log("uppercase", isUpperCase);
    console.log("numbers", isNumber);
    console.log("special characters", specialChar);
  }
  passwordText.value = password;
}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
