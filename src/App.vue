<template>
  <div id="app">
    <VueMatrixRaindrop></VueMatrixRaindrop>
  </div>
</template>

<script>
import VueMatrixRaindrop from './components/VueMatrixRaindrop.vue'
export default {
  name: 'App',
  components:{
    VueMatrixRaindrop
  }
}
</script>

<style>
@import url('https://fonts.googleapis.com/css2?family=Noto+Serif+Devanagari&family=Roboto+Mono&display=swap');
</style>
<style>
#app {
  font-family: "Noto Serif Devanagari", "Roboto Mono", monospace;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: left;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
