// Assignment Code
var generateBtn = document.querySelector("#generate");


// Write password to the #password input
function writePassword(length) {
  console.log("it works")
 // var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

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

    // if user only chooses lower case
    else if (lowerCase == 1 && UpperCase != 1 && Num != 1 && Special != 1){
      //only lower case password
      //choose the UserNumber number of lower case letters and shuffle to make password
    }

    // if user only chooses upper case
    else if (lowerCase != 1 && UpperCase == 1 && Num != 1 && Special != 1){

    }

    // if user only chooses numbers
    else if (lowerCase != 1 && UpperCase != 1 && Num == 1 && Special != 1){

    }

    //if user only chooses special characters
    else if (lowerCase != 1 && UpperCase != 1 && Num != 1 && Special == 1){

    }


  }
    else {
      console.log(Number.isInteger(UserNumber))
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


