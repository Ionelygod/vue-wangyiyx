<template>
  <div class="freshman">
    <div class="module-title">
      <span>新人专享礼</span>
    </div>
    <div class="module-content">
      <div class="left">
        <a href="javascript:;">
          <span>新人专享礼包</span>
          <img src="//yanxuan.nosdn.127.net/a020bed0783956f650abc016e386bead.png" alt="新人专享礼包">
          <div>

          </div>
        </a>
      </div>
      <div class="right">
        <div class="right-chunk" :class="{['right-chunk-class']: index ===1}" v-for="(indexActivity,index) in indexActivityModule" :key="index">

          <div class="cnt">
            <p class="title">{{indexActivity.title}}</p>
            <span v-if="indexActivity.subTitle" class="subTitle">{{indexActivity.subTitle ?indexActivity.subTitle:''}}</span>
            <span v-if="indexActivity.tag" class="tag">{{indexActivity.tag ?indexActivity.tag:''}}</span>
          </div>
          <div class="chunk-circle">
            <p>{{indexActivity.activityPrice}}</p>
            <p class="chunk-circle-strike">{{indexActivity.originPrice}}</p>
          </div>
          <div class="chunk-img">
            <img v-lazy="indexActivity.picUrl">
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
  import {mapState} from 'vuex'
  export default {
    computed:{
      ...mapState({
        indexActivityModule:state => state.home.indexActivityModule
      })
    }
  }
</script>

<style lang="stylus" rel="stylesheet/stylus" scoped>
  @import '../../assets/stylus/mixins.styl'
.freshman
  width 100%
  height 500px
  margin-bottom 70px
  .module-title
    /*height 70px*/
    /*line-height 70px*/
    text-align center
    font-size 34px
    padding 30px 0
    box-sizing border-box
    span
      position relative
      &:before
        display inline-block
        content ''
        height 4px
        width 24px
        background #8c8c8c
        position absolute
        left -35px
        top 50%
        transform translateY(-50%)
      &:after
        display inline-block
        content ''
        height 4px
        width 24px
        background #8c8c8c
        position absolute
        right  -35px
        top 50%
        transform translateY(-50%)
  .module-content
    height 90%
    padding 5px 30px
    box-sizing border-box
    display flex
    margin-bottom 10px
    >div
      flex 1
      float left
      height 100%
      width 49%
      border-radius 4px
      &.left
        background #F9E9CF
        margin-right 2%
        padding-left 30px
        padding-top 50px
        box-sizing border-box
        clearFix()
        a
          display block
          width 100%
          height 100%
          position relative
          div
            position absolute
            right 82px
            bottom 72px
            display block
            height 35px
            width 60px
            background url("http://yanxuan.nosdn.127.net/3f7e731c6650bc1770589c78bd5a18b7.png") no-repeat
            background-size 50%
          span
            float left
            font-size 34px
            font-family PingFangSC-Medium
            color #333333
          img
            float left
            margin-left 25px
            margin-top 30px
            width 260px
      &.right
        height 100%
        width 49%
        .right-chunk
          height 48%
          width 100%
          margin-bottom 5%
          background #FBE2D3
          padding-left 30px
          position relative
          padding-top 40px
          box-sizing border-box
          &.right-chunk-class
            background #FFECC2
          .chunk-img
            width 180px
            height 120px
            position absolute
            right 10px
            top 40px
            img
              width 100%
          .chunk-circle
            position absolute
            right 20px
            top 20px
            width 80px
            height 80px
            z-index 2
            background rgba(246,164,71,.7)
            border-radius 50%
            padding 15px 0 0 5px
            box-sizing border-box
            color white
            font-size 12px
            text-align center
            .chunk-circle-strike
              text-decoration line-through
          .cnt
            clearFix()
            .title
              width 100%
              font-size 32px
            .subTitle
              display inline-block
              font-size 26px
              color #9C9692
            .tag
              display inline-block
              border-radius 5px
              padding 4px 6px
              box-sizing border-box
              font-size 14px
              background #CBB693
              color white
              margin-top 10px
</style>

