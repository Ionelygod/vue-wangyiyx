<template>
  <div class="classify">
    <header class="header">
      <div @click="$router.push('/search')">
        <span><i class="iconfont icon-sousuo"></i></span>
        <span>搜索商品，共20904款好物</span>
      </div>
    </header>
    <div class="left-wrap">
      <ul class="left">
        <li v-for="(item,index) in categoryL1List" :key="index" :class="{active:index === typeNum}" @click="sorted(index)">
          {{item.name}}
        </li>
      </ul>
    </div>
    <div class="right" v-if="categoryL1List.length">
      <img v-lazy="categoryL1List[typeNum].wapBannerUrl" alt="图片">
      <ul class="cate-list">
        <li v-for="(li,index) in categoryL1List[typeNum].subCateList" :key="index">
          <div>
            <img v-lazy="li.bannerUrl" alt="图片">
          </div>
          <span v-if="li.name">{{li.name}}</span>
        </li>
      </ul>
    </div>
  </div>
</template>
<script>
  import {mapState} from 'vuex'
  import BScroll from 'better-scroll'
  export default {
    data(){
      return {
        typeNum: 0,
      }
    },
    mounted(){
      this.$store.dispatch('getfenlei')
      new BScroll('.left-wrap',{
        click:true,
        scrollY:true
      })
    },
    computed:{
      ...mapState({
        categoryL1List:state => state.classify.categoryL1List
      })
    },
    methods:{
      sorted(index){
        index  = index || 0
        this.typeNum = index
      }
    }
  }
</script>

<style lang="stylus" rel="stylesheet/stylus" scoped>
  @import "../../assets/stylus/mixins.styl"
.classify
  width 100%
  clearFix()
  padding-top 70px
  .header
    padding 10px 20px
    box-sizing border-box
    bottom-border-1px(#ccc)
    background white
    position fixed
    top 0
    left 0
    right 0
    z-index 10
    clearFix()
    >div
      background #EDEDED
      height 50px
      text-align center
      line-height 50px
      span
        font-size 28px
        color #666
        vertical-align middle
        .iconfont
          font-size 40px
          vertical-align middle
  .left-wrap
    border-right 1px solid #eee
    width 25%
    float left
    height 1200px
    clearFix()
    .left
      width 25%
      float left
      position fixed
      top 70px
      left 0
      text-align center
      clearFix()
      li
        text-align center
        font-size 30px
        margin-top 60px
        border-left 3px solid white
        &.active
          border-left 3px solid #AB2B2B
          color #AB2B2B
        &:first-child
          margin-top 20px
  .right
    clearFix()
    position absolute
    top 90px
    right  0
    float right
    width 74%
    padding 30px 20px
    box-sizing border-box
    clearFix()
    img
      width 100%
      float left
    li
      text-align center
      float left
      width 150px
      margin 20px 10px
      height 180px
      img
        width 100%
</style>

