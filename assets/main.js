
// var weatherIcon = document.querySelector("weatherIcon").scr =" http://openweathermap.org/img/wn/icon@2x.png";
var cityName = document.getElementById('searchArea');
var storeItem = localStorage.getItem("storeItem");

// console.log(cityName);
//    console.log(fetchButtonEl);
// console.log(storeItem);
// var currentHour = (moment().format('k'));
// });

setInterval(() => {
    var time = moment().format('MMMM Do YYYY, h:mm:ss a'); //present time
    $("#courrentHour").text(time)

}, 1000);

// function searchingBtn1() {
//     var para = document.createElement("P");
//     para.innerHTML = "This is a paragraph.";
//     document.getElementById("myDIV").appendChild(para);
//   }


//LOOP trhough stored item in local storage and 
// create buttons

function searchingBtn() {
    var input = document.getElementById("searchArea").value;
    
    var para = document.createElement("BUTTON");
     document.getElementById("searchHistory").appendChild(para)
    para.innerHTML = input;
    var x = localStorage.setItem('saved', input)
    var y = localStorage.getItem("s" );
    
   para.addEventListener("click", me =>{ 
       if(x)
       para.textContent = y;
    getApi(input);
    
    // var savedInput = () =>{
        
    //    para.addEventListener("click", savedInput)
    //     var y = localStorage.getItem("save" );
    //     if(y){
    //         console.log()
    //     };
    //     }
 console.log();
});
  

   

    // console.log(input);
    // localStorage.setItem("storeItem", input) create 
    //create an empty array variable
    var emptyArray = [];
   var filledArray = emptyArray.push(input);
//    console.log (filledArray)

 // push input to the array
 //stringfy the array
 //set the array to the local storage
    localStorage.getItem("storeItem", input)
    document.getElementById("searchArea").value = input;
    // console.log("here")

    getApi(input)
};


// document.addEventListener("click", function(){
//     var Button = document.querySelectorAll("BUTTON");
// console.log("history button")


// });

function getTextValue() {
    $(".search").append("input");
    localStorage.getItem("storeItem");
    localStorage.setItem("storeItem");
    document.getElementById("searchArea").innerHTML = storeItem + " " + input;
}

var weather = {
    "key": 'ffb1f81a0f40a4da0ddb506ba11d89ce'
};


