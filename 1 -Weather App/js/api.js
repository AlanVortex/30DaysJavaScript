const apiKey = "01e1281e7591eea3181140c74ecc22ef"
        const apiUrl = "https://api.openweathermap.org/data/2.5/weather?units=metric&q=bangalore"

        async function setWeather(){
            const response = await fetch(apiUrl + "&appid=${apiKey}");
            var data = await response.json();

            console.log(data);

            
        }

        setWeather();