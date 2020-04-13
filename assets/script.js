// Assignment Code
var generateBtn = document.querySelector("#generate");


// Write password to the #password input
function writePassword(length) {
 // var password = generatePassword();
  var passwordText = document.querySelector("#password");

  //variables for the password
var validChars = [] //store the user selected variables into the empty list
var lower = 'abcdefghijklmnopqrstuvwxyz'.split('')
var upper = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ'.split('')
var numberlist = '1234567890'.split('')
var special =  ' !"#$%&\'()*+,-./:;<=>?@[\]^_`{|}~'.split('')

//start of the alert box/questions
  var Input = prompt("How many characters do you want your password to have? (must be between 8 and 128 characters)")
  var length = parseInt(Input) //turns Input into an integer

    //if length is an interger between 8 and 128, continue. Otherwise kick back and repeat
  if (length >= 8 && length <= 128 && Number.isInteger(length)) {
    var lowerCase = confirm("Do you want lower case letters?")
    var UpperCase = confirm("Do you want UPPER CASE letters?")
    var Num = confirm("Do you want numbers?")
    var Special = confirm("Do you want special characters?")
    
    //if user chooses none, tell them to start over
    if (lowerCase != 1 && UpperCase != 1 && Num != 1 && Special != 1) {
      alert("Unacceptable. You must choose a set of characters.");
    }

    // if user chooses lower case
      if (lowerCase == 1){
     //add lower to empty validChars
      validChars = validChars.concat(lower)
    }

    // if user chooses upper case
      if (UpperCase == 1){
        //add upper to validChars
      validChars = validChars.concat(upper)
    }

    // if userchooses numbers
    if (Num == 1){
      //add numberlist to validChars
      validChars = validChars.concat(numberlist)
    }

     //if user chooses special characters
    if (Special == 1){
      //add special characters to validChars
      validChars = validChars.concat(special)
    }

  }
  //IF USER DECIDED TO PUT SOMETHING NOT BETWEEN 8 AND 128 AND/OR IS NOT AN INTEGER, KICK IT BACK
    else {
      alert("Unacceptable. Try again")
   
    }
//if at least one condition is selected, need an empty string to store password
var password = ''
    
//to generate password, insert for loop to show how many times you need to loop 
for (var i = 0; i < length; i++) {
  // Generate a random decimal number between 0 and length of array to select associated list item in array
  var num = Math.random();
  var wholeNum = Math.floor(num * validChars.length) 

validChars[wholeNum] //select items from list using random number generated

password = password.concat(validChars[wholeNum]) //combine all items selected from list into password list
}

  passwordText.value = password; //putting it in the html

}
// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);

