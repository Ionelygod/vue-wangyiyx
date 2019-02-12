<template>
<footer v-if="!$route.meta.noShowFooter">
  <a href="javascript:;"  :class="{active:$route.path === '/home'}" @click="goto('/home')">
    <span><i class="iconfont icon-zhuye"></i></span>
    <span>首页</span>
  </a>
  <a href="javascript:;" :class="{active:$route.path === '/classify'}" @click="goto('/classify')">
    <span><i class="iconfont icon-drawer2chouti"></i></span>
    <span>分类</span>
  </a>
  <a href="javascript:;" :class="{active:$route.path === '/general'}" @click="goto('/general')">
    <span><i class="iconfont icon-tupian"></i></span>
    <span>识物</span>
  </a>
  <a href="javascript:;" :class="{active:$route.path === '/order'}" @click="goto('/order')">
    <span><i class="iconfont icon-gouwuche"></i></span>
    <span>购物车</span>
  </a>
  <a href="javascript:;" :class="{active:$route.path === '/profile'}" @click="goto('/profile')">
    <span><i class="iconfont icon-geren"></i></span>
    <span>个人</span>
  </a>
</footer>
</template>
<script>
  export default {
    methods:{
      goto(path){
        this.$router.replace(path)
      }
    }
  }
</script>

<style lang="stylus" rel="stylesheet/stylus" scoped>
footer
  position fixed
  bottom 0
  width 100%
  z-index 10000
  display flex
  justify-content center
  align-content center
  text-align center
  height 80px
  background white
  a
    flex 1
    display flex
    flex-direction column
    height 80px
    justify-content space-around
    background white
    &.active
      color #E28492
    .iconfont
      font-size 40px
    span:last-child
      margin-top 5px
</style>

