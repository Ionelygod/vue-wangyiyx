<template>
  <div class="CategoryModule">
    <ul>
      <li v-for="(Commodity,index) in categoryModule" :key="index">
        <CategoryItem :Commodity="Commodity" :index="index"/>
        <Split />
      </li>
    </ul>
  </div>
</template>
<script>
  import {mapState} from 'vuex'
  import CategoryItem from '../CategoryItem/CategoryItem.vue'
  export default {
    computed:{
      ...mapState({
        categoryModule : state => state.home.categoryModule
      })
    },
    components:{
      CategoryItem
    }
  }
</script>

<style lang="stylus" rel="stylesheet/stylus" scoped>

</style>

