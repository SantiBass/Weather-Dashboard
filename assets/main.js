var cityHistory = JSON.parse(localStorage.getItem("history")) || [];
localStorage.getItem(cityHistory)
console.log(cityHistory);
// var weatherIcon = document.querySelector("weatherIcon").scr =" http://openweathermap.org/img/wn/icon@2x.png";
var cityName = document.getElementById('searchArea');
var storeItem = localStorage.getItem("storeItem");
var day1 = moment().format("MM-DD-YYYY");
var day2 = moment().add(1, 'days').format("MM-DD-YYYY");
var day3 = moment().add(2, 'days').format("MM-DD-YYYY");
var day4 = moment().add(3, 'days').format("MM-DD-YYYY");
var day5 = moment().add(4, 'days').format("MM-DD-YYYY");
var day6 = moment().add(5, 'days').format("MM-DD-YYYY");
var searchCities = document.getElementById("searchArea").value;
// console.log(searchCities);
//    console.log(fetchButtonEl);
// console.log(storeItem);
// var currentHour = (moment().format('k'));
// });
// this function updates the current time every second.
setInterval(() => {
    var time = moment().format('MMMM Do YYYY, h:mm:ss a'); //present time
    $("#courrentHour").text(time)

}, 1000);

function history() {
    var input = document.getElementById("searchArea").value;
    for (var i=0; i < cityHistory.length; i++){

        var para = document.createElement("BUTTON");
         document.getElementById("searchHistory").appendChild(para)

        para.innerHTML = cityHistory[i];
        // history() 
      para.addEventListener("click", ()=>{
          localStorage.setItem(cityHistory);
//   console.log(cityHistory);
  getApi(input);

       });
     
    }

  }

  history();


//searchingBtn() function allows the user to input a City in the search box and click the search button.
//When the "Search" button is clicked, it will display the searched city as a button on the 
//left column. If the new button on the left is clicked it will show its info again on the main panel.
function searchingBtn() {
    var input = document.getElementById("searchArea").value;

    var para = document.createElement("BUTTON");
    
     document.getElementById("searchHistory").appendChild(para)
    para.innerHTML = input;
    var searchedCity = localStorage.setItem('searchedCity', input)
    localStorage.setItem('searchedCity',input)
    localStorage.getItem(input)
    cityHistory.push(input)
    // console.log(cityHistory)
    
    localStorage.setItem('history', JSON.stringify(cityHistory))
    
// console.log(cityHistory)

    // localStorage.setItem('history', JSON.stringify(cityHistory))
    var y = localStorage.getItem("searchedCity" );
    // console.log(y)
   para.addEventListener("click", me =>{ 
       if(searchedCity);{
       para.textContent = y;
    getApi(input);}
    // console.log(para.textContent); 
});
    localStorage.getItem("storeItem", input)
    document.getElementById("searchArea").value = input;
    // console.log("here")

    getApi( document.getElementById("searchArea").value)
};

//
// function getTextValue() {
//     $(".search").append("input");
//     localStorage.getItem("storeItem");
//     localStorage.setItem("storeItem");
//     document.getElementById("searchArea").innerHTML = storeItem + " " + input;

// }

var weather = {
    "key": 'ffb1f81a0f40a4da0ddb506ba11d89ce'
};

// this function generate the data from the input box after the search button is clicked.
//Also, it uses the API of the weatherapp website.

