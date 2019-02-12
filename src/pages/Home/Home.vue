<template>
  <div class="app">
    <HomeHeader />
    <div class="main">
        <Banner />
      <div class="m-indexServicePolicy">
        <div class="swiper-bottom">
          <ul class="swiper-bottom-list">
            <li v-for="(li, index) in policyDescList" :key="index">

              <img v-lazy="li.icon" alt="权威">
              <span>{{li.desc}}</span>
            </li>
          </ul>
        </div>
      </div>
      <div class="m-carousel">
        <KingKong />
        <Split />
      </div>
      <div class="m-freshmanModule">
        <Freshman />
        <Split />
      </div>
      <div class="m-indexManufacturersSupplying">
        <Manufacturers />
        <Split />
      </div>
      <div class="m-categoryHotSellModule m-indexFloor">
        <Category />
        <Split />
      </div>
      <div class="m-categoryModule">
        <CategoryModule />
        <Split />
      </div>
    </div>
  </div>
</template>
<script>
  import HomeHeader from '../../components/HomeHeader/HomeHeader.vue'
  import {mapState} from 'vuex'
  import Swiper from 'swiper'
  import Banner from '../../components/Banner/Banner.vue'
  import KingKong from '../../components/KingKong/KingKong.vue'
  import Freshman from '../../components/Freshman/Freshman.vue'
  import Manufacturers from '../../components/Manufacturers/Manufacturers.vue'
  import Category from '../../components/Category/Category.vue'
  import CategoryModule from '../../components/CategoryModule/CategoryModule.vue'
export default {
  mounted(){
    this.$store.dispatch('gethome',()=>{
      this.$nextTick(()=>{
//        new Swiper('.swiper-container-banner', {
//          autoplay: true,//可选选项，自动滑动
//          effect : 'fade'
//        })
      })
    })
  },
  computed:{
    ...mapState({
      focusList: state => state.home.focusList,
      policyDescList: state => state.home.policyDescList,
    })
  },
  methods:{
    wrapper(){
      console.log(this.focusList);
    }
  },
  components:{
    HomeHeader,
    Banner,
    KingKong,
    Freshman,
    Manufacturers,
    Category,
    CategoryModule
  }
}
</script>
<style lang="stylus" rel="stylesheet/stylus" scoped>
  .app
    margin-bottom 120px
    .main
      margin-top 160px
      margin-bottom 70px
      .m-indexSlide
        .swiper-container-banner
          width 100%
          .swiper-wrapper
            width 800%
            height 400px
            overflow hidden
            .swiper-slide
              float left
              width 12.5%
              img
                width 100%

      .swiper-bottom
        height 50px
        .swiper-bottom-list
          height 100%
          display flex
          justify-content space-around
          li
            float left
            line-height 50px
            img
              height 30px
              vertical-align middle
            span
              color #B4282D

      /*.m-carousel*/
        /*color red*/
</style>

