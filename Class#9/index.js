// console.log(Math.random());

//.19
// var arr = ['Saturday','Sunday','Monday','tuesday','wednesday','thursday','friday'];
// var range = Math.ceil(Math.random(arr) * 7);
// console.log(range);

// // nested loops
// var names = ['shehla', 'seema','areeba','kulsoom','asma','madiha'];
// var degree = ['matric','inter', 'graduation']
// for (let i = 0; i < names.length; i++) {
//     for (let j = 0; j < degree.length; j++) {
//         console.log(element = names[i] + ' '+degree[j])
        
//     }
//     //const element = array[i];
// }

//  var future = new Date()
//   future.setDate(3)
//   var dob =  new Date();
//   dob.setFullYear(1993)
//   console.log("future", dob);

// var birthDate = new Date('Nov 12, 2002');
// var present = new Date();
// var final = present.getTime() - birthDate.getTime();
// final = final / (1000*60*60*24);
// console.log(final);

// var today = new Date('Nov 5, 20 10:37:44');
// var present = new Date();
// var final =   today.getTime()-present.getTime();
// final = final / (1000*60*60);
// console.log(final);

// var now = new Date();
// function formatDate(date){
//     var format = date.getFullYear() + '-' + (date.getMonth()+1) + '-' + date.getDate()
//     console.log(format)

// }
// formatDate(now);

// function sum(a,b=0){
//     var c = a+b;
//     console.log(c)
//  }
//  sum(2)(3)

var arr1 = "john".split(''); // [j o h n] 4
var arr2 = arr1.reverse(); //[n  h  o j]
console.log("arr2", arr2)
var arr3 = "jones".split(''); //[j o n e s]
arr2.push(arr3); // [n  h  o j  [j o n e s]]
console.log("array 1: length=" + arr1.length + " last=" + arr1.slice(-1));
console.log("array 2: length=" + arr2.length + " last=" + arr2.slice(-1));

 var names = ['shehla', 'seema','areeba','kulsoom','asma','madiha','xyz'];


console.log("names", names.slice(3));

// var currentdate = new Date();
// var datetime = currentdate.getDay() + "/" + currentdate.getMonth() 
// + "/" + currentdate.getFullYear() + "  " 
// + currentdate.getHours() + ":" 
// + currentdate.getMinutes() + ":" + currentdate.getSeconds();
// console.log(datetime);

// var nowDate = new Date();
// function formateDate(nowDate){
//     var formate = nowDate.getDay() + "/" +nowDate.getMonth() 
//     + "/" + nowDate.getFullYear();
//     console.log(formate);
// }
// formateDate(nowDate);



