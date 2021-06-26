
// let day;
// switch(new Date().getDate()){
//   case 0:
//     day ='Sunday';
//     break;
//   case 1:
//     day = 'Monday';
//     break;
//   case 2:
//     day ='Tuesday';
//     break;
//   case 3:
//     day = 'Wednesday';
//     break;
//   case 4:
//     day ='Trusday';
//     break;
//   case 5:
//     day ='Friday';
//     break;
//   case 6:
//     day ='Saturday';
//     break;
// }

// console.log('today is ${day}');



// digit spelling:
// 0= Zero, 1= One, ...... 0= Nine,, 

// var digit = prompt("Enter any digit :");
// switch(digit){
//   case "0":
//     console.log("Zero");
//     break;
//  case "1":
//     console.log("One");
//     break;  
// case "2":
//   console.log("Two");
//   break;
//   case "3":
//     console.log("Three");
//     break;
//   case "4":
//     console.log("Four");
//     break;
//   case "5":
//     console.log("Five");
//     break;
//   case "6":
//     console.log("six");
//     break;
//   case "7":
//     console.log("saven");
//     break;
//   case "8":
//     console.log("Eight");
//     break;
//   case "9":
//     console.log("NIne");
//     break;
//     default:
//     console.log("Not a digit");


// }



//  Find out  vowel letter and consonant  letter using switch

var letter = prompt("Enter any letter :");
letter = letter.toLocaleLowerCase();

switch (letter){

case "a":
case "e":
case "i":
case "o":
case "u":

  console.log("Vowel");
  break;

default:
  console.log("Consonant");  

}
   

