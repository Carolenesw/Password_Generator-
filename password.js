//Add arrays to generate password characters 

var arrUp = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];
var arrLo = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
var arrNu = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"];
// var arrSy = ["~", "!", ', @, #, $, %, ^, &, ", (), _, +, `, =, -, ;, :, ", [, ,, /, ], {, ?, }, |, \, ;, "(",")", "."];

var passW = ["arrUp", "arrLo", "arrNu", "arrSy"];
// var lenght = 8 > 128;

//Add variables to prompted user to select password criteria

var upperCase = "Would you like your password to contain uppercase?";
var lowerCase = "Would you like your password to contain lowercase?";
var numbers = "Would you like your password to contain numbers?";
var speChar = "Would you like your password to contain special characters?";
var passW = passW + randomPass;
var randomPass;
var AnsUpperCase;
var AnsLowerCase;
var AnsSpeChar;
var passChar = Math.floor(parseInt(passW)); 

// parseInt - return a string to a number 
// Math.random - return A a random number
// Math.floor - round a number down to the nearest integer


// Alert informing user of password requirements 

var userHints = alert("Unique User-password MUST be consist of minimum of One of the following: numbers, upper case, lower case or symbols");

var userLenght = alert("Password lenght must be between 8 and 128 characters");


//prompted user to select password criteria 

var upperCase = prompt("Would you like your password to contain uppercase?");
var lowerCase = prompt("Would you like your password to contain lowercase?");
var numbers = prompt("Would you like your password to contain numbers?");
var speChar = prompt("Would you like your password to contain special characters?");
var promptAns = ["upperCase", "lowerCase", "numbers", "speChar"];
 
//confirm user inputs 

var confirmUpperCase = confirm("Enter password with uppercase letters");
var confirmLowerCase = confirm("Enter password with lowercase letters");
var confirmNum = confirm("Enter password with numbers");
var confirmSpeChar = confirm("Enter password with special characters");
var confirmIn = ["confirmUpperCase", "confirmLowerCase", "confirmNum", "confirmSpeChar"];

// If the user selection confirm === true, run the following block of codes. 

// for (var i = 0; i < 5; i++) {
//   //User randomly choose minimum of two choices from the options arrays 
//   var confirm = promptAns[Math.floor(Math.random();

//     console.log(confirmIn);
// }

