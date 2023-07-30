const API_KEY = import.meta.env.VITE_WEATHER_KEY
import axios from 'axios'

// function to get currentWeather
export async function fetchCurrentWeather(location: string) {
  console.log('fetchCurrentWeather called with location: ', location)
  try {
    // Get current weather data and coordinates
    const url = `http://api.openweathermap.org/data/2.5/weather?q=${location}&appid=${API_KEY}`
    console.log(url)
    const response = await axios.get(
      `http://api.openweathermap.org/data/2.5/weather?q=${location}&appid=${API_KEY}`
    )
    const { lat, lon } = response.data.coord

    const oneCallResponse = await axios.get(
      `https://api.openweathermap.org/data/3.0/onecall?lat=${lat}&lon=${lon}&exclude=minutely,hourly,daily,alerts&appid=${API_KEY}`
    )

    const weatherData = {
      ...response.data,
      oneCallData: oneCallResponse.data
    }

    // convert temp to Celsius and Fahrenheit

    const kelvin = weatherData.main.temp
    weatherData.main.tempCel = Math.round(kelvin - 273.15)
    weatherData.main.tempFar = Math.round(((kelvin - 273.15) * 9) / 5 + 32)

    console.log('fetchCurrentWeather response: ', weatherData)
    return weatherData
  } catch (error) {
    console.error(
      `Error fetching current weather for location "${location}":`,
      error
    )
    throw error
  }
}

// function to get 5 day forecast
export async function fetchForecast(location: string) {
  console.log('fetchForecast called with location: ', location)
  try {
    // Get latitude and longitude for location
    const response = await axios.get(
      `http://api.openweathermap.org/data/2.5/weather?q=${location}&appid=${API_KEY}`
    )
    const { lat, lon } = response.data.coord

    // Fetch forecast data
    const forecastResponse = await axios.get(
      `https://api.openweathermap.org/data/3.0/onecall?lat=${lat}&lon=${lon}&exclude=current,minutely,hourly,alerts&appid=${API_KEY}`
    )

    // Extract 5 days forecast data
    const fiveDayForecast = forecastResponse.data.daily.slice(0, 5)

    console.log('fetchForecast response: ', fiveDayForecast)
    return fiveDayForecast
  } catch (error) {
    console.error(`Error fetching forecast for location "${location}":`, error)
    throw error
  }
}
