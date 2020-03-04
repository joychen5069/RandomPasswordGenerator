// Assignment Code
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword(length) {
  console.log("it works")
 // var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

  // var text = "abcdefghijklmnop"
  // var pos = str.indexOf(d)
  // Math.floor()

  var UserNumber = prompt("How many characters do you want your password to have? (must be between 8 and 128 characters")
    //if UserNumer is not an integer, repeat question
  //else continue to characters

    var lowerCase = confirm("Do you lower case letters?")
    var UpperCase = confirm("Do you want upper case letters?")
    var Num = confirm("Do you want numbers?")
    var Special = confirm("DO you want special characters?")
    //if user chooses none for all, then repeat loop-->stick inside For Loop

  //if lowerCase then choose UserNumber characteres from string.toLowerCase 

  //if UpperCase then choose UserNUmber characters from string.ToUpperCase

  //If NUm then choose UserNUmber characters from string

  //If Special then choose UserNUmber characters from stringg
  if 

}


// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);


