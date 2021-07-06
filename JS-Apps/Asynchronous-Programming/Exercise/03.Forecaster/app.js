function attachEvents() {
    let getWeatherButton = document.getElementById('submit');
    getWeatherButton.addEventListener('click', getWeatherHandler)
    let locationInput = document.getElementById('location');


    let conditions = {
        Sunny: () => '☀',
        "Partly sunny": () => '⛅',
        Overcast: () => '☁',
        Rain: () => '☂',
    }
    function getWeatherHandler() {
        let locationName = locationInput.value;

        fetch('http://localhost:3030/jsonstore/forecaster/locations')
            .then(body => body.json())
            .then(locations => {
                console.log(locations);
                let locationName = locationInput.value;
                let location = locations.find(x => x.name === locationName);

                return fetch('http://localhost:3030/jsonstore/forecaster/today/${location.code')
            })
            .then(body => body.json())
            .then(currentWeatherReport => {
                console.log(currentWeatherReport);
            });

        function createCurrentWeatherElement(weatherReport) {
            let forecastsDiv = document.createElement('div');
            forecastsDiv.classList.add('forecasts');

            let conditionSymbolSpan = document.createElement('span');
            conditionSymbolSpan.classList.add('condition', 'symbol');
            conditionSymbolSpan.textContent = conditions[forecast.condition]

            let conditionSpan = document.createElement('span');
            conditionSpan.classList.add('condition');

            let nameSpan = document.createElement('span');
            nameSpan.classList.add('forecast-data');
            nameSpan.textContent = forecast.name;

            let tempSpan = document.createElement('span');
            tempSpan.classList.add('forecast-data');
            tempSpan.textContent = `${forecast.condition.low}°/${forecast.condition.high}°`

            let weatherSpan = document.createElement('span');
            weatherSpan.classList.add('forecast-data');
            weatherSpan.textContent = forecast.condition;

        }

    }
}

attachEvents();