let weather={
    "apiKey":"1e5563354e2e4c2a4656488d59e406fc",
    fetchWeather:function(city){
        fetch(
            "https://api.openweathermap.org/data/2.5/weather?q="
            + city
            + "&units=metric&appid="
            + this.apiKey
        )
        .then((response)=>response.json())
        .then((data)=>this.displayWeather(data));
    },
    displayWeather: function(data){
        const {name}=data;
        const {icon,description}=data.weather[0];
        const {temp, humidity}= data.main;    
        const{speed} = data.wind;
        document.querySelector(".city").innerText = "Weather in " + name;
        document.querySelector(".icon").src = "https://openweathermap.org/img/wn/"+icon+".png"
        document.querySelector(".description").innerText = description;
        document.querySelector(".temp").innerText= temp + "°";
        document.querySelector(".humidity").innerText = "Humidity: " + speed + " %";
        document.querySelector(".wind").innerText = "Wind speed: " + speed + "km/h";
        document.querySelector(".weather").classList.remove("loading");
        document.body.style.backgroundImage="url('https://source.unsplash.com/random/1600x900/?"+ name +"')"
    },
    search: function(){
        this.fetchWeather(document.querySelector(".search-bar").value);
    },
};

//search-bar:

document
    .querySelector(".search button")
    .addEventListener("click", function(){
        weather.search();
});

//For enter key:

document.querySelector(".search-bar").addEventListener("keyup",function(event){
    if(event.key == "Enter"){
        weather.search();
    }
})

weather.fetchWeather("Delhi");