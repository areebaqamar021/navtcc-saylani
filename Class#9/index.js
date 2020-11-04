// console.log(Math.random());

// var arr = ['Saturday','Sunday','Monday','tuesday','wednesday','thursday','friday'];
// var range = Math.ceil(Math.random(arr) * 7);
// console.log(range);

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

// var currentdate = new Date();
// var datetime = currentdate.getDay() + "/" + currentdate.getMonth() 
// + "/" + currentdate.getFullYear() + "  " 
// + currentdate.getHours() + ":" 
// + currentdate.getMinutes() + ":" + currentdate.getSeconds();
// console.log(datetime);

var nowDate = new Date();
function formateDate(nowDate){
    var formate = nowDate.getDay() + "/" +nowDate.getMonth() 
    + "/" + nowDate.getFullYear();
    console.log(formate);
}
formateDate(nowDate);



