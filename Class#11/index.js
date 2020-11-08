function displayDate() {
    var date = new Date();
    console.log(`${date}`);
}

var num = 0;
function count(){
    num++;
    console.log(`you clicked ${num} times`);
}

console.log(document.getElementById("myh2").innerHTML);

function doo(){
    var x = document.getElementById('para');
    var text = x.innerHTML;
    x.className = 'heading1';
    console.log(x.tagName);
}

function check(e) {
    e.preventDefault();
    console.log('form submitted');
    var x = document.getElementById('email');
    if(x.value==''){
        alert('please enter your email');
    }
}

function check2() {
    var country = document.getElementById('country')
    var city = document.getElementById('city')
    if(country.value == 'Pakistan'){
        city.value = 'Karachi'

    } else if(country.value == 'USA'){
        city.value = 'NewYork'

    }
}