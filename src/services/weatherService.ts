const API_KEY = import.meta.env.VITE_WEATHER_KEY
import axios from 'axios'

// function to get currentWeather
export async function fetchCurrentWeather(location: string) {
  // console.log('fetchCurrentWeather called with location: ', location)
  try {
    // Get current weather data and coordinates
    // const url = `http://api.openweathermap.org/data/2.5/weather?q=${location}&appid=${API_KEY}`
    // console.log(url)
    const response = await axios.get(
      `http://api.openweathermap.org/data/2.5/weather?q=${location}&appid=${API_KEY}`
    )
    // const { lat, lon } = response.data.coord

    // const latLongResponse = await axios.get(
    //   `https://api.openweathermap.org/data/3.0/onecall?lat=${lat}&lon=${lon}&exclude=minutely,hourly,daily,alerts&appid=${API_KEY}`
    // )

    const weatherData = {
      ...response.data
      // latLongData: latLongResponse.data
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

    console.log('forecastResponse.data: ', forecastResponse.data)
    // Ensure that data is available before trying to access it
    if (forecastResponse.data && forecastResponse.data.daily) {
      // Extract 5 days forecast data
      const fiveDayForecast = forecastResponse.data.daily.slice(0, 5)

      // Process the data into the desired format
      const processedForecast = fiveDayForecast.map((day: any) => {
        return {
          date: day.dt,
          temperature: day.temp.day,
          weather: day.weather[0].main,
          description: day.weather[0].description
        }
      })

      console.log('fetchForecast response: ', processedForecast)
      return processedForecast
    } else {
      throw new Error('No forecast data available.')
    }
  } catch (error) {
    console.error(`Error fetching forecast for location "${location}":`, error)
    throw error
  }
}
