<template>
  <ul class="list">
    <li v-for="(item,index) in kingKongModule.kingKongList" :key="index">
      <a :href="item.schemeUrl">
        <img v-lazy="item.picUrl" :alt="item.text">
        <span>{{item.text}}</span>
      </a>
    </li>
  </ul>
</template>
<script>
  import {mapState} from 'vuex'
  export default {
    computed:{
      ...mapState({
        kingKongModule:state => state.home.kingKongModule
      })
    }
  }
</script>

<style lang="stylus" rel="stylesheet/stylus" scoped>
.list
  width 100%
  height 400px
  li
    a
      display flex
      justify-content center
      align-items center
      flex-direction column
      width 20%
      float left
      margin 10px 0
      img
        width 80%
      span
        margin-top 10px
</style>

