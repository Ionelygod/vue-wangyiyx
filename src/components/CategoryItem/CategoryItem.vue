<template>
  <div class="categoryItem" >
    <div class="categoryItem-img">
      <div v-if="Commodity.titlePicUrl" >
        <img v-if="Commodity.titlePicUrl" v-lazy="Commodity.titlePicUrl" alt="img">
      </div>
    </div>
    <div class="better-scroll-container">
      <div class="better-scroll-wrapper" >
        <div class="better-scroll-slide" v-for="(item,index) in Commodity.itemList" :key="index">
          <div>
            <img v-if="item.listPicUrl" v-lazy="item.listPicUrl" alt="img">
          </div>
          <span>{{item.name}}</span>
          <p>￥{{item.retailPrice}}&nbsp;<span>{{item.counterPrice}}</span></p>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
  import BScroll from 'better-scroll'
  export default {
    props:{
      Commodity:Object,
      index:Number
    },
    data(){
      return {
        classArr : ['identifyA','identifyB','identifyC','identifyD','identifyE','identifyF','identifyG','identifyH','identifyI','identifyJ','identifyK','identifyL','identifyM'],
        identify:''
      }
    },
    mounted(){
      const divList = document.getElementsByClassName('better-scroll-container')
      for (var i = 0; i < divList.length; i++) {
        const item = divList[i]
        new BScroll(item,{
          click:true,
          scrollX:true
        })
      }
    },
//    watch:{
//      Commodity(){
//        this.$nextTick(()=>{
//          if(!this.scroll){
//            this._initScroll()
//          }else{
//            this.scroll.refresh()
//          }
//        })
//      }
//    }
  }
</script>

<style lang="stylus" rel="stylesheet/stylus" scoped>
  @import "../../assets/stylus/mixins.styl"
.categoryItem
  width 100%
  margin-bottom 30px
  clearFix()
  overflow hidden
  .categoryItem-img
    width 100%
    img
      width 100%
  .better-scroll-container
    float left
    width 100%
    clearFix()
    overflow hidden
    .better-scroll-wrapper
      width 220%
      float left
      padding-left 30px
      box-sizing border-box
      .better-scroll-slide
        float left
        padding-top 30px
        box-sizing border-box
        width 200px
        display inline-block
        flex-direction column
        div
          width 180px
          background #F4F4F4
          margin-bottom 10px
          img
            width 100%
        >span
          display: block;
          width 180px
          height 50px
          display: -webkit-box;
          -webkit-box-orient: vertical;
          -webkit-line-clamp: 2;
          overflow: hidden;
        p
          color red
          span
            color #8c8c8c
            text-decoration line-through
</style>

