<template>
  <div>
    <router-view/>
    <Footer />
  </div>
</template>

<script>
  import Footer from './components/Footer/Footer.vue'
export default {
    components:{
      Footer
    }
}
</script>

<style>
  /*html,body {*/
    /*height: 100%;*/
    /*overflow: hidden;*/
  /*}*/
</style>
