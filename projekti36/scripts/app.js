const cityForm = document.querySelector("form");

const card = document.querySelector(".card");

const details = document.querySelector(".details");

const time = document.querySelector("img.time");

const icon = document.querySelector(".icon img");

const city = localStorage.getItem("city");

const forecast = new Forecast();

//

const updateUI = (data) => {

const { cityDets, weather } = data;

// update details template
details.innerHTML = `
<h5 class="my-3">${cityDets.EnglishName}</h5>
            <div class="my-3">${weather.WeatherText}</div>
            <div class="display-4 my-4">
              <span>${weather.Temperature.Metric.Value}</span>
              <span>&deg;C</span>
            </div>
`;

//update the night and day icon images
const iconSrc = `img/icons/${weather.WeatherIcon}.svg`;
icon.setAttribute("src", iconSrc);

let timeSrc = weather.IsDayTime ? "img/day.svg" : "img/night.svg";
time.setAttribute("src", timeSrc);

//remove the d-none class if present
if(card.classList.contains("d-none")){
    card.classList.remove("d-none");
}

};

//OLD WAY OF DOING THINGS

//update city
/* const updateCity = async (city) => {

    const cityDets = await getCity(city);
    const weather = await getWeather(cityDets.Key);

    return {
       cityDets,
       weather
    };

}; */

cityForm.addEventListener("submit", e => {

    //prevent default
    e.preventDefault();

    //get city value
    localStorage.setItem("city", cityForm.city.value.trim());
    const city = localStorage.getItem("city");

    cityForm.reset();

    //update city ui with new city
    forecast.updateCity(city)
    .then(data => updateUI(data))
    .catch(err => console.log(err));


});

//open page with last city searched (from local storage)
if(city) {

    forecast.updateCity(city)
    .then(data => updateUI(data))
    .catch(err => console.log(err));

}