function getApi(arg) { 

    // console.log(arg)
    var uvValue = ' https://api.openweathermap.org/data/2.5/onecall?lat=41.42226&lon=122.3861&exclude=hourly,daily&appid=ffb1f81a0f40a4da0ddb506ba11d89ce'
    var requestUrl = 'https://api.openweathermap.org/data/2.5/forecast?q=' + arg + '&units=imperial&appid=ffb1f81a0f40a4da0ddb506ba11d89ce'
    // var icon = " http://openweathermap.org/img/wn/10@2x.png";
    //  $(".weatherIcon").text(data.list[0].weather.weatherIcon);//date and time
    // var uv = ' https://api.openweathermap.org/data/2.5/onecall?lat=33.44&lon=-94.04&exclude=hourly,daily&appid=ffb1f81a0f40a4da0ddb506ba11d89ce'
   
    
    fetch(requestUrl)
        .then(function (response) {
            return response.json();
        })
        .then(function (data) {
            //Using console.log to examine the data
            // console.log(data);
            var latitude = data.city.coord.lat;
            var longitude = data.city.coord.lon;
            console.log(latitude);
            console.log(longitude);
         fetch( uvValue)
            .then(function(response) { 
                console.log( 'uvValue' + response)
              return response.json();
             })
             .then(function(uvValue) {
             var currentUV = uvValue.current.uv; 
        //       var dailyForecastUV = grab from dataTwo
            })
     
            $("#uv").text("The uv is");


            $("#fiveDaysForecast").text("Five Days Forecast");
            $("#description0").text(data.list[0].weather[0].description);
            // console.log(data.list[0].weather[0].description)
            $("#weatherIcon0").attr("src", `http://openweathermap.org/img/wn/${data.list[0].weather[0].icon}@2x.png`)
            // console.log(" http://openweathermap.org/img/wn/" +(data.list[0].weather[0].icon) + "@2x.png")
            //  $("#weatherIcon0").text(data.list[0].weather[0].icon);
            $("#time").text("Date: " + day1);//date and time
            $("#cityName").text("The Weather in " + data.city.name + " is :" ); 
            $("#tempName").text("Temperature: " + data.list[0].main.temp + " degrees.");// temperature
            $("#humidityName").text("Humidity: " + data.list[0].main.humidity);// humidity
            $("#windSpeed").text("Wind Speed: " + data.list[0].wind.speed); // wind

            $("#description1").text(" The weather for this day has: "+ data.list[0].weather[0].description);
            $("#weatherIcon1").attr("src", `http://openweathermap.org/img/wn/${data.list[0].weather[0].icon}@2x.png`)
            $("#time1").text("Date: " + day2);//date and time
            // $("#cityName1").text("The Weather in "  + data.city.name + " is:"); // name of the city
            $("#tempName1").text("Temperature: " + data.list[0].main.temp + " deg.");// temperature
            $("#humidityName1").text("Humidity: " + data.list[0].main.humidity);// humidity
            $("#windSpeed1").text("Wind Speed: " + data.list[0].wind.speed); // wind
            // $(".weatherCard").text()
            
            $("#description2").text(" The weather for this day has: "+ data.list[8].weather[0].description);
            $("#weatherIcon2").attr("src", `http://openweathermap.org/img/wn/${data.list[8].weather[0].icon}@2x.png`)
            $("#time2").text("Date: " + day3);//date and time
            // $("#cityName2").text("The Weather in:  "  + data.city.name); // name of the city
            $("#tempName2").text("Temperature: " + data.list[8].main.temp + " deg.");// temperature
            $("#humidityName2").text("Humidity: " + data.list[8].main.humidity);// humidity
            $("#windSpeed2").text("Wind Speed: " + data.list[8].wind.speed); // wind
            // $(".weatherCard2").text()
            
            $("#description3").text(" The weather for this day has: "+ data.list[16].weather[0].description);
            $("#weatherIcon3").attr("src", `http://openweathermap.org/img/wn/${data.list[16].weather[0].icon}@2x.png`)
            $("#time3").text("Date: " + day4);//date and time
            // $("#cityName3").text("The Weather in:  "  + data.city.name); // name of the city
            $("#tempName3").text("Temperature: " + data.list[16].main.temp + " deg.");// temperature
            $("#humidityName3").text("Humidity: " + data.list[16].main.humidity);// humidity
            $("#windSpeed3").text("Wind Speed: " + data.list[16].wind.speed); // wind
            // $(".weatherCard").text()
            $("#description4").text(" The weather for this day has: "+ data.list[24].weather[0].description);
            $("#weatherIcon4").attr("src", `http://openweathermap.org/img/wn/${data.list[24].weather[0].icon}@2x.png`)
            $("#time4").text("Date: " + day5);//date and time
            // $("#cityName4").text("The Weather in:  "  + data.city.name); // name of the city
            $("#tempName4").text("Temperature: " + data.list[24].main.temp + " deg.");// temperature
            $("#humidityName4").text("Humidity: " + data.list[24].main.humidity);// humidity
            $("#windSpeed4").text("Wind Speed: " + data.list[24].wind.speed); // wind
            // $(".weatherCard").text()
            $("#description5").text(" The weather for this day has: "+ data.list[32].weather[0].description);
            $("#weatherIcon5").attr("src", `http://openweathermap.org/img/wn/${data.list[32].weather[0].icon}@2x.png`)
            $("#time5").text("Date: " + day6);//date and time
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