function getApi(arg) {
    // console.log(arg)
    var requestUrl = 'https://api.openweathermap.org/data/2.5/forecast?q=' + arg + '&units=imperial&appid=ffb1f81a0f40a4da0ddb506ba11d89ce'
    // var icon = " http://openweathermap.org/img/wn/10@2x.png";
    //  $(".weatherIcon").text(data.list[0].weather.weatherIcon);//date and time
    fetch(requestUrl)
        .then(function (response) {
            return response.json();
        })
        .then(function (data) {
            //Using console.log to examine the data
            // console.log(data);

            $("#fiveDaysForecast").text("Five Days Forecast");
            $("#description0").text(data.list[0].weather[0].description);
            // console.log(data.list[0].weather[0].description)
            $("#weatherIcon0").attr("src", `http://openweathermap.org/img/wn/${data.list[0].weather[0].icon}@2x.png`)
            // console.log(" http://openweathermap.org/img/wn/" +(data.list[0].weather[0].icon) + "@2x.png")
            //  $("#weatherIcon0").text(data.list[0].weather[0].icon);
            $("#time").text("Date: " + data.list[0].dt_txt);//date and time
            $("#cityName").text("The Weather in " + data.city.name + " is :" ); 
            $("#tempName").text("Temperature: " + data.list[0].main.temp + " degrees.");// temperature
            $("#humidityName").text("Humidity: " + data.list[0].main.humidity);// humidity
            $("#windSpeed").text("Wind Speed: " + data.list[0].wind.speed); // wind

            $("#description1").text(" The weather for this day has: "+ data.list[0].weather[0].description);
            $("#weatherIcon1").attr("src", `http://openweathermap.org/img/wn/${data.list[0].weather[0].icon}@2x.png`)
            $("#time1").text("Date: " + data.list[0].dt_txt);//date and time
            // $("#cityName1").text("The Weather in "  + data.city.name + " is:"); // name of the city
            $("#tempName1").text("Temperature: " + data.list[0].main.temp + " deg.");// temperature
            $("#humidityName1").text("Humidity: " + data.list[0].main.humidity);// humidity
            $("#windSpeed1").text("Wind Speed: " + data.list[0].wind.speed); // wind
            // $(".weatherCard").text()
            $("#description2").text(" The weather for this day has: "+ data.list[8].weather[0].description);
            $("#weatherIcon2").attr("src", `http://openweathermap.org/img/wn/${data.list[8].weather[0].icon}@2x.png`)
            $("#time2").text("Date: " + data.list[8].dt_txt);//date and time
            // $("#cityName2").text("The Weather in:  "  + data.city.name); // name of the city
            $("#tempName2").text("Temperature: " + data.list[8].main.temp + " deg.");// temperature
            $("#humidityName2").text("Humidity: " + data.list[8].main.humidity);// humidity
            $("#windSpeed2").text("Wind Speed: " + data.list[8].wind.speed); // wind
            // $(".weatherCard2").text()
            $("#description3").text(" The weather for this day has: "+ data.list[16].weather[0].description);
            $("#weatherIcon3").attr("src", `http://openweathermap.org/img/wn/${data.list[16].weather[0].icon}@2x.png`)
            $("#time3").text("Date: " + data.list[16].dt_txt);//date and time
            // $("#cityName3").text("The Weather in:  "  + data.city.name); // name of the city
            $("#tempName3").text("Temperature: " + data.list[16].main.temp + " deg.");// temperature
            $("#humidityName3").text("Humidity: " + data.list[16].main.humidity);// humidity
            $("#windSpeed3").text("Wind Speed: " + data.list[16].wind.speed); // wind
            // $(".weatherCard").text()
            $("#description4").text(" The weather for this day has: "+ data.list[24].weather[0].description);
            $("#weatherIcon4").attr("src", `http://openweathermap.org/img/wn/${data.list[24].weather[0].icon}@2x.png`)
            $("#time4").text("Date: " + data.list[24].dt_txt);//date and time
            // $("#cityName4").text("The Weather in:  "  + data.city.name); // name of the city
            $("#tempName4").text("Temperature: " + data.list[24].main.temp + " deg.");// temperature
            $("#humidityName4").text("Humidity: " + data.list[24].main.humidity);// humidity
            $("#windSpeed4").text("Wind Speed: " + data.list[24].wind.speed); // wind
            // $(".weatherCard").text()
            $("#description5").text(" The weather for this day has: "+ data.list[32].weather[0].description);
            $("#weatherIcon5").attr("src", `http://openweathermap.org/img/wn/${data.list[32].weather[0].icon}@2x.png`)
            $("#time5").text("Date: " + data.list[32].dt_txt);//date and time
            // $("#cityName5").text("The Weather in:  "  + data.city.name); // name of the city
            $("#tempName5").text("Temperature: " + data.list[32].main.temp + " deg.");// temperature
            $("#humidityName5").text("Humidity: " + data.list[32].main.humidity);// humidity
            $("#windSpeed5").text("Wind Speed: " + data.list[32].wind.speed); // wind
            // $(".weatherCard").text()
            // $("#tempName").text(data.list[0].main.temp)

            // console.log(data.list[0].main.temp);
            // console.log(data.list[0].dt_txt);
            // console.log(data.city.name);
            // // console.log(data.list[0].weather[0].icon);
            // console.log(data.list[0].main.humidity);



            // for (var i = 0; i < data.length; i++) {
            //     //Creating a h3 element and a p element
            //     var cityName = document.createElement('h2');
            //     console.log(cityName);

            //     //Setting the text of the h3 element and p element.
            //     userName.textContent = data[i].login;


            //     //Appending the dynamically generated html to the div associated with the id="users"
            //     //Append will attach the element as the bottom most child.
            //     usersContainer.append(userName);

            // }
        });
};
