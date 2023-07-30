/**
 * main.ts
 *
 * Bootstraps Vuetify and other plugins then mounts the App`
 */

// Components
import App from './App.vue'

// Composables
import { createApp } from 'vue'

import pinia from './store/index'

// Plugins
import { registerPlugins } from '@/plugins'

const app = createApp(App)

app.use(pinia)

registerPlugins(app, pinia)

app.mount('#app')
