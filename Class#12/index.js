// function grabPara(){
//     var x = document.getElementById('para');
//     console.log(x.className); 
//     x.className = 'invisible';
    
// }

// function alter() {
//     console.log(document.childNodes[0].childNodes[1].childNodes[1].childNodes[1].childNodes[0]);
      
//      var x = document.childNodes[0].childNodes[1]
//     .childNodes[1].childNodes[1]
//     console.log(x.nodeType)
//    x.innerHTML = 'sydney'


    // var div = document.getElementById('city')
      // var x = div.getElementsByTagName('p');
      // var tochange='kuwait'
      // x[1].innerHTML ='Sydney'
      // // console.log(x)
      // // for (let i = 0; i < x.length; i++) {
      // //     if(x[i].innerHTML == 'Kuwait'){
      // //         x[i].innerHTML='sydney'
  
      // //     }
          
      // //}
 // }

// function replaceCity(){
//     var x =document.getElementById('yewala');
//     x.innerHTML = 'sydney';
// }

// document.addEventListener('contextmenu', event => event.preventDefault());

// var d = document.getElementById("humpty");

// var pCounter = 0;
// for (var i = 0; i < d.childNodes.length; i++) {
// if (d.childNodes[i].nodeType === 1 ) {
// pCounter++;
// }
// if (pCounter === 2) {
// d.childNodes[i].innerHTML = "All his men.";
// break;
//  }
// }

// function func(){
//     var listText = document.getElementById('listitem').value;
//     var li = "<a href='#' class='list-group-item list-group-item-action'>" + listText + "<button type='button' class='close' data-dismiss='alert' aria-label='Close'><span>&times;</span></button></a>";
//     var fulllist = document.getElementById('mylist');
//     fulllist.insertAdjacentHTML('beforeend',li);

//     $('.close').click(function(){
//         $(this).parent().remove();
//     });

//     document.getElementById('listitem').value = "";
//     document.getElementById('listitem').focus();
// }

// function addItem(){
//     var li = document.createElement('li');
//     var textli =document.createTextNode('My name is Hifsa')
//     li.appendChild(textli)
//     var list = document.getElementById('list')
//     list.appendChild(li)
// }

function addPara() {
    var x = document.createElement('p')
    var text = document.createTextNode('new paragraph')
    x.appendChild(text)

    var div = document.getElementById('mydiv');
    //div.appendChild(x)
    div.insertBefore(x,div.firstChild.nextSibling)
    
}