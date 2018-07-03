<template>
 <div class="v-header">
    <div class="banner">
    <img src="../common/image/logo.png">
    <h1>有鱼音乐</h1>
    <router-link tag="div" class="mine" to="/user">
     <img src="../common/image/user.png">
    </router-link>
    </div>

    </div>
</template>

<script type="text/ecmascript-6">

export default{
		
}

</script> 

<style scoped lang="stylus" rel="stylesheet/stylus">
    
 .v-header{
     position: relative;
     width:100%;
    height: 60px;
    background-color:#53d658;
    }

 .banner img{
      display: inline-block;
      vertical-align: top;
      margin-top: 16px;
      width: 32px;
      height: 30px;
     margin-left:30%;
 }
 .banner h1{
     display: inline-block;
     margin-top: 14px;
      line-height: 40px;
      font-size: 20px;
      color:#ffffff;
 }
 .mine{
     position: absolute;
    top: 0;
   margin :2.5% 0 0 88%;
 }
 .mine img{
    display: block;
    width:28px;
    height:28px;
 }
</style>