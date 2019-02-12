<template>
  <div class="general">
    <div class="head">
      <div class="psc-m-hamburger">
        <span><i class="iconfont icon-zhuye"></i></span>
      </div>
      <div class="psc-m-right">
        <span><i class="iconfont icon-sousuo"></i></span>
        <span><i class="iconfont icon-shengdangouwuche"></i></span>
      </div>
      <div class="m-head-tab">
        <b>发现</b>
        <span>
          甄选家
        </span>
      </div>
    </div>
    <div class="searchTab">
      <ul class="router-nav">
        <li v-for="(li,index) in tlist" :key="index">
          <router-link activeClass='active' :to="routerArr[index]">{{li.tabName}}</router-link>
        </li>
      </ul>
      <!--<div class="general-view">-->

      <!--</div>-->
    </div>
    <keep-alive>
      <router-view  />
    </keep-alive>
  </div>
</template>
<script>
  import {mapState} from 'vuex'

  export default {
    data(){
      return {
        activeIndex:'',
        defaultIndex:0,
        routerArr:['/general/tuijian','/general/talent','/general/plioncene','/general/shaidan','/general/home']
      }
    },
    mounted(){
      this.$store.dispatch('getTabs')
//      if(!this.scroll){
//        this.scroll = new BScroll('.general-view',{
//          click:true,
//          scrollY:true
//
//        })
//      }else {
//        this.scroll.refresh()
//      }
    },
    computed:{
      ...mapState({
        tlist: state => state.general.tlist
      })
    },
    methods:{
      resetIndex(index){
        this.activeIndex = index
      }
    },
    components:{
    }
  }
</script>

<style lang="stylus" rel="stylesheet/stylus" scoped>
  @import "../../assets/stylus/mixins.styl"
.general
  width 100%

  /*padding 130px 0*/
  /*box-sizing border-box*/
  clearFix()
  .head
    padding 20px
    box-sizing border-box
    text-align center
    background white
    bottom-border-1px(#ccc)
    font-size 26px
    position fixed
    top 0
    left 0
    right 0
    z-index 9999
    .psc-m-hamburger
      float left
      .iconfont
        font-size 38px
    .psc-m-right
      float right
      .iconfont
        font-size 38px
    .m-head-tab
      color #7F7F7F
      b
        font-size 32px
        color #AB2B2B
        font-weight bold
  .searchTab
    width 100%
    position fixed
    left 0
    right 0
    top 70px
    z-index 9999
    .router-nav
      clearFix()
      position relative
      z-index 200
      background white
      li
        float left
        width 20%
        padding 15px 25px
        box-sizing border-box
        height 58px
        bottom-border-1px(#ccc)
        a
          display inline-block
          font-size  26px
          text-align center
          height 40px
          span
            height 40px
            display inline-block
            border-bottom 2px solid transparent
            margin-bottom 10px
          &.active
            color #AB2B2B
            border-bottom 2px solid #AB2B2B
    /*.general-view*/
      /*width 100%*/
      /*height 1150px*/
      /*overflow hidden*/
</style>

