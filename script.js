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
    //check password length
    if (passwordLength < 8 || passwordLength > 128) {
      window.alert("password must be min 8 characters and max 128");
      return;
    }

    var isLowerCase = confirm("include lowercase characters?");
    var isUpperCase = confirm("include uppercase characters?");
    var isNumber = confirm("include numbers?");
    var specialChar = confirm("include special characters?");
    var charactersLowercase = "abcdefghijklmnopqrstuvwxyz";
    var charactersUppercase = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    var charactersNumbers = "0123456789";
    var charactersSpecial = "!#$%&'()*+,-./:;<=>?@[]^_`{|}~";

    // check if all conditions are true and asign which characters to use
    if (isLowerCase && isUpperCase && isNumber && specialChar) {
      console.log("we're using them all");
      var characters =
        charactersLowercase +
        charactersUppercase +
        charactersSpecial +
        charactersNumbers;
    } // check if one of them is false
    else if (!isLowerCase && isUpperCase && isNumber && specialChar) {
      console.log("don't use lowercase characters!");
      var characters =
        charactersUppercase + charactersSpecial + charactersNumbers;
    } else if (isLowerCase && !isUpperCase && isNumber && specialChar) {
      console.log("don't use uppercase characters!");
      var characters =
        charactersLowercase + charactersSpecial + charactersNumbers;
    } else if (isLowerCase && isUpperCase && !isNumber && specialChar) {
      console.log("don't use numeric characters!");
      var characters =
        charactersLowercase + charactersUppercase + charactersSpecial;
    } else if (isLowerCase && isUpperCase && isNumber && !specialChar) {
      console.log("don't use special characters!");
      var characters =
        charactersLowercase + charactersUppercase + charactersNumbers;
    } //check if two conditions are false
    else if (!isLowerCase && !isUpperCase && isNumber && specialChare) {
      console.log("don't use any letters");
      var characters = charactersSpecial + charactersNumbers;
    } else if (!isLowerCase && isUpperCase && !isNumber && specialChar) {
      console.log("don't use lowercase or numbers!");
      var characters = charactersUppercase + charactersSpecial;
    } else if (!isLowerCase && isUpperCase && isNumber && !specialChar) {
      console.log("don't use lowercase letters or special characters");
      var characters = charactersUppercase + charactersNumbers;
    } else if (isLowerCase && !isUpperCase && !isNumber && specialChar) {
      console.log("don't use uppercase or numbers");
      var characters = charactersLowercase + charactersSpecial;
    } else if (isLowerCase && !isUpperCase && isNumber && !specialChar) {
      console.log("don't use uppercase or special characters");
      var characters = charactersLowercase + charactersNumbers;
    } else if (isLowerCase && isUpperCase && !isNumber && !specialChar) {
      console.log("don't use numbers or special characters");
      var characters = charactersLowercase + charactersUppercase;
    } //check if only is true
    else if (isLowerCase && !isUpperCase && !isNumber && !specialChar) {
      console.log("only use lowercase characters");
      var characters = charactersLowercase;
    } else if (!isLowerCase && isUpperCase && !isNumber && !specialChar) {
      console.log("only use uppercase characters");
      var characters = charactersUppercase;
    } else if (!isLowerCase && !isUpperCase && isNumber && !specialChar) {
      console.log("only use numeric characters");
      var characters = charactersNumbers;
    } else if (!isLowerCase && !isUpperCase && !isNumber && specialChar) {
      console.log("only use special characters");
      var characters = charactersSpecial;
    } //if they're all false
    else {
      console.log("one of the requirements must be selected");
    }

    console.log("password length", passwordLength);
    console.log("lowercase", isLowerCase);
    console.log("uppercase", isUpperCase);
    console.log("numbers", isNumber);
    console.log("special characters", specialChar);
    console.log("characters", characters);
  }

  passwordText.value = password;
}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
