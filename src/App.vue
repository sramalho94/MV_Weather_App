<template>
  <v-app>
    <v-main>
      <SearchBar />
      <CurrentWeather v-if="store.currentWeather" />
    </v-main>
  </v-app>
</template>

<script setup lang="ts">
import { useStore } from '@/store'
import SearchBar from './components/SearchBar.vue'
import CurrentWeather from './components/CurrentWeather.vue'

const store = useStore()
</script>
