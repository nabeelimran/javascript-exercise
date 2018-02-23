// // 01 ALERT
// alert("Welcome visitor!");
// alert("Welcome to JS land \nHappy coding");


// // 02 VariablesForStrings
// var fullName = "Nabeel Imran";

// var message = "Hello World";
// alert(message);

// var name = prompt("What is your Name?");
// var age = prompt("how old are you?");
// var institute = prompt("where do you study?");
// var address = prompt("Where do you live?");
// alert(name);
// alert(age);
// alert(institute);
// alert(address);

// var msg = "PIZZA";
// for (let i = 0; i < msg.length; i++) {
//     console.log(msg.slice(0,msg.length-i)+"\n");
// }

// var noOfChild = 3;
// var partnerName = "ABC";
// var loc = "UK";
// var jobTitle = "General Manager";
// alert("You will be a "+jobTitle+" in "+loc+", and married \nto "+partnerName+" with "+noOfChild+" kids.");

// var email = "nabeel.imran852@gmail.com";
// alert("My email address is: "+email);

// var bookName="A smarter way to learn JavaScript";
// alert(bookName);


// // Variable for Numbers
// var birthYear = 1998;
// document.writeln("My birth year is "+birthYear+"<br>Data type of my declared variable is "+typeof(birthYear));


// var visitorName = prompt("Please enter your name:");
// var product = prompt("Enter name of product you want to buy");
// var quantity = prompt("Enter quantity for this product");
// document.writeln(visitorName+" ordered "+5+" "+product+ "\(s\) on XYZ store");


// // Legal and Illegal variable names
// var name,age,title;

// // var 0name,9name; are illegal.

// document.writeln("a. A heading stating \“Rules for naming JS variables\” <br>b. Variable names can only contain $, _ and alphabets.For example $my_1stVariablec.<br>Variable names are case sensative. Variable names should not be JS Keywords");



// //Math Expressions
// var num1=3,num2=5,sum=num1+num2,rem=num2%num1;
// alert("The sum of "+num1+" and "+num2+" is "+sum);
// alert("The remainder of "+num2+" with "+num1+" is "+rem);

// var num;
// document.writeln("Value after variable declaration is "+num);
// num=3;
// document.writeln("Value after initialization is "+num);
// num++;
// document.writeln("Value after increament is "+num);
// num = num+7;
// document.writeln("Value after addition is "+num);
// num--;
// document.writeln("Value after decrement is "+num);
// num%=3;
// document.writeln("Remainder is "+num);


var ticketPrice = 600;
var total = +prompt("Cost of one movie ticket is 600 PKR \nHow much do you want to buy?");
total*=ticketPrice;
alert("Your total bill is Rs."+total);




