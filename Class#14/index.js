// /// var obj = {
//  //   meals: [{}, {}, {}]
// //}
// var btn = document.getElementById('button-addon2')
// var btn1 = document.getElementById('button1')

function searchRecipe(){
    var search  =  document.getElementById('search');
    console.log(search.value) 
    var api2 = `https://www.themealdb.com/api/json/v1/1/search.php?s=${search.value}`
    console.log(api2)
    /// api call
    fetch(api2) // Call the fetch function passing the url of the API as a parameter
    .then(res => res.json())
    .then(function(data) {
        // Your code for handling the data you get from the API
        console.log(data.meals)
        const recipesArr = data.meals;
        var row  =  document.getElementById('row');
        for(let i = 0; i< recipesArr.length; i++){
            var div = document.createElement('div')
        var div2= document.createElement('div')
            var div3= document.createElement('div')
            var img = document.createElement("img");
            div.className = 'box';
            div2.className = 'box2';
      
        img.setAttribute("src",recipesArr[i].strMealThumb);
        div3.appendChild(img);
        
        var text = document.createTextNode(recipesArr[i].strMeal);
        div2.appendChild(text)
        div.appendChild(div3)
      div.appendChild(div2)
        row.appendChild(div)
        }
    })
    .catch(function(error) {
        // This is where you run code if the server returns any errors
        console.log(error)
    });
    search.value = '';
    }

    function searchRandom() {
        var api = 'https://www.themealdb.com/api/json/v1/1/random.php';
        fetch(api)
        .then(res => res.json())
        .then(data => {
            var row2 = document.getElementById('recipeBox')
            row2.innerHTML = '';
            console.log(data)
            var singleRecipe = data.meals
            for(var i =0; i<singleRecipe.length;i++){
             var row = document.getElementById('row');
             var divhea =document.createElement('h4');
           
             var content = document.createElement('div');
             var textcontent = document.createTextNode(singleRecipe[i].strInstructions)
             content.appendChild(textcontent)

             var text = document.createTextNode(singleRecipe[i].strMeal)
             content.className="text";
             divhea.className="heading";
             divhea.appendChild(text)
           
         
             // image   
             var divimg = document.createElement('div')
           
             var img = document.createElement('img')
             img.setAttribute('src',singleRecipe[i].strMealThumb)
             img.className = 'myImg';
             divimg.appendChild(img)
             
             divimg.appendChild(divhea);

            // divimg.appendChild(text) 
             row.appendChild(divimg)
             row.appendChild(content)     
            }
        })
    }
    btn.addEventListener('click',searchRecipe)
    btn1.addEventListener('click',searchRandom)
    

    
    