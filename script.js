// Assignment Code
var generateBtn = document.querySelector("#generate");


// Write password to the #password input
function writePassword(length) {
  console.log("it works")
 // var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

var validChars = []
var lower = 'abcdefghijklmnopqrstuvwxyz'.split('')
var upper = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ'.split('')
var numberlist = '1234567890'.split('')
var special =  ' !"#$%&\'()*+,-./:;<=>?@[\]^_`{|}~'.split('')

  var Input = prompt("How many characters do you want your password to have? (must be between 8 and 128 characters)")
  var UserNumber = parseInt(Input)

    //if UserNumer is an integer between 8 and 128, run through prompts
  //else continue kick back and repeat
  if (UserNumber >= 8 && UserNumber <= 128 && Number.isInteger(UserNumber)) {
    var lowerCase = confirm("Do you want lower case letters?")
    var UpperCase = confirm("Do you want upper case letters?")
    var Num = confirm("Do you want numbers?")
    var Special = confirm("Do you want special characters?")
    
    //if user chooses all, then spit out password with all characters
    if (lowerCase != 1 && UpperCase != 1 && Num != 1 && Special != 1) {
      alert("You have to pick at least one condition");
    }

    // if user chooses lower case
      if (lowerCase == 1){
     //add lower to empty validChars
      validChars = validChars.concat(lower)
       
    }

    // if user chooses upper case
      if (UpperCase == 1){
      validChars = validChars.concat(upper)
    }

    // if userchooses numbers
    if (Num == 1){
      validChars = validChars.concat(numberlist)
    }

     //if user chooses special characters
    if (Special == 1){
      validChars = validChars.concat(special)
    }

console.log(validChars)





  }
    else {
      alert("That's not allowed. Try again")
   
    }


// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);

