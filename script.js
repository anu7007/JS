//this is an in-line comment
/* this is a 
multi-line comment*/
// var myName;
// // Setup
// var a;
// a=7;
// var b;
// b=a;
// var myFirstName='a';
// var myLastName='b';
// Only change code below this line
var a;
var b;
var c;
a=5;
b=10;
c="I am a";
// Only change code above this line

a = a + 1;
b = b + 5;
c = c + " String!";

// Variable declarations
var StUdLyCapVaR;
var properCamelCase;
var TitleCaseOver;
var studlyCapVar;
var titleCaseOver;
// Variable assignments
var STUDLYCAPVAR = 10;
var tITLEcASEoVER = 9000;
studlyCapVar=10;
properCamelCase="A String";
titleCaseOver=9000;
let catName = "Oliver";
let catSound = "Meow!";

const FCC="freeCodeCamp"; // Change this line
let fact = "is cool!"; // Change this line
fact = "is awesome!";
console.log(FCC, fact); // Change this line
const sum = 10 + 10;
const difference = 45 - 33;
const product = 8 * 10;
const quotient = 66 / 33;
let myVar = 87;
myVar++;
myVar--;
const myDecimal=9.6;
const product = 5.0 * 1.0;
const quotient = 6.0 * 2.0;
const remainder = 11%3;
//augmented addition
let a = 3;
let b = 17;
let c = 12;
a += 12;
b += 9;
c += 7;
//augmented subtraction
let a = 11;
let b = 9;
let c = 3;
a -= 6;
b -= 15;
c -= 1;
//augmented multiplication
let a = 5;
let b = 12;
let c = 4.6;
a *= 5;
b *= 3;
c *= 10;
//augmented division
let a = 48;
let b = 108;
let c = 33;
a /= 12;
b /= 4;
c /= 11;
//escaping literal quotes in string
const myStr = "I am a \"double quoted\" string inside \"double quotes\".";
const myStr1 = '<a href="http://www.example.com" target="_blank">Link</a>';
const myStr2 = "FirstLine\n\t\\SecondLine\nThirdLine"; 
const myStr3 = "This is the start. "+"This is the end."; 
//concatenation using +=
let myStr="This is the first sentence. ";
myStr+="This is the second sentence.";
//constructing string with variables
const myName = "Anupam";
const myStr = "My name is"+myName+"and I am well";
//apending variables to strings
const someAdjective = "Pro";
let myStr = "Learning to code is ";
myStr+=someAdjective;
//finding length of string
let lastNameLength = 0;
const lastName = "Lovelace";
lastNameLength = lastName.length;
//Use Bracket Notation to Find the First Character in a String
let firstLetterOfLastName = "";
const lastName = "Lovelace";
firstLetterOfLastName = lastName[0];
let myStr = "Jello World";

// string immutability
let myStr = "Jello World";
myStr = "Hello World";

//Use Bracket Notation to Find the Nth Character in a String
const lastName = "Lovelace";
const thirdLetterOfLastName = lastName[2]; 
//Use Bracket Notation to Find the last Character in a String
const lastName = "Lovelace";
const lastLetterOfLastName = lastName[lastName.length-1]; 
//Use Bracket Notation to Find the Nth-to-Last Character in a String
const lastName = "Lovelace";
const secondToLastLetterOfLastName = lastName[lastName.length-2]; 
//Word Blanks
const myNoun = "dog";
const myAdjective = "big";
const myVerb = "ran";
const myAdverb = "quickly";
const wordBlanks = "The "+myAdjective+" "+myNoun+" "+myVerb+" "+myAdverb; // Change this line
//Store Multiple Values in one Variable using JavaScript Arrays
const myArray = ["Anupam", 5];
//Nest one Array within Another Array
const myArray = [["anupam, 1"], ["rastogi", 2]];
//Access Array Data with Indexes
const myArray = [50, 60, 70];
var myData=myArray[0];
//Modify Array Data With Indexes
const myArray = [18, 64, 99];
myArray[0]=45;
//Access Multi-Dimensional Arrays With Indexes
const myArray = [
    [1, 2, 3],
    [4, 5, 6],
    [7, 8, 9],
    [[10, 11, 12], 13, 14],
  ];
  
  const myData = myArray[2][1];
  //Manipulate Arrays With push()
  const myArray = [["John", 23], ["cat", 2]];
myArray.push(["dog",3])
//Manipulate Arrays With pop()
const myArray = [["John", 23], ["cat", 2]];
var removedFromMyArray=myArray.pop(1);
//Manipulate Arrays With shift()
const myArray = [["John", 23], ["dog", 3]];
var removedFromMyArray = myArray.shift();
//Manipulate Arrays With unshift()
const myArray = [["John", 23], ["dog", 3]];
myArray.shift();
myArray.unshift(["Paul", 35]);
//shopping list
const myList = [["chocolate", 10], ["toffes", 20], ["toys",5],["grocery", 35], ["vegatables", 20]];
//Write Reusable JavaScript with Functions
function reusableFunction() {
    console.log("Hi World");
  }
  reusableFunction();
  //Passing Values to Functions with Arguments
  function functionWithArgs(p1, p2){
    console.log(p1+p2);
   }
   functionWithArgs(1,2);
   functionWithArgs(7,9);
   //Return a Value from a Function with Return
   function timesFive(p){
    return p*5
}
timesFive(5);
timesFive(2);
timesFive(0);

//Global Scope and Functions
let myGlobal=10;

function fun1() {
     oopsGlobal=5;
}
//Local Scope and Functions
function myLocalScope() {
    console.log('inside myLocalScope', myVar);
  }
  myLocalScope();
  console.log('outside myLocalScope', myVar);
  //Global vs. Local Scope in Functions

  const outerWear = "T-Shirt";

function myOutfit() {
     return "sweater";
  return outerWear;
}
myOutfit();