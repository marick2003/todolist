import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import page1 from '@/components/page1'
import VuePreload from 'vue-preload'
// Vue.use(VuePreload)

// // with options
// Vue.use(VuePreload, {
//   // show the native progress bar
//   // put <preloading></preloading> in your root component
//   showProgress: true,
//   // excutes when click
//   onStart() {

//     console.log("start");
//   },
//   // excutes when use .end() and after .setState()
//   onEnd() {
//     console.log("onEnd");
//   },
//   // excutes when prefetching the state
//   onPreLoading() {},
// })
Vue.use(Router)
export default new Router({
  routes: [
    {
      path: '/',
      name: 'HelloWorld',
      component: HelloWorld
    },
    {
      path: '/page1',
      name: 'page1',
      component: page1

    }
  ]
})
