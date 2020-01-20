<template>
  <div class="detail">
    <site-nav></site-nav>
    <site-header></site-header>
    <site-tabs></site-tabs>
    <main class="site-main">
      <div class="container">
        <nav-breadcrumb></nav-breadcrumb>
        <div class="content-inline">
          <!-- 模特展示图片 -->
          <div class="gallery-wrap">
            <div class="box">
              <img class="pic-lg" :src="goods.pict_url"/>
            </div>
            <div class="thumbnail">
              <ul class="list-group" v-if="goods.small_images">
                <li class="list-item" v-for="item in goods.small_images.string" :key="item">
                  <a href="#">
                    <img :src="item"/>
                  </a>
                </li>
              </ul>
            </div>
          </div>
          <!-- 商品详细 -->
          <div class="detail-wrap">
            <!-- 商品信息 -->
            <div class="goods-info">
              <h2 class="title" :href="goods.coupon_click_url">{{ goods.title }}</h2>
              <p class="desc">{{ goods.item_description }}</p>
              <hr class="hr">
              <div class="content-inline">
                <span>券后价：</span>
                <span class="price">{{ Number(goods.zk_final_price) - Number(goods.coupon_amount) }}</span>
              </div>
              <div>
                <span>在售价：</span>
                <span>{{ goods.zk_final_price }}</span>
              </div>
              <del class="ml-1">
                <span class="lab">￥</span>
                <span>{{ goods.zk_final_price }}</span>
              </del>
              <div>
                <span class="lab">月销：</span>
                <span class="">{{ goods.volume }}</span>
              </div>
            </div>
            <!-- 商家信息 -->
            <div class="seller-info">
              <div class="content-inline">
                <span class="lab">店铺类型：</span>
                <span class="">{{ goods.user_type }}</span>
              </div>
              <div class="content-inline">
                <span class="lab">商家ID：</span>
                <span class="">{{ goods.seller_id }}</span>
              </div>
              <div class="content-inline">
                <span class="lab">店铺名称：</span>
                <span class="">{{ goods.nick }}</span>
              </div>
            </div>
            <!-- 优惠券信息 -->
            <div class="coupon-info">
              <div class="circle left"></div>
              <div class="circle right"></div>
              <div class="layout-left">
                <div class="amount">
                  <span class="yuan">￥</span>
                  <span class="fs">{{ goods.coupon_amount }}</span>
                </div>
                <p class="text">元优惠券</p>
                <p class="text">有效期限</p>
                <p class="date">
                  <span>{{ new Date(goods.coupon_start_time) }}</span>
                  <span> - </span>
                  <span>{{ new Date(goods.coupon_end_time) }}</span>
                </p>
              </div>
              <a class="layout-right" :href="goods.coupon_click_url" target="_blank">点击领取</a>
            </div>
          </div>
          <!-- 右侧边栏 -->
          <aside class="aside-wrap">
                          <!-- <div class="content-inline">
                <span class="lab">剩余</span>
                <span class="">{{ goods.coupon_remain_count }}</span>
              </div>
              <div class="content-inline">
                <span class="lab">优惠券总数：</span>
                <span class="">{{ goods.coupon_total_count }}</span>
              </div> -->
            <h4>- 相关推荐商品 -</h4>
            <ul class="recommend-list">
              <li class="list-item" v-for="item in recommends" :key="item.num_iid">
                <img :src="item.pict_url">
                <div class="overlay">
                  <span>￥</span>
                  <span>{{ item.zk_final_price }}</span>
                </div>
              </li>
            </ul>
          </aside>
        </div>
      </div>
    </main>
  </div>
</template>

<script type="text/ecmascript-6">
//components
import SiteNav from 'components/site-nav'
import SiteHeader from 'components/site-header'
import SiteTabs from 'components/site-tabs'
import NavBreadcrumb from 'components/nav-breadcrumb'

//data
import { mapGetters } from 'vuex'

//const
//const ERR_OK = '200'

export default {
  name: 'detail',
  props: {},
  data() {
    return {}
  },
  computed: {
    ...mapGetters([
      'goods'
    ])
  },
  watch: {},
  mounted() {
    console.log(this.goods)
  },
  created() {
  },
  methods: {
    // TbkItemRecommendGetRequest() {
    //   TbkItemRecommendGetRequest({
    //     numIid: this.goods.num_iid
    //   }).then((res) => {
    //     console.log(res)
    //     if (res.code === ERR_OK) {
    //       this.recommends = res.data.results.n_tbk_item
    //     }
    //   })
    // }
  },
  components: {
    SiteNav,
    SiteHeader,
    SiteTabs,
    NavBreadcrumb
  }
}
</script>

