// Utilities
import { defineStore } from 'pinia'
import {
  fetchAPICurrentWeather,
  fetchAPIForecast
} from '@/services/weatherService'

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

// interface for store state
interface State {
  location: string
  currentWeather: CurrentWeather | null
  forecast: ForecastItem[] | null
}

// Store
export const useAppStore = defineStore({
  id: 'app',
  state: (): State => ({
    location: '',
    currentWeather: null,
    forecast: null
  }),
  actions: {
    setLocation(location: string) {
      this.location = location
    },

    async fetchCurrentWeather() {
      const data = await fetchAPICurrentWeather(this.location)

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
    },

    // function to fetch forecast and save to store, array of data from API response is mapped to individual days
    async fetchForecast() {
      const response = await fetchAPIForecast(this.location)
      const forecast: ForecastItem[] = response.map((day: any) => ({
        date: day.date,
        temperature: day.temperature,
        weather: day.weather,
        description: day.description
      }))
      this.forecast = forecast
    }
  }
})
