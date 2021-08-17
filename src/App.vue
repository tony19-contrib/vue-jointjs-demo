<template>
  <div id="app">
    <MyGraph />
  </div>
</template>

<script>
import MyGraph from './components/MyGraph.vue'

export default {
  name: 'App',
  components: {
    MyGraph
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
