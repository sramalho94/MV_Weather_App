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
        xl="2"
      >
        <v-card>
          <v-card-title>
            {{ formatDate(item.date) }}
          </v-card-title>
          <v-card-text>
            <p>
              Day Temperature: {{ kelvinToCelsius(item.temperature) }}°C /
              {{ kelvinToFahrenheit(item.temperature) }}°F
            </p>
            <p>Weather: {{ item.weather }}</p>
            <p>Description: {{ item.weather }}</p>
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

    return { forecast, kelvinToCelsius, kelvinToFahrenheit, formatDate }
  },

  filters: {
    formatDate(value: number) {
      const date = new Date(value * 1000)
      return `${date.getMonth() + 1}/${date.getDate()}/${date.getFullYear()}`
    }
  }
})
</script>

<style scoped></style>
