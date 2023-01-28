//Ans 1

// var character = prompt("ASCII Code","Enter a character");

// var numberArray = ["0","1","2","3","4","5","6","7","8","9"];
// var uppercaseArray = ["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z"];
// var lowercaseArray = ["a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z"];

// for (let i = 0; i < numberArray.length; i++) {
//     if (character == numberArray[i]) {
//     j = i + 48;
//     document.write("ASCII Code of Num "+numberArray[i]+" is "+j);
//     break; 
//         }
//     }
//  for (let i = 0; i < uppercaseArray.length; i++) {
//     if (character == uppercaseArray[i]) {
//     j = i + 65;
//     document.write("ASCII Code of UpperCase Letter "+uppercaseArray[i]+" is "+j);
//     break; 
//             }
//         }    
// for (let i = 0; i < lowercaseArray.length; i++) {
//      if (character == lowercaseArray[i]) {
//      j = i + 97;
//      document.write("ASCII Code of LowerCase Letter "+lowercaseArray[i]+" is "+j);
//              }
//      break;        
//          }

         
        
//Ans 2

// var intOne = +prompt("Compare and display a number","Enter first number");
// var intSecond = +prompt("Compare and display a number","Enter second number");

// if (intOne > intSecond) {
//     document.write(intOne+ " is the bigger one");
    
// }
// else if (intOne < intSecond) {
//     document.write(intSecond+ " is the bigger one");
    
// }
// else{
//     document.write("Both numbers are equal");
// }

//Ans 3

// var number = +prompt("Nature of a number","Enter a number");


// if (number > 0) {
//     document.write(number+ " is a +ve num");
    
// }
// else if (number < 0) {
//     document.write(number+ " is a -ve num");
    
// }
// else{
//     document.write(number+ " is a nuetral num");
// }

//Ans 4

// var inputChar = prompt("Vowels or Not","Please enter a character");
// var character = inputChar.toLocaleLowerCase();

// var vowels = ["a","e","i","o","u"];
// var consonants = ["b","c","d","f","g","h","j","k","l","m","n","p","q","r","s","t","v","w","x","y","z"];

// for (let i = 0; i < vowels.length; i++) {
//     if (character == vowels[i]) {
//         document.write("Character "+inputChar+" is a vowel");
//         break;
//     }
    
// }

// for (let i = 0; i < consonants.length; i++) {
//     if(character == consonants[i]) {
//         document.write("Character "+inputChar+" is a consonant");
//         break;
    
//     }
    
// }

//Ans 5

// var password = prompt("Create a Password","Enter a password");
// var confirmPassword = prompt("Password Confirmation","Enter your password");

// if ( password == "") {
//     document.write("Please enter your password");
// }

// else if ( password == confirmPassword) {
//     document.write("Your Password is Correct!");
// }

// else if (password != confirmPassword) {
//     document.write("Your Password is Incorrect!");
// }


//Ans 6

// var greeting;
// var hour = 13;
// if (hour < 18) {
// greeting = "Good day";
// document.write(greeting);
// }
// else {
// greeting = "Good evening";
// document.write(greeting);
// }

//Ans 7

// var time = prompt("Input Time","Enter a time");

// if (time >= "0000" && time < "1200") {
//     document.write("Good Morning!");
// }

// else if (time >= "1200" && time < "1700") {
//     document.write("Good Afternoon!");
// }

// else if (time >= "1700" && time < "2100") {
//     document.write("Good Evening!");
// }
// else if (time >= "2100" && time <= "2359"){
//     document.write("Good Night!");
// }
// else{
//     document.write("Please enter a correct time!");
// }

