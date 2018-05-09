<template>
  <div id="app">
    <img src="./assets/logo.png">
    <router-view/>
    <div class="menu">
    
    <!--router -->
    <router-link to="/">index</router-link>
    <router-link to="/page1">Go page1 </router-link>
    <div>{{username}}</div>
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
  },
  computed:{
      username () {
            // 我们很快就会看到 `params` 是什么
            return this.$route.name;
     }
     
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
