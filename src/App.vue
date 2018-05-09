<template>
  <div id="app">
    <img src="./assets/logo.png">
    <router-view/>
    <div class="menu">
      <ul>
        <li><a href="#/page1">page1</a></li>
        <li></li>
        <li></li>
      </ul>

    </div>
    <ListView></ListView>
  </div>
</template>

<script>
import ListView from './components/List'
export default {
  name: 'App',
  components:{ //

    ListView
  }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
