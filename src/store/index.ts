// Utilities
import { defineStore } from 'pinia'
import { fetchCurrentWeather, fetchForecast } from '@/services/weatherService'

// interfaces for CurrentWeather and Forecast
interface CurrentWeather {
  temperature: number
  tempCel: number
  tempFar: number
  condition: string
  conditionDescription: string
  locationName: string
  humidity: number
  windSpeed: number
  icon: string
}

interface ForecastItem {
  date: number
  temperature: number
  weather: string
  description: string
}

interface State {
  location: string
  currentWeather: CurrentWeather | null
  forecast: ForecastItem[] | null
}

// Store
export const useStore = defineStore({
  id: 'weather',
  state: (): State => ({
    location: '',
    currentWeather: null,
    forecast: null
  }),
  actions: {
    setLocation(location: string) {
      console.log('setLocation called with: ', location)
      this.location = location
    },

    async fetchCurrentWeather() {
      console.log('fetchCurrentWeather called')
      const data = await fetchCurrentWeather(this.location)
      console.log('fetchCurrentWeather response: ', data)

      // Map the returned data to CurrentWeather type
      const weather: CurrentWeather = {
        temperature: data.main.temp,
        tempCel: data.main.tempCel,
        tempFar: data.main.tempFar,
        condition: data.weather[0].main,
        conditionDescription: data.weather[0].description,
        locationName: data.name,
        humidity: data.main.humidity,
        windSpeed: data.wind.speed,
        icon: data.weather[0].icon
      }
      this.currentWeather = weather
      console.log(`stored weather: `, this.currentWeather)
    },

    async fetchForecast() {
      console.log('fetchForecast called')
      const response = await fetchForecast(this.location)
      console.log('fetchForecast response: ', response)
      const forecast: ForecastItem[] = response.map((day: any) => ({
        date: day.date,
        temperature: day.temperature,
        weather: day.weather,
        description: day.description
      }))
      this.forecast = forecast
      console.log('Stored forecast: ', this.forecast)
    }
  }
})

export default useStore
