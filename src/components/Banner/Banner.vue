<template>
  <div class="swiper-container">
    <div class="swiper-wrapper">

      <div class="swiper-slide" v-for="(item, index) in focusList" :key="index" >
        <img v-lazy="item.picUrl">
      </div>
    </div>
  </div>
</template>
<script>
  import {mapState} from 'vuex'
  import Swiper from 'swiper'
  export default {
    mounted(){
      this.$store.dispatch('getbanner',()=>{
        this.$nextTick(()=>{
          new Swiper('.swiper-container', {
            autoplay: true,//可选选项，自动滑动
            effect : 'fade',
            loop:true
          })
        })
      })
    },
    methods:{

    },
    computed:{
      ...mapState({
        focusList: state => state.home.focusList,
      })
    }
  }
</script>

<style lang="stylus" rel="stylesheet/stylus" scoped>
  .swiper-container
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


</style>

