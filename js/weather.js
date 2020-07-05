class Weather{
    constructor(city,state){ 
        this.apiKey = "f3a2d910bc6b3ee80d2ed92c51bec0d8";
        this.city = city;
         this.state = state;
    }

    // Fetch weather from API
    async getWeather(){ 
        const response = await fetch(`http://api.openweathermap.org/data/2.5/weather?q=${this.city},${this.state}&appid=${this.apiKey}&units=metric`);
        const responseData = await response.json();
        console.log(responseData);
        return responseData;
    }

    // change weather location
    changeLocation(city, state){
        this.city = city;
         this.state = state;
    }
}