<template>
  <v-container>
    <v-row justify="center">
      <v-col cols="12">
        <v-text-field
          class="custom-input"
          label="Enter Location"
          v-model="location"
          @keyup.enter="searchWeather"
          filled
          clearable
        >
          <template v-slot:append>
            <v-btn
              class="custom-button"
              color="primary"
              @click="searchWeather"
              icon
            >
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
    // access store and create ref for location
    const store = useAppStore()
    const location = ref('')

    // function to search, returns if no value, sets store, and resets location ref after completion
    const searchWeather = async () => {
      if (!location.value) return
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

<style scoped>
.v-text-field.custom-input {
  border: 2px solid #7775e2;
  border-radius: 10px;
  background-color: #a8a5f2;
  color: white;
}

.v-text-field.custom-input .v-input__control input {
  color: white;
}

.v-btn.custom-button {
  background-color: #7775e2;
  color: white;
}
</style>
