<template>
  <v-app id="inspire" style="background-color: #7775e2">
    <v-main>
      <!-- conditionally rendering currentweather and forecast based on content of store -->
      <SearchBar />
      <CurrentWeather v-if="store.currentWeather" />
      <Forecast v-if="store.forecast" />
    </v-main>
  </v-app>
</template>

<script setup lang="ts">
import { useAppStore } from './store/app'
import SearchBar from './components/SearchBar.vue'
import CurrentWeather from './components/CurrentWeather.vue'
import Forecast from './components/Forecast.vue'

const store = useAppStore()
</script>

<style scoped>
.v-main {
  height: 100%;
  width: 100%;
}
</style>
