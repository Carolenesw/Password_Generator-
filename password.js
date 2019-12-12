//Add arrays to generate password characters 

var arrUp = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];
var arrlo = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
var arrNu = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"];
// var arrSy = ["~", "!", ', @, #, $, %, ^, &, ", (), _, +, `, =, -, ;, :, ", [, ,, /, ], {, ?, }, |, \, ;, "(",")", "."];

var passW = "upperCase + lowerCase + numbers + symbols";
// var lenght = 8 > 128;

//Add variables to prompted user to select password criteria

var upperCase = "Would you like your password to contain uppercase?";
var lowerCase = "Would you like your password to contain lowercase?";
var numbers = "Would you like your password to contain numbers?";
var speChar = "Would you like your password to contain special characters?";

// Alert informing user of password requirements 

var userHints = alert("Unique User-password MUST be consist of TWO of the following: numbers, upper case, lower case or symbols");

//       // Converts the user's answer to lowercase.

//       var favoriteBandUserLower = favoriteBandUser.toLowerCase();

//  // Converts the user's answer to lowercase.

//  var favoriteBandUserLower = favoriteBandUser.toLowerCase();

