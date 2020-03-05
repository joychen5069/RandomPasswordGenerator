// Assignment Code
var generateBtn = document.querySelector("#generate");

//create variable array for numbers 8-126 for password length
var array = [];
for (var i = 8; i <= 128; i++) {
array.push(i);
}
console.log(array)
// Write password to the #password input
function writePassword(length) {
  console.log("it works")
 // var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

  var UserNumber = prompt("How many characters do you want your password to have? (must be between 8 and 128 characters)")
    //if UserNumer is not an integer, repeat question
  //else continue to characters
  if (UserNumber.indexOf(array)) {
    var lowerCase = confirm("Do you lower case letters?")
    var UpperCase = confirm("Do you want upper case letters?")
    var Num = confirm("Do you want numbers?")
    var Special = confirm("DO you want special characters?")
    
  }
    else {
      alert("That's not allowed. Try again")
   
    }
    //if user chooses none for all, then repeat loop-->stick inside For Loop
  //If User selects all options
  //   if (lowerCase = 1 && UpperCase = 1 && Num = 1 && Special = 1) {
  //   lowerCase 
  // } 

  //if lowerCase then choose UserNumber characteres from string.toLowerCase 

  //if UpperCase then choose UserNUmber characters from string.ToUpperCase

  //If NUm then choose UserNUmber characters from string

  //If Special then choose UserNUmber characters from stringg
   

}


// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);


