const apiKey = 'db18d878b6016d711ea8ea73ba5635c3';

let btn = document.getElementById("btn");
let search = document.getElementById("search");

search.addEventListener('keydown', function(event) {
    if (event.keyCode === 13) {
      event.preventDefault(); // Prevent form submission (if inside a form)
      btn.click(); // Trigger button click
    }
  });
btn.addEventListener('click', () =>{
    apicall();
});

async function apicall(){

    try {
            console.log(search.value);
        let api = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${search.value}&units=metric&appid=${apiKey}`);
        let responce = await api.json();
        console.log(responce.main.temp);

        if(search.value !== reresponce.name){
            alert("Plz Enter Correct City Name!!!");
        }
    
        let images = document.getElementById("images");
        if(responce.weather[0].main == "Clouds"){
            console.log(responce.weather.main);
            images.src = "./images/clouds.png";
        }else if(responce.weather[0].main == "Clear"){
            images.src = "./images/clear.png";
            console.log(responce.weather.main);
        }else if(responce.weather[0].main == "Drizzle"){
            images.src = "./images/drizzle.png";
            console.log(responce.weather.main);
        }else if(responce.weather[0].main == "mist"){
            images.src = "./images/mist.png";
            console.log(responce.weather.main);
        }else if(responce.weather[0].main == "Rain"){
            images.src = "./images/rain.png";
            console.log(responce.weather.main);
        }else if(responce.weather[0].main == "Snow"){
            images.src = "./images/snow.png";
            console.log(responce.weather.main);
        }else if(responce.weather[0].main == "Haze"){
            images.src = "./images/haze1.png";
            console.log(responce.weather.main);
        }else if(responce.weather[0].main == "Smoke"){
            images.src = "./images/smoke.png";
            console.log(responce.weather.main);
        }
        
        let name = document.getElementById("name");
        name.innerHTML = responce.name;
        let temprature = document.getElementById("temp");
        temprature.innerHTML = responce.main.temp +" °C";
        let humadity = document.getElementById("humadity");
        humadity.innerHTML = responce.main.humidity + " %";
        let speed = document.getElementById("speed");
        speed.innerHTML = responce.wind.speed + " km/h"

        let sc = document.getElementById("second-part");
        let container = document.getElementById("container");
        sc.style.display = "block";
        container.style.height = "500px";

        search.value = "";
    } catch (error) {
        alert(error);
    }
    
};  
