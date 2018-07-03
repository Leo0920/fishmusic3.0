<template>
  <div id="app" @touchmove.prevent>
     <v-header></v-header>
     <tab></tab>
     <router-view></router-view>
  </div>
</template>

<script type="text/ecmascript-6">
  import VHeader from './components/v-header'
  import Tab from './components/tab'
  export default{
  components:{
  VHeader,
  Tab
  }
 }
</script>

<style> 
  #app{
  width:100%;
  height:100%;
  background-color:#ffffff;
  }
</style>
