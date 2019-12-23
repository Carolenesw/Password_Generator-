//Add arrays to generate password characters 

var arrUp = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];
var arrLo = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
var arrNu = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"];
var arrSy = ["`", "~", "!", "@", "#", "$", "%", "^", "&", "*", "(", ")", "_", "-", "+", "=", "<", ".", ">", "/", "?", "'", ";", ":", "[", "{", "]", "}", "|", "]", "]", ";", "\""]

// for (var i = 0; i < 128; i++) {
//   var userPass = passW[Math.floor(Math.random() * passW.length)];


// parseInt - return a string to a number 

var userHints = alert("Unique User-password MUST be consist of minimum of One of the following: numbers, upper case, lower case or symbols");

var userLenght = alert("Password lenght must be between 8 and 128 characters");

 
//confirm user inputs based on character selection

var confirmUpperCase = confirm("Enter password with uppercase letters");
var confirmLowerCase = confirm("Enter password with lowercase letters");
var confirmNum = confirm("Enter password with numbers");
var confirmSpeChar = confirm("Enter password with special characters");
var confirmIn = ["confirmUpperCase", "confirmLowerCase", "confirmNum", "confirmSpeChar"];

// create a function to select user password 


// function passW (userPass) {

const getPassW = (userPass) => {
if (userPass === "arrUp" || userPass === "arrLo" || userPass === "arrNu" || userPass === "arrSy") {
 return userPass
} else {
  alert ("Error, please use required characters");
}
}

//   // alert ("enter");
// } else if (userPass === "arrUp" && userPass === "arrLo") {
//   alert ("enter");
// } else if (userPass === "arrNu" && userPass === "arrSy") {
//   alert ("enter");
// } else if (userPass === "arrUp" && userPass === "arrNu") {
//  alert ("enter");
// } else if (userPass === "arrUp" && userPass === "arrSy") {
//   alert ("enter");
// } else if (userPass === "arrLo" && userPass === "arrSy") {
//   alert ("enter");
// } else if (userPass === "arrUp" && userPass === "arrLo" && userPass === "arrNu") {
//   alert ("enter");
// } else if (userPass === "arrLo" && userPass === "arrNu" && userPass === "arrSy") {
//   alert ("enter");
// } else if (userPass === "arrUp" && userPass === "arrLo" && userPass === "arrNu" && userPass === "arrSy") {
//   alert ("enter");
// } else {
//   alert ("Error! Try again");
// }
// };

// passW(userPass);