<template>
  <div class="card">
    <div class="card-header">
      <img :src="goods.pict_url" @click="selectGoods(goods)" />
    </div>
    <div class="card-body">
      <h4 class="title">{{ goods.title }}</h4>
      <div class="content-inline">
        <del class="del">
          <span>￥</span>
          <span>{{ goods.zk_final_price }}</span>
        </del>
        <p class="volume">
          <span>月销：</span>
          <span>{{ goods.volume }}</span>
        </p>
      </div>
      <div class="content-inline">
        <div class="store">
          <img class="icon" src="../common/images/tmall.png" width="16" height="16" alt="天猫店铺标识" v-if="goods.user_type === '1'" />
          <img class="icon" src="../common/images/tb.png" width="16" height="16" alt="淘宝店铺标识" v-if="goods.user_type === '0'" />
          <span class="ml-1 nick">{{ goods.nick }}</span>
        </div>
        <a :href="goods.click_url" target="_blank">linkToTB</a>
      </div>
    </div>
    <div class="card-footer">
      <a class="coupon" :href="goods.coupon_click_url">
        <span class="circular left"></span>
        <span class="circular right"></span>
        <div class="content-left">
          <span>￥</span>
          <span class="amount">{{ goods.coupon_amount }}</span>
        </div>
        <div class="content-right">领取</div>
      </a>
    </div>
  </div>
</template>

<script type="text/ecmascript-6">
import { mapMutations } from 'vuex'

export default {
  name: 'card',
  props: {
    goods: {
      type: Object,
      default() {
        return {}
      }
    }
  },
  data() {
    return {}
  },
  created() {
    // console.log(this.goods)
  },
  methods: {
    ...mapMutations({
      setGoods: 'SET_GOODS'
    }),
    selectGoods(goods) {
      this.$router.push({
        path: `/detail?item_id=${goods.item_id}`
      })
      this.setGoods(goods)
    }
  },
  components: {}
}
</script>

<style scoped lang="stylus">
.card
  float: left
  position: relative
  margin-bottom: 1%
  margin-left: 2%
  width: 17.6%
  background-color: #fff
  border: 1px solid #e2e2e2
  box-shadow: 0 1px 3px 0 rgba(32,32,64,.04)
  overflow: hidden
  &:hover
    border-color: #ff0036
    box-shadow: 0 2px 4px 0 rgba(32,32,64,.4);
  .card-header
    position: relative
    padding-top: 100%
    height: 0
    border: 2px solid #fff
    overflow: hidden
    & > img
      position: absolute
      top: 0
      left: 0
      display: block
      width: 100%
      height: 100%
  .card-body
    position: relative
    padding: 6px 10px 10px
    font-size: 12px
    color: #333
    // background-color: #e1e1e1
    & > .title
      display: block
      margin-bottom: 6px
      height: 20px
      line-height: 20px
      font-weight:700
      white-space: nowrap
      text-overflow: ellipsis
      overflow: hidden
    & > .content-inline
      display: flex
      align-items: center
      justify-content: space-between
      height: 24px
      .del
        font-size: 18px
        font-weight: 500
        color: #ff0036
      .store
        display: flex
        align-items: center
        .nick
          color: #000
        .nick:hover
          color: #ff0036
  .card-footer
    background-color: #d8d8d8
    background: linear-gradient(to left, #f00, #ff0)
    background: linear-gradient(to left, #fe4326, #fca94e)
    .coupon
      position: relative
      display: flex
      padding: 5px 10px
      height: 50px
      font-size: 14px
      font-weight: 400
      color: #fff
      overflow: hidden
      & > .circular
        position: absolute
        top: 50%
        display: block
        width: 20px
        height: 20px
        background-color: #fff
        border-radius: 50%
        transform: translateY(-50%)
      & > .circular.left
        left: -10px
      & > .circular.right
        right: -10px
      .content-left
        flex: 1 1 auto
        padding: 0 10px
        line-height: 40px
        .amount
          font-size: 24px
          font-weight: 700
      .content-right
        flex: 0 0 78px
        padding: 0 10px
        line-height: 40px
        border-left: 1px dotted #fff
    // .coupon-wrap
    //   background-color: #ccc
    //   // background: linear-gradient(to left, #f00, #ff0)
    //   & > .circular
    //     position: absolute
    //     top: 50%
    //     display: block
    //     width: 20px
    //     height: 20px
    //     background-color: #fff
    //     border-radius: 50%
    //     transform: translateY(-50%)
    //     &.left
    //       left: -10px
    //     &.right
    //       right: -10px
    //   & > .content
    //     padding: 10px 16px
    //     height: 100%
    //     color: #fff
    //     .coupon-detail
    //       float: left
    //       width: 60%
    //       height: 100%
    //       line-height: 34px
    //       border-right: 2px dotted #fff
    //       .yuan
    //         font-size: 14px
    //         font-weight: 600
    //       .count
    //         font-size: 24px
    //         font-weight: 500
    //     a.coupon-link
    //       float: right
    //       width: 40%
    //       height: 100%
    //       line-height: 34px
    //       text-align: center
    //       color: #fff
    //       .fs
    //         font-size: 14px
    //         line-height: 1
    //       .icon
    //         margin-left: 4px
</style>