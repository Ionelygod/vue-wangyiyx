<template>
  <div class="order">
    <div class="order-header">
      <span>购物车</span>
      <div class="right">
        <a href="javascript:;"><span>领券</span></a>
      </div>
    </div>
    <div class="order-servicePolicy">
      <ul class="service-list">
        <li>
          <i class="iconfont icon-yuanxuankuang1"></i>
          <span>30天无忧退货</span>
        </li>
        <li>
          <i class="iconfont icon-yuanxuankuang1"></i>
          <span>48小时快速退款</span>
        </li>
        <li>
          <i class="iconfont icon-yuanxuankuang1"></i>
          <span>满88元免邮费</span>
        </li>
      </ul>
    </div>
    <div class="order-defaultPage-noCart">
      <div class="contioner">
        <div class="img"></div>
        <div class="txt">
          <div class="noCart-login">
            <div class="noCart-title">
              去添加点什么吧
            </div>
            <div class="noCart-btn">
              登录
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>

  export default {}
</script>

<style lang="stylus" rel="stylesheet/stylus" scoped>
.order
  width 100%
  height 100%
  .order-header
    width 100%
    padding 20px 0
    text-align center
    background white
    height 40px
    span
      font-size 34px
    div
      float right
      position relative
      right 50px
      a
        span
          color #B4282D
          font-size 30px
  .order-servicePolicy
    position relative
    z-index 1
    height 40prx
    padding 20px
    background #f4f4f4
    .service-list
      display -moz-flex
      display flex
      -webkit-flex-flow row nowrap
      -moz-flex-flow row nowrap
      -ms-flex-flow row nowrap
      flex-flow row nowrap
      -webkit-box-align center
      -ms-flex-align center
      -webkit-align-items center
      -moz-align-items center
      align-items center
      -webkit-box-pack justify
      -ms-flex-pack justify
      -webkit-justify-content space-between
      -moz-justify-content space-between
      justify-content space-between
      li
        float left
        display flex
        -webkit-box-align center
        -ms-flex-align center
        -webkit-align-items center
        -moz-align-items center
        align-items center
        font-size .32rem
        color #666
        span
        line-height 40px
        .iconfont
          font-size 20px
  .order-defaultPage-noCart
    height 100%
    width 100%
    text-align center
    .contioner
      position absolute
      left 0
      right 0
      bottom 0
      top 140px
      background-color #f4f4f4
      .img

        background url("//yanxuan-static.nosdn.127.net/hxm/yanxuan-wap/p/20161201/style/img/icon-normal/noCart-a8fe3f12e5.png")
        display inline-block
        vertical-align middle
        width 248px
        height 248px
        margin-bottom 20px
        background-size 100%
        background-position center center
        background-repeat no-repeat
        margin-top 300px
</style>

