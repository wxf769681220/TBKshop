<template>
  <nav class="site-nav-top" role="navigation">
    <div class="container">
      <p>微鱼 - 每天千款优惠券秒杀，一折限时疯抢！</p>
      <ul class="nav">
        <li>
          <span>网站导航</span>
        </li>
        <li>
          <span>消息</span>
        </li>
        <li>
          <span>收藏本站</span>
        </li>
        <li>
          <span>联系我们</span>
        </li>
      </ul>
    </div>
  </nav>
</template>

<script type="text/ecmascript-6">
export default {
  name: 'site-nav',
  props: {},
  data() {
    return {}
  },
  computed: {},
  watch: {},
  mounted() {},
  created() {},
  methods: {},
  components: {}
}
</script>

<style scoped lang="stylus">
.site-nav-top
  border-bottom: 1px solid #d8d8d8
  & > .container
    display: flex
    align-items: center
    justify-content: space-between
    height: 30px
    font: 12px/1.5 tahoma, arial, "\5b8b\4f53"
    color: #666
    font-weight: 400
    .nav
      display: block
      padding: 0
      & > li
        display: inline-block
        padding: 0 8px
      & > li:hover
        color: #ff0036
</style>