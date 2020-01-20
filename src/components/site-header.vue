<template>
  <header class="site-header">
    <div class="container">
      <div class="site-logo">
        <img src="~common/images/site-logo.gif" alt="misfish.com 站点 logo" />
      </div>
      <search-box :placeholder="placeholder"></search-box>
      <router-link class="teach" to="/teach">领券教程</router-link>
      <img class="slogans" src="~common/images/header.png" alt="宣传图片" />
    </div>
  </header>
</template>

<script type="text/ecmascript-6">
import SearchBox from 'components/search-box'

export default {
  name: 'site-header',
  props: {},
  data() {
    return {
      placeholder: '粘贴或复制您所需要查找的商品名称...'
    }
  },
  computed: {},
  methods: {},
  components: {
    SearchBox
  }
}
</script>

<style scoped lang="stylus">
.site-header > .container
  display: flex
  align-items: center
  & > .site-logo
    position: relative
    margin-left: -45px
    padding-top: 130px
    width: 290px
    height: 0
    overflow: hidden
    & > img
      position: absolute
      top: 0
      left: 0
      display: block
      width: 100%
      height: 100%
  .teach
    display: block
    margin-top: -27px
    margin-left: 30px
    padding: 0 20px
    height: 40px
    line-height: 40px
    font-size: 14px
    color: #666
    border: 1px solid #999
  .teach:hover
    color: #ff0036
    border: 1px solid #ff0036
  .slogans
    margin-left: 50px
    width: 220px
    height: 60
</style>