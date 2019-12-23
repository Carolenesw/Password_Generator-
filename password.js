//Add arrays to generate password characters 

var arrUp = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];
var arrLo = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
var arrNu = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"];
var arrSy = ["`", "~", "!", "@", "#", "$", "%", "^", "&", "*", "(", ")", "_", "-", "+", "=", "<", ".", ">", "/", "?", "'", ";", ":", "[", "{", "]", "}", "|", "]", "]", ";", "\""]


function charRandom(arr){
  var temp = Math.floor(Math.random()*arr.length);
  return arr[temp];
}

function pwd(){

  var pwdLength = parseInt(prompt("How many characters you want for your password?"));

var confirmUpperCase = confirm("Do you want uppercase letters?");
var confirmLowerCase = confirm("Do you want lowercase letters?");
var confirmNum = confirm("Do you want numbers?");
var confirmSpeChar = confirm("Do you want special characters?");
var confirmIn = [confirmUpperCase, confirmLowerCase, confirmNum, confirmSpeChar];
  var result = [];
  var tempChar = [];
  var finalChar = [];

  


//pwd();