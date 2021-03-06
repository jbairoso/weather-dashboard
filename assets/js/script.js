var apiKey="7470d46a77a0b0af6ad44ad95ad11c2e"
let city=$("#searchTerm").val();
let date=new Date();


$("#searchTerm").keypress(function(event){
    if (event.keyCode===13){
        event.preventDefault();
        $("#searchBtn").click();
    }
});

$("searchBtn").on("click",function(){
    $('#forecastCards').addClass('show');
    city= $("#searchTerm").val();

    $("#searchTerm").val("");

    var queryUrl="https://api.openweathermap.org/data/2.5/weather?q=" + city + apiKey;

    $a.jax({
        url:queryUrl,
        method:"GET"
    })
    .then(function(response){

    getCurrentConditions(response);
    getCurrentForecast(response);
    makeList();
    })
});

function makeList() {
    let listItem = $("<li>").addClass("list-group-item").text(city);
    $(".list").append(listItem);
}

function getCurrentConditions(response){

    let currentTemp=(response.main.temp-273.15)*1.80+32;
    currentTemp=Math.floor(currentTemp);

    $('currentCity').empty();

    var card=$("<div>").addClass();
    var cardContent=$("<div").addClass("card-content");
    var cityDate = $("<h4>").addClass("card-title").text(date.toLocaleDateString('en-US'));
    var city=$("<h3>").addClass("card-title").text(response.name);
    var temperature = $("<p>").addClass("card-text current-temp").text("Temperature: " + tempF + " °F");
    var humidity = $("<p>").addClass("card-text current-humidity").text("Humidity: " + response.main.humidity + "%");
    var wind = $("<p>").addClass("card-text current-wind").text("Wind Speed: " + response.wind.speed + " MPH");
    var image = $("<img>").attr("src", "https://openweathermap.org/img/w/" + response.weather[0].icon + ".png");

    city.append(cityDate, image);
    card.append(cardContent);
    cardContent.append(city,temperature,humidity,wind);
    $("#currentCity").append(card)
}

function getCurrentForecast(){

    $.jax({
     url: "https://api.openweathermap.org/data/2.5/forecast?q=" + city + apiKey,
     method: "GET"
  }).then(function (response){

    $('#forecast').empty();

    let results=response.list;
    console.log(results)

 for (let i=0;i<results.length;i++){
    if(results[i].dt_txt.indexOf("12:00:00") !== -1){

    let temp = (results[i].main.temp - 273.15) * 1.80 + 32;
    let tempF = Math.floor(temp);
    var card = $("<div>").addClass("card col-md-2 ml-4 bg-primary text-white");
    var cardBody = $("<div>").addClass("card-body p-3 forecastBody")
    var cityDate = $("<h4>").addClass("card-title").text(date.toLocaleDateString('en-US'));
    var temperature = $("<p>").addClass("card-text forecastTemp").text("Temperature: " + tempF + " °F");
    var humidity = $("<p>").addClass("card-text forecastHumidity").text("Humidity: " + results[i].main.humidity + "%");
    var image = $("<img>").attr("src", "https://openweathermap.org/img/w/" + results[i].weather[0].icon + ".png")


    cardBody.append(cityDate, image, temperature, humidity);
    card.append(cardBody);
    $("#forecast").append(card);
   }
  }
 });
}