

var a = 10, b = 20;
var addition, multiply, subtract, divide, modulus, increment, decrement, assignment;

addition = a + b;
multiply = (a * b) + 10;
subtract = b - a;
divide = b / a;
modulus = a % b;

a++;
a++;
b--;
b--;
increment = a;
decrement = b;

a += 10;
b -= 5;
assignment = a;
assignment2 = b;

document.getElementById("addition").innerHTML = addition;
document.getElementById("multiply").innerHTML = multiply;
document.getElementById("subtract").innerHTML = subtract;
document.getElementById("divide").innerHTML = divide;
document.getElementById("modulus").innerHTML = modulus;
document.getElementById("increment").innerHTML = increment;
document.getElementById("decrement").innerHTML = decrement;
document.getElementById("assignment").innerHTML = assignment;
document.getElementById("assignment2").innerHTML = assignment2;

var user = {
    firstName:"SOHAIL",
    lastName:"GHAFOOR",
    email:"Sohail@example.com",
    fullName: function() {
        return this.firstName + " " + this.lastName;
    }
};
var fullname = user.fullName();

var colors = [
    "red",
    "blue",
    "green",
    "yellow",
    "orange"
];
var newcolors = ["pink", "black", "white"];
var newusers = [24, 11, 19, 26];


var mergedArrays = colors.concat(newusers, newcolors);
var arrayLegnth = colors.length;

document.getElementById("object").innerHTML = fullname;
document.getElementById("array").innerHTML = arrayLegnth;



var cars = ["honda", "toyota", "audi", "suzuki", "BMW", "Civic"];
var names = "";
var length = cars.length;
var cars = ["honda", "toyota", "audi", "suzuki", "BMW", "Civic"];
var names = "";
var length = cars.length;

var user = {userID:"20", userName:"Sohail", userEmail:"Sohail@gmail.com"};
var userData = "";
var x;
for (i = 0; i < length; i++) {
    names += "<li>"+cars[i]+"</li>";
    document.getElementById("carNames").innerHTML = names;
}

for (x in user) {
    userData += user[x]+"<br>";
    document.getElementById("userData").innerHTML = userData;
}
var numberTxt = "";
var n = 0;
while (n < 10) {
    numberTxt += "This number is " + n + "<br>";
    n++;
}
document.getElementById("numbersLoop").innerHTML = numberTxt;

do {
    numberTxt += "This number is " + n + "<br>";
    n++;
}
while (n < 10);
document.getElementById("numbersLoop").innerHTML = numberTxt;

var email = "shahzad@example.com";
var calculate = calc(10, 20, 5);
document.getElementById("calculate").innerHTML = calculate;

function addition(a,b) {
    var x = a + b;
    document.getElementById("addition").innerHTML = x;
}
addition(10, 20);

function multiply(a,b) {
    var x = a * b;
    document.getElementById("multiply").innerHTML = x;
}
multiply(10, 20);

function calc(a,b,c) {
    var x = (a * b) / c;
    return x;
}


var x = 12;

if (x == 10) {
    document.getElementById("ifCondition").innerHTML = "The Value of X is equal to 10"
}
if (x > 10) {
    document.getElementById("ifElseCondition").innerHTML = "The Value of X is greater than 10"
} else {
    document.getElementById("ifElseCondition").innerHTML = "The Value of X is less than 10"
}

function checkValue() {
    var y = document.getElementById("userInput").value;
    if (y == 10) {
        document.getElementById("elseIfCondition").innerHTML = "The Value of X is equal to 10"
    } else if (y == 12) {
        document.getElementById("elseIfCondition").innerHTML = "The Value of X is equal to 12"
    } else if (y == 14) {
        document.getElementById("elseIfCondition").innerHTML = "The Value of X is equal to 14"
    } else {
        document.getElementById("elseIfCondition").innerHTML = "The Value of X cannot be determined"
    }
}

function checkColor() {
    var color = document.getElementById("userInput2").value;
    switch(color) {
        case "red":
        case "red":
        
            document.getElementById("switchStatement").innerHTML = "The Color is Red";
        break;
        case "blue":
            document.getElementById("switchStatement").innerHTML = "The Color is Blue";
        break;
        default:
        document.getElementById("switchStatement").innerHTML = "The Color is " + color;
    }
}
