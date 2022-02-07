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
//
// Setup
let sum = 0;

function addThree() {
  sum = sum + 3;
}

// Only change code below this line
 function addFive(){
   sum = sum + 5; 
 }

// Only change code above this line

addThree();
addFive();
//
// Setup
//let processed = 2;

function processArg(num) {
    return (num + 3) / 5;
  }
  
  // Only change code below this line
  var processed=processArg(7);
  //
  function nextInLine(arr, item) {
    // Only change code below this line
      arr.push(item);
      var temp = arr.shift();
      return temp;
    // Only change code above this line
  }
  
  // Setup
  const testArr = [1, 2, 3, 4, 5];
  
  // Display code
  console.log("Before: " + JSON.stringify(testArr));
  console.log(nextInLine(testArr, 6));
  console.log("After: " + JSON.stringify(testArr));
  //
  function welcomeToBooleans() {
    // Only change code below this line
  
    return true; // Change this line
  
    // Only change code above this line
  }
//
function trueOrFalse(wasThatTrue) {

     if(wasThatTrue)
     {
       return "Yes, that was true";
     }
     return "No, that was false";
  
  }
  //
  function testEqual(val) {
    if (val==12) { // Change this line
      return "Equal";
    }
    return "Not Equal";
  }
  
  testEqual(10);
  //
  function testStrict(val) {
    if (val===7) { // Change this line
      return "Equal";
    }
    return "Not Equal";
  }
  
  testStrict(10);
  //
  function compareEquality(a, b) {
    if (a === b) { // Change this line
      return "Equal";
    }
    return "Not Equal";
  }
  
  compareEquality(10, "10");
  //
  // Setup
function testNotEqual(val) {
    if (val!="99") { // Change this line
      return "Not Equal";
    }
    return "Equal";
  }
  
  testNotEqual(10);
  //
  // Setup
function testStrictNotEqual(val) {
    if (val!==17) { // Change this line
      return "Not Equal";
    }
    return "Equal";
  }
  
  testStrictNotEqual(10);
  //
  function testGreaterThan(val) {
    if (val>100) {  // Change this line
      return "Over 100";
    }
  
    if (val>10) {  // Change this line
      return "Over 10";
    }
  
    return "10 or Under";
  }
  
  testGreaterThan(10);
  //
  function testGreaterOrEqual(val) {
    if (val>=20) {  // Change this line
      return "20 or Over";
    }
  
    if (val>=10) {  // Change this line
      return "10 or Over";
    }
  
    return "Less than 10";
  }
  
  testGreaterOrEqual(10);
  //
  function testLessThan(val) {
    if (val<25) {  // Change this line
      return "Under 25";
    }
  
    if (val<55) {  // Change this line
      return "Under 55";
    }
  
    return "55 or Over";
  }
  
  testLessThan(10);
  //
  function testLessOrEqual(val) {
    if (val<=12) {  // Change this line
      return "Smaller Than or Equal to 12";
    }
  
    if (val<=24) {  // Change this line
      return "Smaller Than or Equal to 24";
    }
  
    return "More Than 24";
  }
  
  testLessOrEqual(10);
//
function testLogicalAnd(val) {
    // Only change code below this line
  
    if (val>=25 && val<=50) {
      
        return "Yes";
      
    }
  
    // Only change code above this line
    return "No";
  }
  
  testLogicalAnd(50);
  //
  function testLogicalOr(val) {
    // Only change code below this line
  
    if (val<10||val>20) {
      return "Outside";
    }
  
  
    // Only change code above this line
    return "Inside";
  }
  
  testLogicalOr(15);
  //
  function testElse(val) {
    let result = "";
    // Only change code below this line
  
    if (val > 5) {
      result = "Bigger than 5";
    }
    else
  {
      result = "5 or Smaller";
    }
  
    // Only change code above this line
    return result;
  }
  
  testElse(4);
  //
  function testElseIf(val) {
    if (val > 10) {
      return "Greater than 10";
    }
  
    else if (val < 5) {
      return "Smaller than 5";
    }
    else{
  
    return "Between 5 and 10";
  }
  }
  
  testElseIf(7);
  //
  function orderMyLogic(val) {
    if (val < 5) {
    return "Less than 5";}
    else if (val < 10) {
    return "Less than 10";
  } else {
    return "Greater than or equal to 10";
  }
}

