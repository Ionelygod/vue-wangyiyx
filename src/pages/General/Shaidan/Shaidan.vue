<template>
  <div class="shaidan">
    <div class="s-wrapper-container">
      <div class="shaidan-div">
        <p v-if="homeData.recModule">{{homeData.recModule.recommendName}}</p>
        <div>
          <img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABUAAAASCAYAAAC0EpUuAAAAAXNSR0IArs4c6QAAAa5JREFUOBHtU79Lw0AUbtKLydgKuungkqZLUXSWgGsFF90UnOvuJFIoIqij4N8gguIiOGsVpLUJLf0BOhachSppWr8LvuMSa6a6eRDer+99793LOyURc1qt1pLv+6lsNnsbAwtCjuOkGWN5z/MuWBQ8HA4ZyPZUVd2CPgt5CsyvpM1mcxHxErA2sBpIb0KklUplqtPpnCuKsgxQtN4Pu9FobILoDFgDOSIuSGu12rRhGE8AzIhojILiu4PB4GBUcZXydF0vQReEqPyJpBNcp0gYkpjfHMj2yf6Wz8Cv5nK5t6DTer0+j2tsU1UQ+gBsWJZ1FUkMTDRwBKxOMeh33W53xbbtD+4LOk0mkwUERNcgvM5kMiMJXdflt1kjQi6xIQUi5DYRWdyQzr2kh1SsTQiLZt6xcq4MIlJTdmqaVpbtiB7CIvbIxyVjWLVaTcE5KTv7/f56u93Ocx86KZumeUlxjIr/JDIT+BdpYA/J0ev1igwAjRyS3KFESL78ghTznkATAor4Agz+0Tmm65NjLPKfdCxjDJH8yUwZ1sPD9xAqJRmIvUomf5IveBxxeO8LApO5RtUTsYIAAAAASUVORK5CYII=" alt="">
          <span>{{collection.title}}</span>
          <img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABUAAAASCAYAAAC0EpUuAAAAAXNSR0IArs4c6QAAAbpJREFUOBHtVD1Lw1AUbZLXWklBnBx0aulXFgcnRXDwByj6B3QRdFEXxcVBl+Lk2D8guFT9AQpCFZxEQgoxySiOjkJjmnhe7A0vz3armw/CPefck3vfF0/pdDoFVVVPMsPHY71eb1HacZy1Xq+3SFyOYRges263O67r+r6cJB5F0RhwUhQ/LWMSO5SXo+/7DVUWR8H/i45iF9M1/mRPmaIoX+jTFnoVgaeJa5oWEuYR3MO1iv2IGq7XgpjP5/OhIgoc27Z9jUarpOOeHtZqtTPiYrQsazabzb6QBu9ntVot/Fo+Os+TqR9fJZ5QxljKi8k4+KJUUdM0i+g2lfz1A2yJJxRbkSqKf+MJsMQBkMvljkSOrs+VSsUVNcJ4MwwUWSHOI/yXPMZFXdedwaafgm9wkQZmsgtj6qBQSPE8bx3+c+AJ8gLfYe9vOGdY8iQED5g/HMmAdlEqlR4SoQ8wgQZyB6IO7qPJHmlqEAQMolywiVPcJJMY8ezpIkexd6xoyTAMi/TUQaH4B0xbWMY2ls3v79CBfITkLfxz5XL5STTGlx/Fmki28BjfwxyIhgHYhIfv9RUO8W1APvMNUkiynjpNcYQAAAAASUVORK5CYII=" alt="">
        </div>
        <div class="s-list-wrapper swiper-container swiper-container-coverflow swiper-container-3d swiper-container-horizontal swiper-container-ios">
          <ul class="s-list">
            <li v-for="(li,index) in collection.lookList" :key="index">
              <div>
                <img v-lazy="li.banner.picUrl" :alt="li.banner.content">
              </div>
            </li>
          </ul>
        </div>

      </div>
      <Split />
      <div class="s-wrapper">
        <div class="s-title" v-if="homeData.recModule">
          <p >{{homeData.recModule.globalName}}</p>
        </div>
        <div class="s-tab">
          <div :class="{active:tabNum === 1}" @click="cutNumRts(1)">
            <p>最新</p>
          </div>
          <div :class="{active:tabNum === 2}" @click="cutNumRts(2)">
            <p>{{homeData.hotTabName}}</p>
          </div>
          <div v-if="homeData.recModule" :class="{active:tabNum === 3}" @click="cutNumRts(3)">
            <p>{{homeData.recModule.topicTagName}}</p>
          </div>
        </div>
        <!--晒单瀑布流图片区-->
        <div class="s-newest-wrapper" v-if="tabNum === 1">
          <div v-if="item.content" class="s-newest" v-for="(item,index) in newestArray" :key="index">
            <div class="s-newest-lookImage" style="width:100%" >
              <img :style="{width:800/ 5 + 'px',height:item.bannerInfo.height / 5 + 'px'}" v-lazy="item.bannerInfo.picUrl" alt="">
            </div>
            <div class="s-newest-desc">
              <span>{{item.content}}</span>
            </div>
            <div class="s-newest-lookdetail">
              <div class="li-header">
                <div>
                  <img v-lazy="item.avatar" alt="图片">
                </div>
                <p>{{item.nickName}}</p><br/>
              </div>
            </div>
          </div>
          <Split />
        </div>
        <div class="s-hottest" v-if="tabNum === 2">
          <div class="left">
            <div v-if="index % 2 === 0" v-for="(item,index) in hottestArray" :key="index">
              <div class="s-newest-lookImage" style="width:100%">
              <img :style="{width:item.bannerInfo.width/ 4 + 'px',height:item.bannerInfo.height / 4 + 'px'}" v-lazy="item.bannerInfo.picUrl" alt="">
            </div>
              <div class="s-newest-desc">
                <span>{{item.content}}</span>
              </div>
              <div class="s-newest-lookdetail">
                <div class="li-header">
                  <div>
                    <img v-lazy="item.avatar" alt="图片">
                  </div>
                  <p>{{item.nickName}}</p><br/>
                </div>
              </div>
            </div>
          </div>
          <div class="right">
            <div v-if="index % 2 === 1" v-for="(item,index) in hottestArray" :key="index">
              <div class="s-newest-lookImage" style="width:100%" >
                <img :style="{width:item.bannerInfo.width/ 4 + 'px',height:item.bannerInfo.height / 4 + 'px'}" v-lazy="item.bannerInfo.picUrl" alt="">
              </div>
              <div class="s-newest-desc">
                <span>{{item.content}}</span>
              </div>
              <div class="s-newest-lookdetail">
                <div class="li-header">
                  <div>
                    <img v-lazy="item.avatar" alt="图片">
                  </div>
                  <p>{{item.nickName}}</p><br/>
                </div>
              </div>
            </div>
          </div>
          <Split />
        </div>
        <div class="s-collection" v-if="tabNum === 3">
          <div class="left" >
           <div v-if="index % 2 === 0" v-for="(item,index) in collectionArray" :key="index">
           <!--<div  v-for="(item,index) in collectionArray" :key="index">-->
             <div class="lookImage">
               <img v-lazy="item.bannerInfo.picUrl" alt="">
             </div>
             <div class="look-desc">
               <p>{{item.collection.title}}</p>
               <span>{{item.collection.subtitle}}</span>
             </div>
           </div>
          </div>
          <div class="right" >
            <div v-if="index % 2 === 1" v-for="(item,index) in collectionArray" :key="index">
            <!--<div v-for="(item,index) in collectionArray" :key="index">-->
              <div class="lookImage">
                <img v-lazy="item.bannerInfo.picUrl" alt="">
              </div>
              <div class="look-desc">
                <p>{{item.collection.title}}</p>
                <span>{{item.collection.subtitle}}</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
  import {mapState} from 'vuex'
  import BScroll from 'better-scroll'
  import Swiper from 'swiper'
  import {reNewestList} from '../../../api'
  export default {
    data(){
      return {
        tabNum:1,  //1 最新   // 2  本月最热   //3  晒单合辑
        pageNum:1,
        isFirst:true,
        newestArray:[],
        hottestArray:[],
        collectionArray:[]
      }
    },
    mounted(){
      this.$store.dispatch('gethomeData')
      this.$store.dispatch('getcollection',26)
      this.newestArrAsync(1,1)
      new BScroll('.s-list-wrapper',{
         click:true,
         scrollX:true
      })
    },
    computed:{
      ...mapState({
        homeData : state => state.general.homeData,
        collection : state => state.general.collection,
        NewestList : state => state.general.NewestList,
      })
    },
    methods:{
      cutNumRts(index){
        this.tabNum = index
        const {tabNum} = this
        this.newestArrAsync(1,tabNum)
      },
      initscroll(){
        if(!this.scroll){
          this.scroll = new BScroll('.shaidan',{
            click:true,
            scrollY:true,
            pullUpLoad: {
              threshold: 0, // 当下拉到超过顶部 50px 时，触发 pullingDown 事件
              //stop: 20 // 刷新数据的过程中，回弹停留在距离顶部还有 20px 的位置
            }
          })
        }else{
            this.scroll.on('pullingUp',()=>{
              if(this.timeoutId){
                console.log(clearTimeout(this.timeoutId));
              }
              ++this.pageNum
              const {pageNum,tabNum} = this
              this.timeoutId = setTimeout(() => {
                this.newestArrAsync(pageNum,tabNum)
              }, 1000)
              this.scroll.finishPullUp()
              this.scroll.refresh()
            })
        }
      },

      async newestArrAsync(page,type){
        const result = await reNewestList({page:page,size:20,type:type})

        if(result.code === '200'){
          const newestli = result.data.topicList
          if(type === 1){
            this.newestArray = this.newestArray.concat(newestli)
          }else if(type === 2){
            this.hottestArray = this.hottestArray.concat(newestli)
          }else if(type === 3){
            this.collectionArray = this.collectionArray.concat(newestli)
          }
          this.initscroll()
        }
      }
    },
    watch:{
      newestArray(val){
        this.$nextTick(()=>{
          this.initscroll()
        })
      }
    }
  }
