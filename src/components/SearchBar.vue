<template>
  <v-text-field
    label="Enter Location"
    v-model="location"
    @keyup.enter="searchWeather"
    outlined
    clearable
  >
    <template v-slot:append
      ><v-btn color="primary" @click="searchWeather">Search</v-btn></template
    >
  </v-text-field>
</template>

<script lang="ts">
import { defineComponent, ref } from 'vue'
import { useStore } from '@/store'
export default defineComponent({
  name: 'SearchBar',

  setup() {
    const store = useStore()
    const location = ref('')

    const searchWeather = async () => {
      if (!location.value) return
      console.log('location.value: ', location.value)
      store.setLocation(location.value)
      await store.fetchCurrentWeather()
      await store.fetchForecast()
      location.value = ''
    }

    return {
      location,
      searchWeather
    }
  }
})
</script>

<style scoped></style>
