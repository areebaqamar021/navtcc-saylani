// var obj = {name:'areeba',status: 'sleepy',age: 18}
// let{name,status,age} = obj;
// console.log(name,status,age);

// function addalert(){
//     console.log('Hello Good Morning');
// }

// try {
//     addalert();
// }
// catch(error) {
//     console.log(error)
// }

// function timer(){
//         console.log("running...")
//     }
// setInterval(timer,2000);

// function timeOut(){
//         console.log("running...")
//     }
// setTimeout(timeOut,3000);

let on = () => {
    setInterval(displayDate,1000)
}
let displayDate = () => {
        var x = new Date();
        var x1=x.getMonth() + 1+ "/" + x.getDate() + "/" + x.getFullYear(); 
        x1 = x1 + " - " +  x.getHours( )+ ":" +  x.getMinutes() + ":" +  x.getSeconds();
        document.getElementById('ct').innerHTML = x1;
}

// let click1 = () => {
//     setInterval(displayalert,1000);
// }
// let a = 0;
// let displayalert = () => {
//     a++;
//     document.getElementById('calll').innerHTML = a;
// }


    
