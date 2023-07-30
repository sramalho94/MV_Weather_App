<template>
  <v-container>
    <v-row>
      <v-col
        v-for="(item, index) in forecast"
        :key="index"
        cols="12"
        sm="6"
        md="4"
        lg="3"
      >
        <v-card class="forecast-card text-center pa-4">
          <v-card-title class="blue--text">{{
            formatDate(item.date)
          }}</v-card-title>
          <v-img
            v-if="item.icon"
            :src="generateIconUrl(item.icon)"
            max-width="100"
            contain
            class="mx-auto mb-3"
          />
          <v-card-text>
            <p>
              Day Temperature: {{ kelvinToCelsius(item.temperature) }}°C /
              {{ kelvinToFahrenheit(item.temperature) }}°F
            </p>
            <p>{{ item.weather }} : {{ item.description }}</p>
          </v-card-text>
        </v-card>
      </v-col>
    </v-row>
  </v-container>
</template>

<script lang="ts">
import { computed, defineComponent } from 'vue'
import { useStore } from '@/store'

export default defineComponent({
  name: 'Forecast',
  setup() {
    const store = useStore()
    const forecast = computed(() => store.forecast)

    const kelvinToCelsius = (kelvin: number) => {
      return Math.round(kelvin - 273.15)
    }

    const kelvinToFahrenheit = (kelvin: number) => {
      return Math.round((kelvin * 9) / 5 - 459.67)
    }

    const formatDate = (value: number) => {
      const date = new Date(value * 1000)
      return `${date.getMonth() + 1}/${date.getDate()}/${date.getFullYear()}`
    }

    const generateIconUrl = (icon: string) => {
      return `http://openweathermap.org/img/wn/${icon}@2x.png`
    }

    return {
      forecast,
      kelvinToCelsius,
      kelvinToFahrenheit,
      formatDate,
      generateIconUrl
    }
  }
})
</script>

<style scoped>
.forecast-card {
  box-shadow: 0px 3px 1px -2px rgb(0 0 0 / 20%),
    0px 2px 2px 0px rgb(0 0 0 / 14%), 0px 1px 5px 0px rgb(0 0 0 / 12%);
  border-radius: 8px;
  margin-bottom: 1em;
}
</style>
