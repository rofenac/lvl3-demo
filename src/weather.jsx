import { useState, useEffect } from 'react'

function Weather() {
  const [weather, setWeather] = useState(null)

  useEffect(() => {
    fetch("https://api.openweathermap.org/data/2.5/weather?q=Denver&appid=41db8b032208cd83589ccd20529b4a91")
      .then(response => response.json())
      .then(data => setWeather(data))
      .catch(error => console.error("Error fetching weather data:", error))
  }, [])

  return (
    <>
      <h2>Weather</h2>
      {weather ? (
        <div>
          <p>Location: {weather.name}</p>
          <p>Temp: {weather.main.temp} Kelvin</p>
          <p>Condition: {weather.weather[0].description}</p>
        </div>
      ) : (
        <p>Loading...</p>
      )}
    </>
  )
}

export default Weather

// I AM SO LOST RIGHT NOW