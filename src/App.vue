<template>
  <div>
    <router-view/>
    <FooterGuide v-if="$route.meta.showFooter"/>
  </div>
</template>

<script>
  import FooterGuide from './components/FooterGuide/FooterGuide.vue';

  export default {
    mounted() {
      //异步获取地址，并保存到state
      this.$store.dispatch('getAddress');
      //异步获取user，并保存到state
      this.$store.dispatch('getUser');

    },
    components: {
      FooterGuide
    }
  }
</script>

<style lang="stylus" type="text/stylus" rel="stylesheet/stylus">
  #app
    width 100%
    height 100%
</style>
