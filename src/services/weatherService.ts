const API_KEY = process.env.VUE_APP_WEATHER_KEY
const BASE_URL = `http://api.openweathermap.org/data/2.5/weather?appid=${API_KEY}`
import axios from 'axios'

// function to get currentWeather
export async function fetchCurrentWeather(location: string) {
  const response = await axios.get(`${BASE_URL}&q=${location}`)
  return response.data
}

// function to get 5 day forecast
export async function fetchForecast(location: string) {
  const response = await axios.get(`${BASE_URL}&q=${location}&cnt=5`)
  return response.data
}
