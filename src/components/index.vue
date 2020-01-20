<template>
  <div class="site-index">
    <site-nav></site-nav>
    <site-banner></site-banner>
    <site-header></site-header>
    <site-tabs></site-tabs>
    <main>
      <div class="main-screen-wrap">
        <div class="container">
          <category></category>
          <Carousel class="carousel"
            v-model="carouselConfig.carouselIndex"
            :autoplay="carouselConfig.autoplay"
            :autoplay-speed="carouselConfig.autoplaySpeed"
            :dots="carouselConfig.dots"
            :radius-dot="carouselConfig.radiusDot"
            :trigger="carouselConfig.trigger"
            :arrow="carouselConfig.arrow">
            <CarouselItem v-for="item in carouselConfig.slider" :key="item">
              <img :src="item" alt="首页大图轮播" />
            </CarouselItem>
          </Carousel>
          <section class="sec-wrap">
            <user-login></user-login>
            <news-top10></news-top10>
          </section>
        </div>
      </div>
      <div class="theme-wrap">
        <div class="container">
          <h2 class="h2"> - 主题专场 - </h2>
          <div class="row">
            <div class="col" v-for="item in themeList" :key="item.title">
              <div class="theme-card">
                <img :src="item.bgPic" />
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="recommend-wrap">
        <div class="container" v-if="recommends.length" >
          <h2 class="h2"> - 热门推荐 - </h2>
          <div class="card-group clearfix">
            <card v-for="goods in recommends" :goods="goods" :key="goods.num_iid"></card>
          </div>
          <Page
            class="page"
            :total="pageConfig.total"
            :current="pageConfig.pageNo"
            :page-size="pageConfig.pageSize"
            show-total
            show-elevator
            @on-change="handlePage" />
        </div>
      </div>
    </main>
    <site-footer ref="siteFooter" v-if="recommends.length"></site-footer>
  </div>
</template>

<script type="text/ecmascript-6">
//components
import SiteNav from 'components/site-nav'
import SiteBanner from 'components/site-banner'
import SiteHeader from 'components/site-header'
import SiteTabs from 'components/site-tabs'
import Category from 'components/category'
import Card from 'components/card'
import { Carousel, CarouselItem, Page } from 'iview'
import UserLogin from 'components/user-login'
import NewsTop10 from 'components/news-top10'
import SiteFooter from 'components/site-footer'

//data
import Custom from '../../custom.json'
import { TbkDgOptimusMaterialRequest } from 'api/index'

export default {
  name: 'site-index',
  props: {},
  data() {
    return {
      carouselConfig: {
        slider: [],
        carouselIndex: 0,
        autoplay: true,
        autoplaySpeed: 5000,
        dots: 'inside',
        radiusDot: false,
        trigger: 'click',
        arrow: 'always'
      },
      themeList: [],
      recommends: [],
      recommendsType: 13366,
      pageConfig: {
        total: 500,
        pageNo: 1,
        pageSize: 50
      }
    }
  },
  computed: {},
  watch: {},
  mounted() {},
  created() {
    this.carouselConfig.slider = Custom.slider
    this.themeList = Custom.themeList
    this.TbkDgOptimusMaterialRequest()
  },
  methods: {
    TbkDgOptimusMaterialRequest() {
      TbkDgOptimusMaterialRequest({
        materialId: this.recommendsType,
        pageNo: this.pageConfig.pageNo,
        pageSize: this.pageConfig.pageSize
      }).then((res) => {
        //console.log(res)
        if (res.code === '200') {
          let data = res.data.result_list.map_data
          this.recommends = data
          console.log(this.recommends)
        }
      })
    },
    handlePage(pageNo) {
      TbkDgOptimusMaterialRequest({
        materialId: this.recommendsType,
        pageNo: pageNo,
        pageSize: this.pageConfig.pageSize
      }).then((res) => {
        //console.log(res)
        if (res.code === '200') {
          let data = res.data.result_list.map_data
          this.recommends = data
          //console.log(this.recommends.length)
        }
      })
      //指定滚动条位置
      //this.$refs.siteFooter.onBackTop()
    }
  },
  components: {
    SiteNav,
    SiteBanner,
    SiteHeader,
    SiteTabs,
    Category,
    Carousel,
    CarouselItem,
    Page,
    Card,
    UserLogin,
    NewsTop10,
    SiteFooter
  }
}
</script>

<style scoped lang="stylus">
.site-index
  .main-screen-wrap
    background-color: #ff9dbf
    & > .container
      display: flex
      .sec-wrap
        width: 220px
        background-color: #fff
      .carousel
        position: relative
        width: 780px
        height: 400px
        overflow: hidden
  .theme-wrap
    & > .container
      & > .h2
        background-color: #a1a1a1
        text-align: center
      .theme-card
        position: relative
        margin: 0 auto
        width: 216px
        height: 266px
        & > img
          position: absolute
          top: 0
          left: 0
          display: block
          width: 100%
      .theme-card:hover
        border: 5px solid transparent
  .recommend-wrap
    & > .container
      padding: 0
      width: 1248px
      & > .h2
        text-align: center
        background-color: #a1a1a1
      .page
        display: block
        margin: 0 auto
        padding: 20px 0 30px
        width: 620px
</style>