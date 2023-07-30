<template>
  <v-container>
    <v-row justify="center" align="center">
      <v-col cols="12">
        <v-card>
          <v-card-title class="text-center">{{
            store.currentWeather?.locationName
          }}</v-card-title>
          <v-row justify="center">
            <v-img
              v-if="store.currentWeather?.icon"
              :src="generateIconUrl(store.currentWeather?.icon)"
              max-width="150"
              contain
            />
          </v-row>
          <v-card-subtitle class="text-center">{{
            store.currentWeather?.condition
          }}</v-card-subtitle>
          <v-card-subtitle class="text-center">{{
            store.currentWeather?.conditionDescription
          }}</v-card-subtitle>
          <v-card-text>
            <v-row>
              <v-col cols="12" sm="4" class="text-center">
                <v-icon>mdi-thermometer</v-icon>
                Temperature:
                {{
                  `${store.currentWeather?.tempFar}°F /  ${store.currentWeather?.tempCel}°C`
                }}
              </v-col>
              <v-col cols="12" sm="4" class="text-center">
                <v-icon>mdi-water-percent</v-icon>
                Humidity: {{ store.currentWeather?.humidity }}
              </v-col>
              <v-col cols="12" sm="4" class="text-center">
                <v-icon>mdi-weather-windy</v-icon>
                Wind Speed: {{ store.currentWeather?.windSpeed }}
              </v-col>
            </v-row>
          </v-card-text>
        </v-card>
      </v-col>
    </v-row>
  </v-container>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import { useAppStore } from '@/store/app'

export default defineComponent({
  name: 'CurrentWeather',
  setup() {
    const store = useAppStore()

    return {
      store
    }
  },
  methods: {
    generateIconUrl(icon: string) {
      return `http://openweathermap.org/img/wn/${icon}@2x.png`
    }
  }
})
</script>

<style scoped>
.v-card {
  max-width: 80%;
  margin: auto;
  margin-bottom: 2em;
}
</style>
