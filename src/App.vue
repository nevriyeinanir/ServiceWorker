<template>
<div>
 <User/>

 </div>

</template>

<script>
//if(navigator.serviceWorker) kontrolüyle 
//destekleyen tarayıcılarda işlem yapmasını sağlamış olduk.

if ('serviceWorker' in navigator) {
  window.addEventListener('load', function() {
    navigator.serviceWorker.register('/sw.js',{scope:'./'}).then(function(registration) {
      // Registration was successful
      console.log('ServiceWorker registration successful with scope: ', registration.scope);
    }, function(err) {
      // registration failed :(
      console.log('ServiceWorker registration failed: ', err);
    });
  });
}
import User from './components/User.vue'

export default {
  name: 'App',
  components: {
    User
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
