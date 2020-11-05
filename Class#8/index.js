// var str = "the quick brown fox jumps over the lazy dog";
// console.log(str.indexOf('quick'));
// console.log(str.lastIndexOf('quick'));
// console.log(str.charAt(2));

// var sliceToReplace = str.slice(0,19);
// var replaceStr = "the white cat";
// var newStr = replaceStr + str.slice(19);
// console.log(newStr);

//.16
// var start = str.indexOf('the quick brown fox');
// var replace = 'the quick brown fox';
// var end = start + replace.length;
// var newText = str.slice(0, start) + replaceStr + str.slice(end);
// console.log(newText);

// str = str.replace(/the quick brown fox/g, 'the white cat');
// console.log(str);

//.14
// var find = "!";
// var str = "Hello World!";
// var res = str.indexOf('!');
// if(res !== -1) {
//     console.log(`! found at address ${res}`);
// }

//.15
// var str = "Karac  hi";
// var numChars = str.length;
// for (var i = 0; i < numChars; i++) {
//     if (str.slice(i, i + 2) === "  ") {
//        alert("Double spaces are found!");
//         break;
//     }
// }

// var phrase= "my test is  double space"
// var find = '  ';
// for (let i = 0; i < phrase.length; i++) {
//     if(phrase.slice(i, i+2) == "  "){
//         console.log('yes double space found')
//         break
//     }
// }

// var str = prompt("Enter some text");
// var numChars = str.length;
// for (var i = 0; i < numChars; i++) {
//     if (str.slice(i, i + 2) === "  ") {
//        alert("Double spaces are found!");
//         break;
//     }
// }

// var input = prompt('enter your num');
// console.log(typeof input);
//  var result = parseInt(input) + 22;
//  console.log("result", result);

//.18
//  function roundOf(num, num1){
//      var num = num.toFixed(num1);
//      console.log(num);
//  }
// roundOf(4.80954758769, 4);
// roundOf(4.80954758769, 3);
// roundOf(4.80954758769, 2);