orderMyLogic(7);
///
function testSize(num) {
    // Only change code below this line
    if (num<5) {
    return "Tiny";
  } else if (num<10) {
    return "Small";
  } else if (num<15) {
    return "Medium";
    } else if(num<20) {
     return "Large";
  }
   else
    return "Huge";
    // Only change code above this line
  }
  
  testSize(7);
  //
  const names = ["Hole-in-one!", "Eagle", "Birdie", "Par", "Bogey", "Double Bogey", "Go Home!"];

function golfScore(par, strokes) {
  // Only change code below this line
    if(strokes==1)
    return "Hole-in-one!";
    else if(strokes==par-1)
    return "Birdie";
    else if(strokes<=par-1)
    return "Eagle";
    else if(strokes==par)
    return "Par";
    else if(strokes==par+1)
    return "Bogey";
    else if(strokes==par+2)
    return "Double Bogey";
    else if(strokes>=par+3)
    return "Go Home!";

  return "Change Me";
  // Only change code above this line
}

golfScore(5, 4);
//
function caseInSwitch(val) {
  let answer = "";
  // Only change code below this line
switch(val){
  case 1:
  return "alpha"
  break;
  case 2:
  return "beta"
  break;
  case 3:
  return "gamma";
  break;
  case 4:
  return "delta";
  break;

}
  // Only change code above this line
  return answer;
}

caseInSwitch(1);
//
function switchOfStuff(val) {
  let answer = "";
  // Only change code below this line
 switch(val){
case 'a':
return "apple";
break;
case 'b':
return "bird";
break;
case 'c':
return "cat";
break;
default:
return "stuff";
 }


  // Only change code above this line
  return answer;
}

switchOfStuff(1);
//
function sequentialSizes(val) {
  let answer = "";
  // Only change code below this line
 switch(val){
   case 1:
   case 2:
   case 3:
   return "Low";
   break;
   case 4:
   case 5:
   case 6:
   return "Mid";
   break;
   case 7:
   case 8:
   case 9:
   return "High";
 }


  // Only change code above this line
  return answer;
}

sequentialSizes(1);
//
function chainToSwitch(val) {
  let answer = "";
  // Only change code below this line
  switch(val){
    case "bob":
    return "Marley";
    break;
    case 42:
    return "The Answer";
    break;
    case 1:
    return "There is no #1";
    break;
    case 99:
    return "Missed me by this much!";
    break;
    case 7:
    return "Ate Nine";
    break;
  }

  // Only change code above this line
  return answer;
}

chainToSwitch(7);
//
function isLess(a, b) {
  // Only change code below this line
  return a <= b;
  // Only change code above this line
}

isLess(10, 15);
//
// Setup
function abTest(a, b) {
  // Only change code below this line
     if(a<0||b<0)
     return undefined;


  // Only change code above this line

  return Math.round(Math.pow(Math.sqrt(a) + Math.sqrt(b), 2));
}

abTest(2,2);
//
let count = 0;

function cc(card) {
  // Only change code below this line
var regex = /[JQKA]/;
  if (card > 1 && card < 7) {
    count++;
  } else if (card === 10 || regex.test(card)) {
    count--;
  }

  if (count > 0) return count + " Bet";
  return count + " Hold";

  return "Change Me";
  // Only change code above this line
}

cc(2); cc(3); cc(7); cc('K'); cc('A');
//
const myDog = {
  // Only change code below this line
name: "Labra",
legs: 4,
tails: 1,
friends:["x","y","z"]

  // Only change code above this line
};
//
// Setup
const testObj = {
  "hat": "ballcap",
  "shirt": "jersey",
  "shoes": "cleats"
};

const hatValue = testObj.hat;     
const shirtValue = testObj.shirt; 
//
