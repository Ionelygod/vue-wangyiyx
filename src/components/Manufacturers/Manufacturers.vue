<template>
  <div class="manufacturers">
    <div class="manufacturers-title">
      <h2>品牌制造商直供</h2>
      <a href="javascript:;"><span>更多 <i class="iconfont icon-arrow-right"></i></span></a>
    </div>
    <ul class="manufacturers-list">
      <a href="javascript:;">
        <li v-for="(li,index) in tagList" :key="index" :style="{background: `url(${li.picUrl})`,backgroundSize:'90%'}">
          <p>{{li.name}}</p>
          <span>{{li.floorPrice}}元起</span><span class="newOnShelf" v-if="li.newOnShelf">上新</span>
        </li>
      </a>
    </ul>
  </div>
</template>
<script>
  import {mapState} from 'vuex'
  export default {
    computed:{
      ...mapState({
        tagList: state => state.home.tagList
      })
    }
  }
</script>

<style lang="stylus" rel="stylesheet/stylus" scoped>
  @import "../../assets/stylus/mixins.styl"
  .manufacturers
    width 100%
    margin-bottom 20px
    clearFix()
    .manufacturers-title
      padding 30px 30px
      box-sizing border-box
      margin-bottom 20px
      h2
        float left
        font-size 32px
      a
        float right
    .manufacturers-list
      padding 20px 30px
      box-sizing border-box
      width 100%
      a
        width 100%
      li
        width 48%
        float left
        height 250px
        box-sizing border-box
        padding-top 20px
        text-align center
        margin 0 10px 10px 0
        .newOnShelf
          color white
          padding 2px 5px
          background #CBB693
          border-radius 10px
          margin-left 10px
        p
          font-size 30px
          color black
          margin-bottom 10px
</style>

