<template>
<div class="tuijian-item">
  <div class="colly" v-if="item.style === 1">
    <div class="li-header">
      <div>
        <img :src="item.avatar" alt="图片">
      </div>
      <p>{{item.nickname}}</p><br />
    </div>
    <div class="li-content">
      <span>{{item.title}}</span>
      <br />
      <br />
      <div>
        <img :src="item.picUrl" alt="详情">
      </div>
    </div>
    <div class="read-count">
      <br />
      <i class="iconfont icon-chakan"></i>
      <span>{{item.readCount}}人看过</span>
    </div>
  </div>
  <div class="rise" v-if="item.style === 2">
    <div class="left">
      <div class="left-top">
        <div>
          <img :src="item.avatar" alt="图片">
        </div>
        <p>{{item.nickname}}</p>
      </div>
      <div class="left-content">
        <p>{{item.title}}</p>
        <span>{{item.subTitle}}</span>
      </div>
      <div class="left-read-count">
        <i class="iconfont icon-chakan"></i>
        <span>{{item.readCount}}人看过</span>
      </div>
    </div>
    <div class="right">
      <div>
        <img :src="item.picUrl" alt="111">
      </div>
    </div>
  </div>
</div>
</template>
<script>
  export default {
    props:{
      item:Object
    }
  }
</script>

<style lang="stylus" rel="stylesheet/stylus" scoped>
  @import '../../assets/stylus/mixins.styl'
.tuijian-item
  width 100%
  box-sizing border-box
  clearFix()
  .colly
    width 100%
    padding 20px 20px
    box-sizing border-box
    .li-header
      width 100%
      height 50px
      box-sizing border-box
      div
        float left
        height 40px
        width 40px
        border-radius 50%
        overflow hidden
        img
          height 100%
      p
        float left
        font-size 28px
        margin-left 15px
        line-height 40px
        vertical-align margin-bottom
    .li-content
      width 100%
      span
        float left
        margin 20px 0px
        font-size 26px
      div
        width 70%
        border-radius 10px
        overflow hidden
        img
          width 100%
  .rise
    width 100%
    padding 20px 20px
    box-sizing border-box
    position relative
    clearFix()
    .left
      float left
      width 60%
      .left-top
        height 40px
        div
          float left
          width 40px
          height 40px
          border-radius 50%
          overflow hidden
          img
            width 100%
        p
          float left
          line-height 40px
          margin-left 20px
      .left-content
        margin-bottom 10px
        p
          margin 20px 0px
          width 300px
          font-size 26px
          display: -webkit-box;
          -webkit-box-orient: vertical;
          -webkit-line-clamp: 2;
          overflow: hidden;
        span
          color #8c8c8c
    .right
      float right
      width 40%
      padding 10px
      position relative
      right -20px
      top 0
      z-index -1
      box-sizing border-box
      div
        margin 0
        width 200px
        height 200px
        border-radius 10px
        overflow hidden
        img
          height 100%
</style>

