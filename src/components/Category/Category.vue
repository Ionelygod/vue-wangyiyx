<template>
  <div class="category">
    <h2>{{categoryHotSellModule.title}}</h2>
    <ul class="category-list" >
      <a href="javascript:;">
        <li :class="{line:index > 1}" :style="{background: index == 0 ? '#F9F3E4' :'#F5F5F5' }"
            v-for="(category,index) in categoryHotSellModule.categoryList"
            :key="index">
            <span :class="{line1:index < 2}">{{category.categoryName}}</span>
            <img v-lazy="category.picUrl">
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
        categoryHotSellModule: state => state.home.categoryHotSellModule
      })
    }
  }
</script>

<style lang="stylus" rel="stylesheet/stylus" scoped>
  @import "../../assets/stylus/mixins.styl"
.category
  width 100%
  margin-bottom 20px
  clearFix()
  h2
    padding 30px 30px
    box-sizing border-box
    font-size 32px
  .category-list
    width 100%
    padding-left 10px
    box-sizing border-box
    a
      float left
      li
        box-sizing border-box
        margin 0 2px 5px 5px
        width 47.5%
        float left
        display flex
        align-items center
        height 200px
        background #F5F5F5
        img
          margin-left 100px
          width 120px
          float right
        span
          margin-left 40px
          font-size 30px
          color black
          position relative
          &:before
            position absolute
            top 40px
            content ''
            display inline-block
            width 60px
            height 4px
            background #000
        &.line
          width 23%
          margin 5px 5px
          flex-direction column
          justify-content space-around
          span
            margin 0
            font-size 20px
            &:before
              content ''
              height 0
              background white
          img
            margin 0
            width 100px

</style>

