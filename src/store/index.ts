// Utilities
import { defineStore } from 'pinia'
import { fetchCurrentWeather, fetchForecast } from '@/services/weatherService'

// interfaces for CurrentWeather and Forecast

interface CurrentWeather {
  temperature: number
  condition: string
  conditionDescription: string
  locationName: string
  humidity: number
  windSpeed: number
}

interface ForecastItem {
  date: number
  temperature: {
    day: number
    min: number
    max: number
    night: number
    eve: number
    morn: number
  }
  weather: {
    id: number
    main: string
    description: string
    icon: string
  }[]
  rain?: number
  clouds: number
  uvi: number
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
      this.location = location
    },

    async fetchCurrentWeather() {
      const data = await fetchCurrentWeather(this.location)
      // Map the returned data to your custom CurrentWeather type...
      const weather: CurrentWeather = {
        temperature: data.oneCallData.current.temp,
        condition: data.weather[0].main,
        conditionDescription: data.weather[0].description,
        locationName: data.name,
        humidity: data.oneCallData.current.humidity,
        windSpeed: data.oneCallData.current.wind_speed
      }
      this.currentWeather = weather
    },

    async fetchForecast() {
      const data = await fetchForecast(this.location)

      // const forecast: ForecastItem[] = data.map((day: any) => ({
      //   date: day.dt,
      //   temperature: day.temp.day,
      //   condition: day.weather[0].main
      // }))
      this.forecast = data.daily
    }
  }
})

export default useStore
