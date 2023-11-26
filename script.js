// Assignment Code
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = "";
  var passwordText = document.querySelector("#password");
  var passwordLength = Number(
    prompt("Choose a password length between 8 and 128 characters")
  );
  //check password length is between 8 and 128 characters
  if (passwordLength < 8 || passwordLength > 128) {
    window.alert("password must be min 8 characters and max 128");
    return;
  }

  var isLowerCase = confirm("include lowercase characters?");
  var isUpperCase = confirm("include uppercase characters?");
  var isNumber = confirm("include numbers?");
  var specialChar = confirm("include special characters?");
  var charactersLowercase = [
    "a",
    "b",
    "c",
    "d",
    "e",
    "f",
    "g",
    "h",
    "i",
    "j",
    "k",
    "l",
    "m",
    "n",
    "o",
    "p",
    "q",
    "r",
    "s",
    "t",
    "u",
    "v",
    "w",
    "x",
    "y",
    "z",
  ];
  var charactersUppercase = [
    "A",
    "B",
    "C",
    "D",
    "E",
    "F",
    "G",
    "H",
    "I",
    "J",
    "K",
    "L",
    "M",
    "N",
    "O",
    "P",
    "Q",
    "R",
    "S",
    "T",
    "U",
    "V",
    "W",
    "X",
    "Y",
    "Z",
  ];
  var charactersNumbers = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"];
  var charactersSpecial = [
    "!",
    "#",
    "$",
    "%",
    "&",
    "'",
    "(",
    ")",
    "*",
    "+",
    ",",
    "-",
    ".",
    "/",
    ":",
    ";",
    "<",
    "=",
    ">",
    "?",
    "@",
    "[",
    "]",
    "^",
    "_",
    "`",
    "{",
    "|",
    "}",
    "~",
    '"',
  ];
  var characters = [];

  // check if all conditions are true and asign which characters to use
  if (isLowerCase && isUpperCase && isNumber && specialChar) {
    console.log("we're using them all");
    characters = characters.concat(
      charactersLowercase,
      charactersUppercase,
      charactersNumbers,
      charactersSpecial
    );
  } // check if one of them is false
  else if (!isLowerCase && isUpperCase && isNumber && specialChar) {
    console.log("don't use lowercase characters!");
    characters = characters.concat(
      charactersUppercase,
      charactersSpecial,
      charactersNumbers
    );
  } else if (isLowerCase && !isUpperCase && isNumber && specialChar) {
    console.log("don't use uppercase characters!");
    characters = characters.concat(
      charactersLowercase,
      charactersSpecial,
      charactersNumbers
    );
  } else if (isLowerCase && isUpperCase && !isNumber && specialChar) {
    console.log("don't use numeric characters!");
    characters = characters.concat(
      charactersLowercase,
      charactersUppercase,
      charactersSpecial
    );
  } else if (isLowerCase && isUpperCase && isNumber && !specialChar) {
    console.log("don't use special characters!");
    characters = characters.concat(
      charactersLowercase,
      charactersUppercase,
      charactersNumbers
    );
  } //check if two conditions are false
  else if (!isLowerCase && !isUpperCase && isNumber && specialChare) {
    console.log("don't use any letters");
    characters = characters.concat(charactersSpecial, charactersNumbers);
  } else if (!isLowerCase && isUpperCase && !isNumber && specialChar) {
    console.log("don't use lowercase or numbers!");
    characters = characters.concat(charactersUppercase, charactersSpecial);
  } else if (!isLowerCase && isUpperCase && isNumber && !specialChar) {
    console.log("don't use lowercase letters or special characters");
    characters = characters.concat(charactersUppercase, charactersNumbers);
  } else if (isLowerCase && !isUpperCase && !isNumber && specialChar) {
    console.log("don't use uppercase or numbers");
    characters = characters.concat(charactersLowercase, charactersSpecial);
  } else if (isLowerCase && !isUpperCase && isNumber && !specialChar) {
    console.log("don't use uppercase or special characters");
    characters = characters.concat(charactersLowercase, charactersNumbers);
  } else if (isLowerCase && isUpperCase && !isNumber && !specialChar) {
    console.log("don't use numbers or special characters");
    characters = characters.concat(charactersLowercase, charactersUppercase);
  } //check if only is true
  else if (isLowerCase && !isUpperCase && !isNumber && !specialChar) {
    console.log("only use lowercase characters");
    characters = charactersLowercase;
  } else if (!isLowerCase && isUpperCase && !isNumber && !specialChar) {
    console.log("only use uppercase characters");
    characters = charactersUppercase;
  } else if (!isLowerCase && !isUpperCase && isNumber && !specialChar) {
    console.log("only use numeric characters");
    characters = charactersNumbers;
  } else if (!isLowerCase && !isUpperCase && !isNumber && specialChar) {
    console.log("only use special characters");
    characters = charactersSpecial;
  } //if they're all false
  else {
    console.log("one of the requirements must be selected");
  }

  // create random password with the characters and length selected
  for (i = 0; i < passwordLength; i++) {
    var randomIndex = Math.floor(Math.random() * characters.length);
    var randomCharacter = characters[randomIndex];
    password += randomCharacter;
  }

  //console.log just for debugging
  console.log("password length", passwordLength);
  console.log("lowercase", isLowerCase);
  console.log("uppercase", isUpperCase);
  console.log("numbers", isNumber);
  console.log("special characters", specialChar);
  console.log("characters", characters);
  console.log("password length", password.length);

  passwordText.value = password;
}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
