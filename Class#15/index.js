// function findLoc(){
//     window.location.href = 'https://www.facebook.com/';
// }

// var myWindow = window.open();

// var windowContent = "<h1>MY Name Is Areeba</h1>";
// myWindow.document.write(windowContent);

function validateRadios() {
 var radios = document.getElementsByName("r1");
 for (var i = 0; i < radios.length; i++) {
 if (radios[i].checked) {
 return true;
 }
 }
 alert("Please check one.");
    return false;
 }
    

