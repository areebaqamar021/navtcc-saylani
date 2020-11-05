// var arr = [1,2];
// var arr2 = [1,2];
// var newArr = arr.concat(arr2);// 1,2,1,2
// var students = ['I', 'am', 'a', 'student'];
// var newStr = students.join(" ");

// console.log(newStr);

// var num = 25;
// var strNum = num.toString();

// console.log(strNum);

// var students = ['ruhama', 'asma', 'madiha', 'seema','batool'];
// console.log(students.sort());

// students.reverse();
// console.log(students);

// var numbers = [25,30,3,6,11,5];
// // console.log(numbers.sort());

// numbers.sort(mySort);
// console.log(numbers);
// function mySort(a,b) {
//     return a-b
// }

// numbers.reverse();
// console.log(numbers);

// var input = prompt("Enter your input");
// console.log(input);

// for(var i=0; i >=2; i++){
//     console.log(input[i]);
// }

// var numbers = [25,30,3,6,11,5];
// var newArr =[];
// function double(num){
//     for(var i=0; i<num.length; i++){
//         newArr.push(num[i]*2)  
//     }
// }

// function double2(numbers){
//     numbers.forEach(function(element) {
//         newArr.push(element*2);
//     });

// var str = "areeba qamar zaman"
//  var newstr
//  function titlecase(str1){
//      var st2 = str1.split(" ")
//      for(var i =0; i<st2.length;i++) {
//         st2[i] = st2[i][0].toUpperCase()+ st2[i].slice(1)
//      }
//      st2 =st2.join(" ")
//      console.log(st2)
//      return st2
//       }
// var newstr = titlecase(str)
// console.log(newstr);

// var word = 'areeba';
//  var count = 0;
//  const vowels = ["a", "e", "i", "o", "u","a"]
//  console.log(vowels.indexOf('e'));

//  function calcuateVowel(aw){
//     var newWord = aw.split('')
//     console.log(newWord)
//     for(let i = 0; i < newWord.length; i++) {
//         // if(newWord[i] == "a"  || newWord[i] == "e"|| newWord[i] == "i" || 
//         // newWord[i] == "o" || newWord[i] == "u") {
//         //     count++;
//         }
//       if(vowels.indexOf(newWord[i]) > -1) {
//           count++
//       }
//     //    if (vowels.includes(newWord[i])) {
//     //        count++;
//     //    }
        
//     }
// calcuateVowel(word)
// console.log(`you have ${count} vowels`);


// }
// double2(numbers);
// console.log(newArr);

// double(numbers);
// console.log(newArr);

// var fruits = ['apple', 'mango', 'banana'];
// fruits.forEach(function(item){
//     console.log(item + ' ' + 'This is Fruits')
// })

// var arr = [2,5]
// var newar =[]
// function fe(arr) {
//     arr.forEach(e => {
//             newar.push( e*e)
//             console.log("fe -> newar", newar)
//     }); 
// }
// fe(arr)
// console.log("fe -> newar", newar)

// var city = prompt("Enter your City Name");
// var firstChar = city.slice(0,1);
// firstChar = firstChar.toUpperCase();
// var otherChar = city.slice(1);
// otherChar = otherChar.toLowerCase();

// var city = firstChar + otherChar;
// console.log(city);

// var str = 'areeba';
// var newStr;
// function titlecase(str){
//     newStr = str[0].toUpperCase() + str.slice(1);
// }
// titlecase(str);
// console.log(newStr);

// function titleCase(str) {
//     var splitStr = str.toLowerCase().split(' ');
//     for (var i = 0; i < splitStr.length; i++) {
//         // You do not need to check if i is larger than splitStr length, as your for does that for you
//         // Assign it back to the array
//         splitStr[i] = splitStr[i].charAt(0).toUpperCase() + splitStr[i].substring(1);     
//     }
//     // Directly return the joined string
//     return splitStr.join(' '); 
//  }
 
//  document.write(titleCase("I'm a little tea pot"));
// var str="areeba qamar";
// function titleCase(str){
//     var splitStr = str.split(' ');
//     for (var i = 0; i < splitStr.length; i++) {
//         splitStr[i] = splitStr[i][0].toUpperCase() + splitStr[i].substring(1);     
//     }
//     // return splitStr; 
//     return splitStr.join(' ');
//  }
// console.log(titleCase( str));


  