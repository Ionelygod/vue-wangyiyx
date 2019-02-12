<template>
<header class="header">
  <div class="header-top">
    <a href="javascript:;">
      <h1 class="logo">
        <img src="//yanxuan-static.nosdn.127.net/hxm/yanxuan-wap/p/20161201/style/img/icon-normal/indexLogo-11d65342f9.png" alt="">
      </h1>
    </a>
    <div class="input" @click="$router.push('/search')">
      <span><i class="iconfont icon-sousuo"></i></span>
      <span>搜索商品，共19970款好物</span>
    </div>
    <div class="btn">登录</div>
  </div>
  <div class="header-bottom">
    <ul class="nav-tab">
      <li class="active">
        推荐
      </li>
      <li>
        居家
      </li>
      <li>
        居家
      </li>
      <li>
        居家
      </li>
      <li>
        衣鞋配套
      </li>
      <li>
        居家
      </li>
      <li>
        居家
      </li>
      <li>
        居家
      </li>
    </ul>
  </div>
</header>
</template>
<script>
  import BScroll from 'better-scroll'
  export default {
    mounted(){
      new BScroll('.header-bottom',{
        click:true,
        scrollX:true
      })
    }
  }
</script>

<style lang="stylus" rel="stylesheet/stylus" scoped>
  @import "../../assets/stylus/mixins.styl"
.header
  height 150px
  position fixed
  top 0
  width 100%
  z-index 10
  background white
  .header-top
    clearFix()
    a
      float left
      margin-left 20px
      margin-top 20px
      .logo
        float left
        height 40px
        img
          height 100%
    .input
      float left
      height 60px
      width 60%
      background #EDEDED
      margin 10px 20px 0 20px
      padding-left 30px
      line-height 60px
      border-radius 10px
      box-sizing border-box
    .btn
      float left
      padding 8px 20px
      box-sizing border-box
      border-radius 10px
      margin-top 15px
      color #b4282d
      border 1px solid #b4282d
  .header-bottom
    height 75px
    .nav-tab
      line-height 75px
      white-space nowrap
      float left
      li
        display inline-block
        font-size 26px
        padding 0 25px
        margin 0 18px
        text-align center
        border-bottom  3px solid white
        &.active
          border-bottom-color #b4282d
</style>

