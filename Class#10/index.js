// var now = new Date();
// showDate(now);
// function showDate(rightnow) {
//     console.log(`${rightnow.getFullYear()} - ${rightnow.getMonth()+1} - ${rightnow.getDate()}`)
// }

// var myDay = new Date().getDay();
// console.log("myDay", myDay);
// var daysArr = ['sun','mon','tue','wed','thur','fri','sat'];
// var day = daysArr[myDay];
// if(day == 'fri' || day == 'sat' || day == 'sun') {
//     console.log('its a weekend');
// }else{
//     console.log('its a week day');
// }
// switch(day){
//     case 'sun':
//         alert('yahoo! its sunday');
//     case 'sat':
//         alert('yahoo! its saturday');
//     case 'fri':
//         alert('its a friday');
//     default:
//         alert('its a working day');
// }
// var a = 3;
// if(a == 1) {
//     alert('one');
// }else if(a == 2 ) {
//     alert('two');
// }
// else if(a == 3 ) {
//     alert('three');
// }else{
//     alert('number not known');
// }

// var signals = 'yellow';
// switch (signals) {
//     case 'red':
//         alert('stop');
//         break;
//     case 'yellow':
//         alert('ready to go');
//         break;
//     case 'green':
//         alert('Now go');
//     default:
//         alert('nothing');
// }

// function circle(radius)
// {
//     this.radius = radius;
//   // area method
//     this.area = function () 
//     {
//         return Math.PI * this.radius * this.radius;
//     };
//   // perimeter method
//     this.circumference = function ()
//     {
//         return 2*Math.PI*this.radius;
//     };
// }
// var c = new circle(2);
// console.log('Area =', c.area().toFixed(2));
// console.log('circumference =', c.circumference().toFixed(2));

// function calculateCircumference(radius) {
//     return 2 * Math.PI * radius;
//   }
// console.log(calculateCircumference(2).toFixed(2));

// function calculateArea(radius) {
//     return  Math.PI * radius * radius;
//   }
// console.log(calculateArea(2).toFixed(2));
  

// var PI = Math.PI;

// function Circle(radius){
//     this.radius = radius;
// }
// Circle.prototype.circumference = function(){
//     return this.radius * 2 * PI;
// };
// Circle.prototype.area = function(){
//     return this.radius * this.radius * PI;
// };
// var circle2 = new Circle(2);
// console.log(circle2.circumference());
// console.log(circle2.area());

// var num = +prompt('Enter a number');
// var num1 =5;
// var i =5;
// while(i < 10){
// if(num == num1) {
//     console.log('you have won');
// }else{
//     console.log('plzz enter a number');
// }
// }

var ans = 5;
var user = +prompt('enter num',4);

do {
    user = +prompt('enter num', 4);
    if (user == 5){
        console.log('you have won');
    }
}while(user !== ans);