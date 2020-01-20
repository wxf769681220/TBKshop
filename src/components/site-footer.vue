<template>
  <footer class="site-footer">
    <div class="container">
      <div class="content">
          网站导航 首页 好货精选 疯抢榜 咚咚抢 9.9包邮
        <p>贝微微是一家中立的导购网站，网站中的商品信息均来自于互联网。如商品信息不同，可能是商品信息未及时更新，所有商品信息请以天猫/淘宝店铺内为准。</p>
        <p>@版权所有 本站内容未经书面许可,禁止一切形式的转载 © CopyRight 2019 贝微微http://www.misfish.com  我要反馈</p>
        <button class="back-top" type="button" @click="onBackTop">返回Top</button>
      </div>
    </div>
  </footer>
</template>

<script type="text/ecmascript-6">
export default {
  name: 'site-footer',
  props: {},
  data() {
    return {
      timer: ''
    }
  },
  computed: {},
  watch: {},
  mounted() {},
  created() {},
  methods: {
    onBackTop() {
      this.timer = setInterval(() => {
        let scrollTop = document.documentElement.scrollTop || document.body.scrollTop
        let ispeed = Math.floor(-scrollTop / 6)
        if (scrollTop === 0) {
          clearInterval(this.timer)
        }
        document.documentElement.scrollTop = document.body.scrollTop = scrollTop + ispeed
      }, 20)
    }
  },
  components: {}
}
</script>

<style scoped lang="stylus">
.site-footer
  display: block
  font-size: 12px
  color: #fff
  background-color: #000
  & > .container
    .content
      padding: 40px 0
      .back-top
        font-size: 14px
        color: green
        background-color: transparent
        border: 0
        box-shadow: none
        outline: 0
      .back-top:hover
        color: #ff0036
</style>