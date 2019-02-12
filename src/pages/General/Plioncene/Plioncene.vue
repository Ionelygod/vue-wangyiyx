<template>
  <div class="plioncene">
    <div class="plioncene-warpper">
      <ul class="plioncene-list">
        <li v-for="(item,index) in OnTheNewList" :key="index">
          <div class="colly" v-if="item.style === 1">
            <div class="li-header">
              <div>
                <img :src="item.avatar" alt="图片">
              </div>
              <p>{{item.nickname}}</p><br/>
            </div>
            <div class="li-content">
              <span>{{item.title}}</span>
              <div>
                <img :src="item.picUrl" alt="详情">
              </div>
            </div>
            <div class="read-count">
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
          <div class="tpls-new" v-if="item.style ===3">
            <div class="tpls-new-title">
              <p>{{item.title}}</p>
              <span>{{item.subTitle}}</span>
            </div>
            <ul class="tpls-new-content1" v-if="item.itemList">
              <li  class="fivePicture" v-for="(pic,i) in item.itemList" :key="i">
                  <img v-if="pic" v-lazy="pic.itemUrl" alt="图片">
              </li>
            </ul>
            <!--<ul class="tpls-new-content2" v-if="item.itemList">-->
            <!--<li v-if="index > 4" class="threePicture" v-for="(li,j) in item.itemList" :key="j">-->
              <!--<img v-if="li" :src="li.itemUrl" alt="图片">-->
            <!--</li>-->
          <!--</ul>-->

            <div class="tpls-new-read">
              <i class="iconfont icon-chakan"></i>
              <span>{{item.readCount}}人看过</span>
            </div>
          </div>

          <Split/>
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
        pageNum:1,
        isFirst:true
      }
    },
    mounted(){
      this.$store.dispatch('getplioncene',{page:1,size:5,tabId:5,cb:this.__initscroll})
      this.scroll = new BScroll('.plioncene-warpper',{
        click:true,
        scrollY:true,
        pullUpLoad: {
          threshold: 50
        }
      })
    },
    computed:{
      ...mapState({
        OnTheNewList: state => state.general.OnTheNewList
      })
    },
    methods:{
      __initscroll(){
        if(!this.scroll){
          this.scroll = new BScroll('.plioncene',{
            click:true,
            scrollY:true,
            pullUpLoad: {
              threshold: 50
            }
          })
        }else{
          if(this.isFirst){
            this.scroll.on('pullingUp',()=>{
              this.isFirst = false
              ++this.pageNum
              const {pageNum} = this
              this.$store.dispatch('getplioncene',{page:pageNum,size:5,tabId:5,cb:this.__initscroll})
              this.scroll.finishPullUp()
            })
          }
          this.scroll.refresh()
          this.isFirst = true
        }
      }
    },
  }
</script>


<style lang="stylus" rel="stylesheet/stylus" scoped>
  @import '../../../assets/stylus/mixins.styl'
  .plioncene
    position absolute
    top: 220px
    left: 0
    right: 0
    bottom: 0
    .plioncene-warpper
      width 100%
      height 100%
      margin-bottom 80px
      .plioncene-list
        li
          .colly
            width 100%
            padding 20px 20px
            height 480px
            .li-header
              width 100%
              height 50px
              clearFix()
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
                margin 20px 0
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
            clearFix()
            height 270px
            .left
              float left
              width 60%
              height 230px
              clearFix()
              .left-top
                height 40px
                clearFix()
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
                  margin 20px 0
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
              position relative
              right -20px
              top 0
              z-index -1
              div
                margin 0
                width 200px
                height 200px
                border-radius 10px
                overflow hidden
                img
                  height 100%
          .tpls-new
            width 100%
            padding 20px 20px
            box-sizing border-box
            height 420px
            .tpls-new-title
              width 100%
              p
                font-size 28px
                margin-bottom 10px
              span
                color #8c8c8c
            .tpls-new-content1
              clearFix()
              .fivePicture
                float left
                width 17%
                height 100px
                margin 10px
                background #F4F4F4
                &:nth-child(7)
                  margin 10px 150px
                img
                  height  100%
            .tpls-new-content2
              height 100px
              display flex
              .threePicture
                float left
                background #F4F4F4
                height 100px
                margin 10px
                &:nth-child(5)
                  margin 5px 75px
                img
                  height 100%
</style>



