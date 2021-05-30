import './style.css';

const api_key = process.env.REACT_APP_API_KEY;
const nameCity = document.getElementById("nameCity");
const aqiCity = document.getElementById("aqiCity");
const resultAqiTitle = document.getElementById("resultAqiTitle");
const resultAqiText = document.getElementById("resultAqiText");
const idSearch = document.getElementById("idSearch");

nameCity.innerHTML = "Do you want to know the AQI of another city?";
aqiCity.innerHTML = "Let's go!";

const introSerchAqiCity = `Do you want to know the AQI of your city?<br/><em style="font-size: 15px;">Remember to turn on the location on your device!</em>`;
resultAqiTitle.innerHTML = introSerchAqiCity;

const yourAqiCity = `<button class="youtAqiCityButton" id="aqiYourFinderAqi" type="button">OF COURSE!</button>`;
resultAqiText.innerHTML = yourAqiCity;

document.getElementById("aqiYourFinderAqi").addEventListener("click", myCityAqiFunction);

function myCityAqiFunction() {

    let city = idSearch.value
    let cityURL = `https://api.waqi.info/feed/here/?token=${api_key}`

    fetch(cityURL)
        .then(response => {
                if (response.ok) {
                    return response.json();
                }
        })
        .then(app => {
            nameCity.innerHTML = idSearch.value;
            aqiCity.innerHTML = app.data.aqi;

                var backgroundAqi = aqiCity.innerHTML;

                switch (true) {
                  case backgroundAqi <= 50:
                    document.body.style.backgroundColor = "#009966";
                    document.body.style.color = "#ffffff";
                    resultAqiTitle.innerHTML = "☀️ Good ☀️";
                    resultAqiText.innerHTML = "Air quality is considered satisfactory, and air pollution poses little or no risk.";
                    break;
                  case backgroundAqi <= 100:
                    document.body.style.backgroundColor = "#ffde33";
                    document.body.style.color = "#000000";
                    resultAqiTitle.innerHTML = "☁️ Moderate ☁️";
                    resultAqiText.innerHTML = "Air quality is acceptable; however, for some pollutants there may be a moderate health concern for a very small number of people who are unusually sensitive to air pollution.";
                    break;
                  case backgroundAqi <= 150:
                    document.body.style.backgroundColor = "#ff9933";
                    document.body.style.color = "#000000";
                    resultAqiTitle.innerHTML = "⚠️ Unhealthy for Sensitive Groups ⚠️";
                    resultAqiText.innerHTML = "Members of sensitive groups may experience health effects. The general public is not likely to be affected.";
                    break;
                  case backgroundAqi <= 200:
                    document.body.style.backgroundColor = "#cc0033";
                    document.body.style.color = "#ffffff";
                    resultAqiTitle.innerHTML = "⚠️ Unhealthy ⚠️";
                    resultAqiText.innerHTML = "Everyone may begin to experience health effects; members of sensitive groups may experience more serious health effects.";
                    break;
                  case backgroundAqi <= 300:
                    document.body.style.backgroundColor = "#660099";
                    document.body.style.color = "#ffffff";
                    resultAqiTitle.innerHTML = "⚠️ Very Unhealthy ⚠️";
                    resultAqiText.innerHTML = "Health warnings of emergency conditions. The entire population is more likely to be affected.";
                    break;
                  case backgroundAqi >= 301:
                    document.body.style.backgroundColor = "#7e0023";
                    document.body.style.color = "#ffffff";
                    resultAqiTitle.innerHTML = "⚠️ Hazardous ⚠️";
                    resultAqiText.innerHTML = "Health alert: everyone may experience more serious health effects!";
                    break;
                  case backgroundAqi === "undefined":
                    document.body.style.backgroundColor = "#e8e8e8";
                    document.body.style.color = "#000000";
                    resultAqiTitle.innerHTML = "🔍 City not found";
                    resultAqiText.innerHTML = "Please try again later or search for a neighboring city. Thank you for understanding.";
                    break;
                  default:
                    document.body.style.backgroundColor = "#e8e8e8";
                }

        })
        .catch(error => console.log("Si è verificato un errore!"));

}

document.getElementById("aqiFinderAqi").addEventListener("click", cityAqiFunction);

function cityAqiFunction() {

    let city = idSearch.value
    let cityURL = `https://api.waqi.info/feed/` + city + `/?token=${api_key}`

    fetch(cityURL)
        .then(response => {
                if (response.ok) {
                    return response.json();
                }
        })
        .then(app => {
            nameCity.innerHTML = idSearch.value;
            aqiCity.innerHTML = app.data.aqi;

                var backgroundAqi = aqiCity.innerHTML;

                switch (true) {
                  case backgroundAqi <= 50:
                    document.body.style.backgroundColor = "#009966";
                    document.body.style.color = "#ffffff";
                    resultAqiTitle.innerHTML = "☀️ Good ☀️";
                    resultAqiText.innerHTML = "Air quality is considered satisfactory, and air pollution poses little or no risk.";
                    break;
                  case backgroundAqi <= 100:
                    document.body.style.backgroundColor = "#ffde33";
                    document.body.style.color = "#000000";
                    resultAqiTitle.innerHTML = "☁️ Moderate ☁️";
                    resultAqiText.innerHTML = "Air quality is acceptable; however, for some pollutants there may be a moderate health concern for a very small number of people who are unusually sensitive to air pollution.";
                    break;
                  case backgroundAqi <= 150:
                    document.body.style.backgroundColor = "#ff9933";
                    document.body.style.color = "#000000";
                    resultAqiTitle.innerHTML = "⚠️ Unhealthy for Sensitive Groups ⚠️";
                    resultAqiText.innerHTML = "Members of sensitive groups may experience health effects. The general public is not likely to be affected.";
                    break;
                  case backgroundAqi <= 200:
                    document.body.style.backgroundColor = "#cc0033";
                    document.body.style.color = "#ffffff";
                    resultAqiTitle.innerHTML = "⚠️ Unhealthy ⚠️";
                    resultAqiText.innerHTML = "Everyone may begin to experience health effects; members of sensitive groups may experience more serious health effects.";
                    break;
                  case backgroundAqi <= 300:
                    document.body.style.backgroundColor = "#660099";
                    document.body.style.color = "#ffffff";
                    resultAqiTitle.innerHTML = "⚠️ Very Unhealthy ⚠️";
                    resultAqiText.innerHTML = "Health warnings of emergency conditions. The entire population is more likely to be affected.";
                    break;
                  case backgroundAqi >= 301:
                    document.body.style.backgroundColor = "#7e0023";
                    document.body.style.color = "#ffffff";
                    resultAqiTitle.innerHTML = "⚠️ Hazardous ⚠️";
                    resultAqiText.innerHTML = "Health alert: everyone may experience more serious health effects!";
                    break;
                  case backgroundAqi === "undefined":
                    document.body.style.backgroundColor = "#e8e8e8";
                    document.body.style.color = "#000000";
                    resultAqiTitle.innerHTML = "🔍 City not found";
                    resultAqiText.innerHTML = "Please try again later or search for a neighboring city. Thank you for understanding.";
                    break;
                  default:
                    document.body.style.backgroundColor = "#e8e8e8";
                }

        })
        .catch(error => console.log("Si è verificato un errore!"));

}