</script>

<style lang="stylus" rel="stylesheet/stylus" scoped>
  @import "../../../assets/stylus/mixins.styl"
.shaidan
  position absolute
  top 130px
  left 0
  right 0
  bottom 0
  height 100%
  width 100%
  overflow hidden
  .s-wrapper-container
    padding-bottom 120px
    .shaidan-div
      height 420px
      width 100%
      padding 20px 0
      box-sizing border-box
      text-align center
      clearFix()
      p
        font-size 26px
        color #7f7f7f
        margin-bottom 30px
      div

        margin-bottom 30px
        span
          font-size 32px
          color #333
        img
          width 20px
          height 20px
          &:nth-child(1)
            vertical-align super
          &:nth-child(3)
            vertical-align sub
      .s-list-wrapper
        width 100%
        clearFix()
        height 250px
        .s-list
          height 250px
          white-space nowrap
          float left
          li
            margin 20px 10px
            display inline-block
            width 200px
            div
              width 200px
              height 200px
              img
                height 100%
                width 100%
    .s-wrapper
      width 100%
      background white
      clearFix()
      .s-title
        margin 30px 0
        text-align center
        p
          font-weight bold
          width 100%
          font-size 32px

      .s-tab
        width 100%
        display flex
        justify-content space-around
        >div
          width 180px
          height 60px
          background #F4F4F4
          text-align center
          line-height 60px
          border-radius 8px
          font-size 28px
          &.active
            color #b0955f
            background #FFE4AF
            font-weight bold
      .s-newest-wrapper
        clearFix()
        column-count 2
        column-width 50%
        margin-top 40px
        min-height 100%
        .s-newest
          width 100%
          padding 10px 0 10px 20px
          box-sizing border-box
          .s-newest-lookImage
            width 100%s
            overflow hidden
            border-radius 20px 20px 0 0
            img
              width  100%
              height 100%

          .s-newest-desc
            margin 10px 0
            height 50px
            display: -webkit-box;
            -webkit-box-orient: vertical;
            -webkit-line-clamp: 2;
            overflow: hidden;
          .s-newest-lookdetail
            height 40px
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
                font-size 16px
                margin-left 15px
                line-height 40px
                vertical-align margin-bottom

      .s-hottest
        clearFix()
        .left
          padding 10px
          box-sizing border-box
          width 50%
          float left
          .s-newest-lookImage
            width 100%
            overflow hidden
            border-radius 10px 10px 0 0
            img
              display block
              margin 0 auto
              width  100%

          .s-newest-desc
            margin 20px 0
            height 50px
            display: -webkit-box;
            -webkit-box-orient: vertical;
            -webkit-line-clamp: 2;
            overflow: hidden;
          .s-newest-lookdetail
            height 60px
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
                font-size 16px
                margin-left 15px
                line-height 40px
                vertical-align margin-bottom

        .right
          padding 10px
          box-sizing border-box
          width 50%
          float left
          .s-newest-lookImage
            width 100%
            overflow hidden
            border-radius 10px 10px 0 0
            img
              display block
              margin 0 auto
              width  100%

          .s-newest-desc
            margin 20px 0
            height 50px
            display: -webkit-box;
            -webkit-box-orient: vertical;
            -webkit-line-clamp: 2;
            overflow: hidden;
          .s-newest-lookdetail
            height 60px
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
                font-size 16px
                margin-left 15px
                line-height 40px
                vertical-align margin-bottom

      .s-collection
        width 100%
        margin-top 40px
        padding 0 10px
        clearFix()
        .left
          float left
          padding 0 5px 0 10px
          box-sizing border-box
          width 50%
          /*width 50%*/
          /*-webkit-box-align center*/
          /*-webkit-align-items center*/
          /*align-items center*/
          /*-webkit-box-orient vertical*/
          /*-webkit-box-direction normal*/
          /*-webkit-flex-direction column*/
          /*flex-direction column*/
          .lookImage
            width 98%
            border-radius 10px
            overflow hidden
            img
              width 100%
          .look-desc
            height 90px
            width 100%
            background #F4F4F4
            text-align center
            padding 50px 0
            p
              font-weight bold
              margin 0px auto
              font-size 32px
              display block
              width 90%
              white-space nowrap
              text-overflow ellipsis
              overflow hidden
            span
              width 90%
              display inline-block
              margin-top 20px
              font-size 24px
        .right
          padding 0 20px 0 0
          box-sizing border-box
          float left
          width 50%
          /*width 50%*/
          /*-webkit-box-align center*/
          /*-webkit-align-items center*/
          /*align-items center*/
          /*-webkit-box-orient vertical*/
          /*-webkit-box-direction normal*/
          /*-webkit-flex-direction column*/
          /*flex-direction column*/
          .lookImage
            width 98%
            border-radius 10px
            overflow hidden
            img
              width 100%
          .look-desc
            height 90px
            width 100%
            background #F4F4F4
            text-align center
            padding 30px 0
            p
              font-weight bold
              margin 0px auto
              font-size 32px
              display block
              width 90%
              white-space nowrap
              text-overflow ellipsis
              overflow hidden
            span
              width 90%
              display inline-block
              margin-top 20px
              font-size 24px
</style>