<style scoped lang="stylus">
.detail > .site-main
  .content-inline
    display: flex
    .gallery-wrap
      flex: 0 0 360px
      .box
        position: relative
        padding-top: 100%
        width: 100%
        height: 0
        overflow: hidden
        .pic-lg
          position: absolute
          top: 0
          left: 0
          display: block
          width: 100%
          height: 100%
      .thumbnail
        margin-top: 20px
        height: 80px
        background-color: #e5e5e5
        .list-group
          display: block
          width: 100%
          .list-item
            display: inline-block
            margin-left: 20px
            width: 60px
            height: 60px
            background-color: #515151
            & > a
              position: relative
              display: block
              width: 100%
              height: 100%
              overflow: hidden
              & > img
                position: absolute
                top: 0
                left: 0
                display: block
                width: 100%
                height: 100%
    .detail-wrap
      flex: 1 1 auto
      padding-left: 20px
      .goods-info
        font-size: 14px
        & > .title
          display: block
          margin-bottom: 10px
          font-size: 18px
          font-weight: 700
          color: #333
          line-height: 24px
          overflow: hidden
        & > .desc
          font-size: 14px
          color: #999
        & > .hr
          margin: 15px 0
          height: 1px
          background-color: #e5e5e5
          border: none
        & > .content-inline
          height: 36px
          line-height: 36px
          .price
            font-size: 24px
            font-weight: 700
            color: #ff0036
      .coupon-info
        position: relative
        display: flex
        padding: 8px 20px
        width: 360px
        color: #fff
        background-color: #d8d8d8
        background: linear-gradient(to left, #fe4326, #fca94e)
        border-radius: 8px
        box-shadow: 0 2px 2px rgba(0,0,0,0.2)
        & > .circle
          position: absolute
          top: 50%
          width: 15px
          height: 30px
          background-color: #fff
          box-shadow: 0 1px 2px rgba(0,0,0,0.2) inset
          transform: translateY(-50%)
        & > .circle.left
          left: 0
          border-radius: 0 40px 40px 0
        & > .circle.right
          right: 0
          border-radius: 40px 0 0 40px
        & > .layout-left
          flex: 1 1 auto
          position: relative
          font-size: 14px
          .amount
            position: absolute
            top: 0
            left: 0
            .fs
              font-size: 30px
              font-weight: 700
          .text
            text-align: center
          .date
            text-align: center
        & > .layout-right
          flex: 0 0 100px
          display: block
          font-size: 16px
          font-weight: 700
          color: #fff
          line-height: 63px
          text-align: center
          border-left: 2px dotted #fff
      .seller-info
        margin: 20px 0 30px
        padding: 10px
        font-size: 14px
        border: 1px dotted #aaa

    .aside-wrap
      flex: 0 0 200px
//     .detail-header
//       & > a.g-coupon-link
//         font-family: "microsoft yahei"
//         font-size: 16px
//         font-weight: 700
//         color: #333
//         line-height: 1
//       & > a.g-coupon-link:hover
//         color: #f50
//     .content-inline
//       margin-top: 10px
//       height: 40px
//       font-size: 14px
//       line-height: 40px
//     .content-inline + .content-inline
//       margin-top: 0
//   .recommend-wrap
//     float: left
//     padding: 0 30px
//     width: 200px
//     .recommend-list
//       display: block
//       width: 100%
//       height: 100%
//       .list-item
//         position: relative
//         display: block
//         margin-top: 15px
//         padding-top: 100%
//         width: 100%
//         height: 0
//         overflow: hidden
//         & > img
//           position: absolute
//           top: 0
//           left: 0
//           width: 100%
//           height: 100%
//           z-index: 1
//         & > .overlay
//           position: absolute
//           bottom: 0
//           left: 0
//           width: 100%
//           height: 24px
//           line-height: 24px
//           font-size: 12px
//           color: #000
//           text-align: center
//           background-color: rgba(255,255,255,0.8)
//           z-index: 2
</style>