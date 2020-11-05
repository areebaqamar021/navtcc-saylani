//1.
// alert('Areeba Qamar \n Intermediate');
// alert(`Areeba Qamar 
// Intermediate`);

//.2
// var birthYear = 2002;
// alert(`type of birth year is ` + typeof birthYear );

// var birthYear = '2002';
// alert(`type of birth year is ` + typeof birthYear );

// var birthYear = ['2002', '2000'];
// alert(`type of birth year is ` + typeof birthYear );

//.3
// alert(`A heading stating “Rules for naming JS variables”
// Variable names can only contain letters, digits, underscores and dollersigns. 
// Variables must begin with a letters, underscores or dollersigns.
// Variable names are case sensitive
// Variable names should not be JS keywords`);

// .4
// var dob = +prompt('Enter your age');
// dob_days = dob * 365;
// console.log(dob_days);
 
//.8
// var num = prompt('enter your num');
// if(num > 0) {
//     alert(`your num is positive`);
// }

//.7
// var num3;
// function square(num) {
//     num3= num * num;
// }
// square(6);
// alert(num3);

//.5
// var myNumber;
// function inc(num) {
//     myNumber = ++num;
//     return myNumber
// }
// var result = inc(5);
// console.log(result);

//.6
// var myNumber;
// function inc(num) {
//     myNumber = --num;
//     return myNumber
// }
// var result = inc(5);
// console.log(result);

//.9
//var USDollers = 10;
// var SaudiRiyals = 25;
// var USDollers_PKR = 163;
// var SaudiRiyals_PKR = 43;
// var total_PKR = (USDollers * USDollers_PKR) + (SaudiRiyals * SaudiRiyals_PKR);
// console.log(`${USDollers} usdollers and ${SaudiRiyals} saudi riyals are equal to ${total_PKR}`); 

// .10
// var a = 2;
// var b = 1;
// var result = --a - --b + ++b + b--;
// // --a ===> 1    (a=1, b=1)
// // --a - --b ===> 1     (a=1, b=0)   
// // --a - --b + ++b ===> 2    (a=1, b=1)
// // --a - --b + ++b + b-- ===> 3 (a=1, b=0)
// console.log(`${a}, ${b}, ${result}`);

//.11
// var city = prompt('Enter City Name', 'Karachi');
// if(city.toLowerCase() == 'karachi') {
//     console.log('Welcome to the City of lights');
// }else if(city.toLowerCase() == 'lahore') {
//     console.log('Welcome to the historical city');
// }else if(city.toLowerCase() == 'quetta') {
//     console.log('Welcome to the cold city');
// }else{
//     console.log('sorry wrong answer');
// }

// .12
// var num1 = +prompt('Enter your first number');
// var op = prompt('Enter your operation', '+, -, *, /, %' );
// var num2 = +prompt('Enter your second number');
// var res;
// if (op == '+')
// {
//     res = num1 + num2;
//     alert(num1 + op + num2 + "=" + res);
// }
// else if (op == '-')
// {
//     res = num1 - num2;
//     alert(num1 + op + num2 + "=" + res);
// }
// else if (op == '*')
// {
//     res = num1 * num2;
//     alert(num1 + op + num2 + "=" + res);
// }
// else if (op == '/')
// {
//     res = num1 / num2;
//     alert(num1 + op + num2 + "=" + res);
// }
// else if (op == '%')
// {
//     res = num1 % num2;
//     alert(num1 + op + num2 + "=" + res);
// }
// else 
//     alert("Invalid operation");

//.13
// var userSalary = +prompt('Enter Salary',50000);
// if(userSalary < 60000) {
//     console.log('you are a junior developer');
// }
// else if((userSalary >= 60000) && (userSalary < 100000)) {
//     console.log('you are a web developer');
// }
// else if(userSalary >= 100000) {
//     console.log('you are a software engineer');
// }else{
//     console.log('you are not a developer');
// }

