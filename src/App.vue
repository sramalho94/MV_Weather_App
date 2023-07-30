<template>
  <v-app>
    <v-main>
      <SearchBar />
      <CurrentWeather v-if="store.currentWeather" />
      <Forecast v-if="store.forecast" />
    </v-main>
  </v-app>
</template>

<script setup lang="ts">
import { useStore } from '@/store'
import SearchBar from './components/SearchBar.vue'
import CurrentWeather from './components/CurrentWeather.vue'
import Forecast from './components/Forecast.vue'

const store = useStore()
</script>
