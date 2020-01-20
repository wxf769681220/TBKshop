<template>
  <div class="search-box">
    <div class="input-group">
      <input class="input-control" v-model="query" :placeholder="placeholder" />
      <div class="input-append" @click="onSearch">搜索</div>
    </div>
    <ul class="nav">
      <li v-for="item in hotQuery" :key="item">
        <span @click="onHotQuery(item)">{{ item }}</span>
      </li>
    </ul>
  </div>
</template>

<script type="text/ecmascript-6">
import Custom from '../../custom.json'

export default {
  name: 'search-box',
  props: {
    placeholder: {
      type: String,
      default: ''
    }
  },
  data() {
    return {
      query: '',
      hotQuery: []
    }
  },
  computed: {},
  watch: {},
  mounted() {},
  created() {
    this.hotQuery = Custom.search.hotQuery
  },
  methods: {
    setQuery(query) {
      this.query = query
    },
    onClear() {
      this.query = ''
    },
    getQuery(query) {
      this.searchInfo.query = query
    },
    onSearch() {
      // if (!searchInfo.query) {
      //   return
      // }
      // this.$router.push({
      //   path: '/searchResult',
      //   query: searchInfo
      // })
    }
    // onHotQuery(item) {
    //   this.$router.push({
    //     path: '/searchResult',
    //     query: {
    //       type: this.searchInfo.type,
    //       query: item
    //     }
    //   })
    //   this.$refs.search.onClear()
    // }
  },
  components: {}
}
</script>

<style scoped lang="stylus">
.search-box
  & > .input-group
    display: flex
    width: 480px
    height: 40px
    .input-control
      flex: 1 1 auto
      display: flex
      align-items: center
      padding: 6px 12px
      font-size: 14px
      font-weight: 400
      color: #000
      background-color: transparent
      border: 2px solid #ff0036
      border-radius: 0
      outline: 0
      &::placeholder
        font: 13px/1.5 tahoma, arial, "\5b8b\4f53"
        color: #d8d8d8
    .input-append
      flex: 0 0 90px
      line-height: 40px
      font-size: 16px
      font-weight: 500
      color: #fff
      text-align: center
      white-space: nowrap
      letter-spacing: 4px
      background-color: #ff0036
      cursor: pointer
  & > .nav
    display: block
    margin-top: 8px
    padding: 0
    font-size: 12px
    color: #999
    font-weight: 400
    & > li
      display: inline-block
      padding: 0 10px
    & > li:hover
      color: #ff0036
</style>