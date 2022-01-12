<template>
  <h1>Hello!</h1>
  <HelloWorld msg="Welcome"/>
  <Hello msg="Welcome"/>
  <Hello2 msg="Welcome!"/>
</template>

<script>
import HelloWorld from './components/HelloWorld.vue'
// import { Hello as HelloWorld } from 'mf1'

export default {
  components: {
    HelloWorld
  }
}
</script>
