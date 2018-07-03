<template>
 <div class="recommend" ref="recommend">
    <div class="recommend-content">
      <div class="slider-wrapper"></div>
    </div>
    
    <div class="recommend-list">
    <h1>热门歌单推荐</h1>
    <ul></ul>
    </div>
    </div>
</template>

<script type="text/ecmascript-6">
 import {getRecommend} from '../api/recommend'
export default{
		created(){
    this._getRecommend()
    },
    methods:{
_getRecommend(){
  getRecommend().then((res)=>{
  if(res.code === ERR_OK){
 console.log(res.data.slider)
  }
  })
}

    }
}

</script> 

<style>
   .recommend-list h1{
   font-size:16px; 
   
   }
 
</style>