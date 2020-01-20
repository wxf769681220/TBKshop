<template>
  <div class="new-top10">
    <h4 class="h4">每日头条</h4>
    <ul class="nav">
      <li v-for="item in news" :key="item.title">
        <router-link :to="item.url">
          {{ item.title }}
        </router-link>
      </li>
    </ul>
  </div>
</template>

<script type="text/ecmascript-6">
import Custom from '../../custom.json'

export default {
  name: 'new-top10',
  props: {},
  data() {
    return {
      news: []
    }
  },
  computed: {
  },
  watch: {},
  mounted() {},
  created() {
    this.news = Custom.news
  },
  methods: {},
  components: {}
}
</script>

<style scoped lang="stylus">
.new-top10
  padding: 0 15px 15px 15px
  & > .h4
    display: block
    height: 40px
    line-height: 40px
    font-size: 14px
    font-weight: 700
  & > .nav
    display: block
    & > li
      display: block
      line-height: 24px
      white-space: nowrap
      text-overflow: ellipsis
      overflow: hidden
      & > a
        font-size: 12px
        color: #333
      & > a:hover
        color: #ff0036
</style>