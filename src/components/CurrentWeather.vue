<template>
  <v-container>
    <v-row justify="center" align="center">
      <v-col cols="12">
        <v-card>
          <v-card-title class="text-center">{{
            currentWeather?.locationName
          }}</v-card-title>
          <v-row justify="center">
            <v-img
              v-if="currentWeather?.icon"
              :src="generateIconUrl(currentWeather?.icon)"
              max-width="150"
              contain
            />
          </v-row>
          <v-card-subtitle class="text-center">{{
            currentWeather?.condition
          }}</v-card-subtitle>
          <v-card-subtitle class="text-center">{{
            currentWeather?.conditionDescription
          }}</v-card-subtitle>
          <v-card-text>
            <v-row>
              <v-col cols="12" sm="4" class="text-center">
                <v-icon>mdi-thermometer</v-icon>
                Temperature:
                {{
                  `${currentWeather?.tempFar}°F /  ${currentWeather?.tempCel}°C`
                }}
              </v-col>
              <v-col cols="12" sm="4" class="text-center">
                <v-icon>mdi-water-percent</v-icon>
                Humidity: {{ currentWeather?.humidity }}
              </v-col>
              <v-col cols="12" sm="4" class="text-center">
                <v-icon>mdi-weather-windy</v-icon>
                Wind Speed: {{ currentWeather?.windSpeed }}
              </v-col>
            </v-row>
          </v-card-text>
        </v-card>
      </v-col>
    </v-row>
  </v-container>
</template>

<script lang="ts">
import { defineComponent, computed } from 'vue'
import { useAppStore } from '@/store/app'

export default defineComponent({
  name: 'CurrentWeather',

  // access Store to get currentWeather data
  setup() {
    const store = useAppStore()
    const currentWeather = computed(() => store.currentWeather)
    const generateIconUrl = (icon: string) =>
      `http://openweathermap.org/img/wn/${icon}@2x.png`
    return {
      currentWeather,
      generateIconUrl
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
