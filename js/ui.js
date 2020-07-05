class UI {
    constructor () {
            this.location = document.getElementById('w-location');
            this.desc = document.getElementById('w-desc');
            this.string = document.getElementById('w-string');
            this.details = document.getElementById('w-details');
            this.icon = document.getElementById('w-icon');
            this.humidity = document.getElementById('w-humidity');
            this.feelsLike = document.getElementById('w-feels-like');
            this.dewpoint = document.getElementById('w-dewpoint');
            this.wind = document.getElementById('w-wind');
    }

    paint(weather) {             
        this.location.textContent = `${weather.name}, ${weather.sys.country}`;
        weather.weather.forEach(weather => {
            this.desc.textContent = weather.description
        });
        this.string.textContent = `${weather.main.temp} F`;
        weather.weather.forEach((weather) => {
            this.icon.setAttribute('src', `http://openweathermap.org/img/wn/${weather.icon}@2x.png`) 
        })
        this.humidity.textContent = `Relative Humidity: ${weather.main.humidity}%`;
        this.feelsLike.textContent = `Feels Like: ${weather.main.feels_like}`;
        this.dewpoint.textContent = `Pressure: ${weather.main.pressure}`;
        this.wind.textContent = `${weather.wind.deg}degs at ${weather.wind.speed}mph`;
     
    }
}
