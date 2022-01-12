import { createApp } from 'vue'
import App from './App.vue'

import mf1 from 'mf1'

import EventEmitter from 'events'
const bus = new EventEmitter()

createApp(App)
  .use(mf1({ bus }))
  .mount('#app')
