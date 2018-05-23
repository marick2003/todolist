<template>
  <div id="app">
    <div class="preloader">
      <div class="preloader__status">
          <div status class="preloader__status-text">I'm {{loaded}} % done!</div>
          <div class="preloader__status-loader">
            <div loader :style="loadStyle" class="preloader__status-bar"></div>
          </div>
      </div>
    </div>
    <img src="./assets/logo.png">



    <router-view/>
    <!-- 父組件給子組件傳遞-->
    <HeaderView :msg="title"></HeaderView>
    <div class="menu">
    
    <!--router -->
    <router-link to="/HelloWorld"> index </router-link>
    <router-link to="/page1"> page1 </router-link>
    <div>{{username}}</div>
    </div>
    
    <!-- 組件使用 -->
    <ListView @myMsg='getData'></ListView>
  </div>
</template>

<script>
import ListView from './components/List'
import HeaderView from './components/Header'
// import preloadImage from 'vue-preload-image'
//App.vue 是父組件 , listview
//父組件--->子組件 props
//子組件--->父組件 自訂事件


export default {
  name: 'App',
  components:{ //

    ListView,HeaderView
  },
  computed:{
      username () {
            // 我们很快就会看到 `params` 是什么
            return this.$route.name;
     }
     
  },data(){


    return {

      title: "vuelook"
    }
  },
  methods: {
    getData(msg){

      console.log("來自組件:"+msg);
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
.active{

  color: sandybrown; 
}
</style>
