<template>
  <div class="site-banner" v-if="isSiteBanner">
    <Icon class="icon" type="ios-close-circle" size="24" color="#000" @click="hide" />
    <img class="img-banner" src="~common/images/site-banner.png" alt="海报、广告、横幅" />
  </div>
</template>

<script type="text/ecmascript-6">
import { Icon } from 'iview'

export default {
  name: 'site-banner',
  props: {},
  data() {
    return {
      isSiteBanner: true
    }
  },
  computed: {},
  watch: {},
  mounted() {},
  created() {},
  methods: {
    hide() {
      this.isSiteBanner = false
    }
  },
  components: {
    Icon
  }
}
</script>

<style scoped lang="stylus">
.site-banner
  position: relative
  background-color: rgb(255,157,191)
  & > .img-banner
    display: block
    margin: 0 auto
  & > .icon
    position: absolute
    top: 20px
    right: 300px
</style>