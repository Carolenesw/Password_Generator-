//Add arrays to generate password characters 

var arrUp = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];
var arrLo = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
var arrNu = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"];
var arrSy = ["`", "~", "!", "@", "#", "$", "%", "^", "&", "*", "(", ")", "_", "-", "+", "=", "<", ".", ">", "/", "?", "'", ";", ":", "[", "{", "]", "}", "|", "]", "]", ";", "\""]

// add function for random character selection. 
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
//add empty object for selected password 
  
var result = [];
  var tempChar = [];
  var finalChar = [];

// add if statement for temp and final random password using the different characters with push event 
  if(confirmUpperCase){
    tempChar = tempChar.concat(arrUp);
    finalChar.push(charRandom(arrUp));
  }
  
  if(confirmLowerCase){
    tempChar = tempChar.concat(arrLo);
    console.log(tempChar);
    finalChar.push(charRandom(arrLo));
  }
  
  if(confirmNum){
    tempChar = tempChar.concat(arrNu);
    console.log(tempChar);
    finalChar.push(charRandom(arrNu));
  }
  
  if(confirmSpeChar){
    tempChar = tempChar.concat(arrSy);
    console.log(tempChar);
    finalChar.push(charRandom(arrSy));
  }
  
  // use For loop to get password lenght and random character 
  for(var i=0; i<pwdLength;i++){
    result.push(charRandom(tempChar));
  }
  
  // use For loop to get password and at least one selected character 
  for(var i=0;i<finalChar;i++){
    result[i] = finalChar[i];
  }
  // use get document by id to link html and js page 
  document.getElementById("password").innerHTML = result.join("");
  console.log(result.join(""));
  
  return(result.join(""));
  
  }  


//pwd();