<template>
  <v-container>
    <v-row justify="center">
      <v-col cols="8" md="4">
        <v-card>
          <v-card-title>{{ store.currentWeather?.locationName }}</v-card-title>
          <v-card-subtitle>{{
            store.currentWeather?.condition
          }}</v-card-subtitle>
          <v-card-text>
            Temperature:
            {{
              `${store.currentWeather?.tempFar}°F /  ${store.currentWeather?.tempCel}°C`
            }}<br />
            Humidity: {{ store.currentWeather?.humidity }}<br />
            Wind Speed: {{ store.currentWeather?.windSpeed }}
          </v-card-text>
        </v-card>
      </v-col>
    </v-row>
  </v-container>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import { useStore } from '@/store'

export default defineComponent({
  name: 'CurrentWeather',
  setup() {
    const store = useStore()

    return {
      store
    }
  }
})
</script>

<style scoped></style>
