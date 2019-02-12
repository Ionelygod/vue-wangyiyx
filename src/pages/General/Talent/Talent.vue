<template>
  <div class="talent">
    <div class="talent-warpper">
      <ul class="talent-list">
        <li v-for="(item,index) in TalentList" :key="index">
          <div class="colly" v-if="item.style === 1">
            <div class="li-header">
              <div>
                <img v-lazy="item.avatar" alt="图片">
              </div>
              <p>{{item.nickname}}</p><br/>
            </div>
            <div class="li-content">
              <span>{{item.title}}</span>
              <div>
                <img v-lazy="item.picUrl" alt="详情">
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
                  <img v-lazy="item.avatar" alt="图片">
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
                <img v-lazy="item.picUrl" alt="111">
              </div>
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
      this.$store.dispatch('getdaren',{page:1,size:5,tabId:4,cb:this.__initscroll})
      this.scroll = new BScroll('.talent-warpper',{
        click:true,
        scrollY:true,
        pullUpLoad: {
          threshold: 50
        }
      })
    },
    computed:{
      ...mapState({
        TalentList: state => state.general.TalentList
      })
    },
    methods:{
      __initscroll(){
        if(!this.scroll){
          this.scroll = new BScroll('.talent',{
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
              this.$store.dispatch('getdaren',{page:pageNum,size:5,tabId:4,cb:this.__initscroll})
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
  .talent
    position absolute
    top: 130px
    left: 0
    right: 0
    bottom: 0
    .talent-warpper
      width 100%
      height 100%
      margin-bottom 80px
      .talent-list
        padding-bottom 90px
        li
          .colly
            width 100%
            padding 20px 20px
            height 480px
            box-sizing border-box
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
</style>

