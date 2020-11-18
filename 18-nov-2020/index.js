// var arr = ['areeba', 'habiba', 'afifa'];
// var arr1 = ['hifsa','komal', 'aiman'];
// var arr3 = [...arr, ...arr1];
// console.log("arr3", arr3);
// function sum(a,b,c,x,y,z){
//     return a+b+c+x+y+z;
// }

// var addNum = [2,6,7,8,9,4];
// var res = sum(...addNum);
// console.log(res);

let subt = (a,...b) =>{
    console.log(a)
    console.log(b)
    var res1 = b.reduce((item,index)=>{
        return item + index
    })
    res1 = a - res1;
    console.log(res1)
    return res1
}
var res = subt(245,45,67,34,90,76,34);