<template>
  <v-container>
    <v-row justify="center">
      <v-col cols="12">
        <v-text-field
          label="Enter Location"
          v-model="location"
          @keyup.enter="searchWeather"
          filled
          clearable
        >
          <template v-slot:append>
            <v-btn color="primary" @click="searchWeather" icon>
              <v-icon>mdi-magnify</v-icon>
            </v-btn>
          </template>
        </v-text-field>
      </v-col>
    </v-row>
  </v-container>
</template>

<script lang="ts">
import { defineComponent, ref } from 'vue'
import { useAppStore } from '@/store/app'
export default defineComponent({
  name: 'SearchBar',

  setup() {
    const store = useAppStore()
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
