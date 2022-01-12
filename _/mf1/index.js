// export { default as Hello } from './components/Hello.vue'
import { default as Hello } from './components/Hello.vue'
import { default as Hello2 } from './components/Hello2.vue'

let messageBus = null

export default ({ bus }) => ({
  install(Vue) {
    Vue.component('Hello', Hello)
    Vue.component('Hello2', Hello2)

    messageBus = bus
    console.log('messageBus', messageBus)
  }
})
