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
import { useAppStore } from '@/store/app'

export default defineComponent({
  name: 'Forecast',
  setup() {
    // access store
    const store = useAppStore()

    // create computed values so that changes in store will update forecast in component
    const forecast = computed(() => store.forecast)

    // methods to convert Kelvin to C and F
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

    return {
      forecast,
      kelvinToCelsius,
      kelvinToFahrenheit,
      formatDate
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
