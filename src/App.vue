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
      this.$store.dispatch('getAddress');
      this.$store.dispatch('getUserInfo')
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
