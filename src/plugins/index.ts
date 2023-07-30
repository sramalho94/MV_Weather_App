/**
 * plugins/index.ts
 *
 * Automatically included in `./src/main.ts`
 */

// Plugins
import { loadFonts } from './webfontloader'
import vuetify from './vuetify'

// Types
import type { App } from 'vue'
import type { Pinia } from 'pinia'

export function registerPlugins(app: App, pinia: Pinia) {
  loadFonts()
  app.use(vuetify).use(pinia)
}
