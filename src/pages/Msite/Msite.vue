<template>
  <div class="msite">
    <!--首页头部-->
    <TopHeader :title="address.name">
      <span class="header_search" slot="left" @click="$router.push('/search')">
        <i class="iconfont icon-sousuo"></i>
      </span>
      <span class="header_login" slot="right" @click="$router.push('/login')">
        <span class="header_login_text">登录|注册</span>
      </span>
    </TopHeader>
    <!--首页导航-->
    <nav class="msite_nav border-1px">
      <div class="swiper-container">
        <div class="swiper-wrapper">
          <div class="swiper-slide" v-for="(categorys,index) in categorysArr" :key="index">
            <a href="javascript:" class="link_to_food" v-for="(category,index) in categorys" :key="index">
              <div class="food_container">
                <img :src="baseImgUrl+category.image_url">
              </div>
              <span>{{category.title}}</span>
            </a>
          </div>
        </div>
        <!-- Add Pagination -->
        <div class="swiper-pagination"></div>
      </div>
    </nav>
    <!--首页附近商家-->
    <div class="msite_shop_list border-1px">
      <div class="shop_header">
        <i class="iconfont icon-xuanxiang"></i>
        <span class="shop_header_title">附近商家</span>
      </div>

      <ShopList/>
    </div>
  </div>
</template>
<script>
  import Swiper from 'swiper'
  import 'swiper/dist/css/swiper.min.css'
  import ShopList from '../../components/ShopList/ShopList.vue'
  import {mapState} from 'vuex'

  export default {
    data() {
      return {
        baseImgUrl: 'https://fuss10.elemecdn.com'
      }
    },
    components: {
      ShopList
    },
    mounted() {
      //异步获取商家列表
      this.$store.dispatch('getShops');
      //异步获取商品分类列表
      this.$store.dispatch('getCategorys');
    },
    computed: {
      ...mapState(['address', 'categorys']),
      //生成一个二维数组，包含n个小数组，雄安数组中最大元素个数为8
      categorysArr() {
        const {categorys} = this; //一维数组
        const arr = []; //二维数组
        let smallArr = []; //小数组
        categorys.forEach(c => {
          if (smallArr.length === 0) {
            arr.push(smallArr);
          }
          smallArr.push(c);
          if (smallArr.length === 8) {
            smallArr = []
          }
        });
        return arr
      }
    },
    watch: {
      categorys(value) {
        this.$nextTick(() => {
          //初始化列表显示之后执行
          new Swiper('.swiper-container', {
            pagination: {
              el: '.swiper-pagination',
            },
            loop: true
          })
        })
      }
    }
  }
</script>
<style lang="stylus" rel="stylesheet/stylus">
  @import "../../common/stylus/mixins.styl"

  .msite
    width 100%
    .msite_nav
      bottom-border-1px(#e4e4e4)
      margin-top 45px
      height 200px
      background #fff
      .swiper-container
        width 100%
        height 100%
        .swiper-wrapper
          width 100%
          height 100%
          .swiper-slide
            display flex
            justify-content center
            align-items flex-start
            flex-wrap wrap
            .link_to_food
              width 25%
              .food_container
                display block
                width 100%
                text-align center
                padding-bottom 10px
                font-size 0
                img
                  display inline-block
                  width 50px
                  height 50px
              span
                display block
                width 100%
                text-align center
                font-size 13px
                color #666
        .swiper-pagination
          > span.swiper-pagination-bullet-active
            background #02a774
    .msite_shop_list
      top-border-1px(#e4e4e4)
      margin-top 10px
      background #fff
      .shop_header
        padding 10px 10px 0 10px
        .shop_icon
          margin-left 5px
          color #999
        .shop_header_title
          color #999
          font-size 14px
          line-height 20px
</style>
