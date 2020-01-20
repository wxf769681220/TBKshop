<template>
  <nav class="site-tabs"  role="navigation">
    <div class="container">
      <div class="caption">
        <Icon class="icon" type="md-menu" size="24" color="#fff" />
        <span class="fs">所有商品分类</span>
      </div>
      <ul class="nav">
        <li v-for="item in pages" :key="item.title">
          <router-link :to="item.url">
            <span>{{ item.title }}</span>
          </router-link>
        </li>
      </ul>
    </div>
  </nav>
</template>

<script type="text/ecmascript-6">
import { Icon } from 'iview'
import Custom from '../../custom.json'

export default {
  name: 'site-tabs',
  props: {},
  data() {
    return {
      pages: []
    }
  },
  computed: {},
  watch: {},
  mounted() {},
  created() {
    this.pages = Custom.pages
  },
  methods: {},
  components: {
    Icon
  }
}
</script>

<style scoped lang="stylus">
.site-tabs
  border-bottom: 2px solid #000
  & > .container
    display: flex
    height: 40px
    .caption
      position: relative
      width: 200px
      line-height: 40px
      text-align: center
      background-color: #000
      .icon
        position: absolute
        top: 10px
        left: 10px
        display: block
      .fs
        font-size: 14px
        font-weight: 700
        color: #fff
        letter-spacing: 1px
    .nav
      display: block
      margin-left: 15px
      & > li
        display: inline-block
        & > a
          display: block
          padding: 0 15px
          line-height: 40px
          font-size: 14px
          font-weight: 700
          color: #000
        & > a:hover
          color: #ff0036
</style>