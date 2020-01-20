<template>
  <div class="category">
    <ul class="nav" role="menu">
      <li v-for="(item,index) in categories" :key="index" @mouseenter="showPopup(item)" @mouseleave="hidePopup">
        <img :src="item.brand" />
        <router-link class="link" v-for="(caption,index) in item.caption" :key="index" :to="`/search_result?query=${caption}`">{{ caption }}</router-link>
      </li>
    </ul>
    <div class="popup" v-show="isPopup" @mouseenter="showPopup(items)" @mouseleave="hidePopup">
      <div class="content-inline" v-for="(item,index) in items.children" :key="index">
        <h4 class="title">{{ item.title }}</h4>
        <Icon class="icon" type="ios-arrow-forward" size="16" color="#000" />
        <router-link class="link" v-for="(link,index) in item.items" :key="index" :to="`/search_result?query=${link}`">{{ link }}</router-link>
      </div>
    </div>
  </div>
</template>

<script type="text/ecmascript-6">
import { Icon } from 'iview'
import Custom from '../../custom.json'

export default {
  name: 'category',
  props: {},
  data() {
    return {
      categories: [],
      isPopup: false,
      items: {}
    }
  },
  computed: {},
  watch: {},
  mounted() {
  },
  created() {
    this.categories = Custom.categories
  },
  methods: {
    showPopup(item) {
      this.items = item
      this.isPopup = true
    },
    hidePopup() {
      this.isPopup = false
    }
  },
  components: {
    Icon
  }
}
</script>

<style scoped lang="stylus">
.category
  position: relative
  width: 200px
  background-color: rgba(0,0,0,0.8)
  & > .nav
    display: block
    padding: 0
    & > li
      display: flex
      align-items: center
      padding: 0 10px
      height: 40px
      font-size: 14px
      font-weight: 500
      color: #fff
      & > img
        display: block
        margin-right: 10px
        width: 20px
        height: 20px
      & > a
        display: block
        padding-right: 10px
        color: #fff
    & > li:hover
      background-color: #fff
      border-left: 3px solid #ff0036
      & > a
        color: #000
      & > a:hover
        color: #ff0036
        text-decoration: underline
  & > .popup
    position: absolute
    top: 0
    left: 200px
    padding: 15px
    width: 780px
    height: 400px
    color: #000
    background-color: #fff
    border: 2px solid #000
    border-top: 0
    border-left: 0
    z-index: 9999
    .content-inline
      line-height: 24px
      & > .title
        display: inline
        // margin: 10px 0
        font-size: 12px
        font-weight: 700
        color: #333
      & > .link
        display: inline-block
        margin-left: 10px
        margin-bottom: 10px
        font-size: 12px
        color: #666
      & > .link:hover
        color: #ff0036
</style>