const coords = "coords";
const API_KEY = "97c96a5ec9b43f246b2cc47df3210d55";
const weather = document.querySelector(".js-weather");

function getWeather(lat, lon) {
    //api 사용시 앞에 https:// 경로 완성하기
    fetch(
            `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${API_KEY}&units=metric`
            //섭씨 온도 추가 &units=metric
        )
        .then(function(response) {
            //API 데이터 가져와서 처리작업 대기
            // console.log(response.json());
            return response.json();
        })
        .then(function(json) {
            const temperature = json.main.temp;
            const place = json.name;
            console.log(place);
            console.log(temperature);
            console.log(weather);
            weather.innerText = `${temperature} @ ${place}`;
        });
}

function saveCoords(coordsObj) {
    localStorage.setItem(coords, JSON.stringify(coordsObj));
}

function handleGeoSuccess(position) {
    const latitude = position.coords.latitude;
    const longitude = position.coords.longitude;
    const coordsObj = {
        latitude,
        longitude,
    };
    saveCoords(coordsObj);
    console.log(coordsObj);
}

function handleGeoError() {
    console.log("Can not access geographical location");
}

function askForCoords() {
    //GeoGraphical
    navigator.geolocation.getCurrentPosition(handleGeoSuccess, handleGeoError);
}

function loadCoords() {
    const loadedCoords = localStorage.getItem(coords);

    if (loadedCoords === null) {
        askForCoords();
    } else {
        const parseCoords = JSON.parse(loadedCoords);
        console.log(parseCoords);
        getWeather(parseCoords.latitude, parseCoords.longitude);
    }
}

function init() {
    loadCoords();
}

//첫 함수 시작;
init();