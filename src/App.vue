<template>
  <div id="app">
    <keep-alive>
      <router-view><!-- 顶级路由渲染出口 --></router-view>
    </keep-alive>
  </div>
</template>

<script type="text/ecmascript-6">
export default {
  name: 'app',
  props: {},
  data() {
    return {}
  },
  computed: {},
  watch: {
    // // 切换路由时,使滚动条始终在处在页面最顶端,当组件使用keep-alive时失效
    // '$route': function(to, from) {
    //   document.body.scrollTop = 0
    //   document.documentElement.scrollTop = 0
    // }
  },
  mounted() {
    // 监听 unload 方法，如果重载页面就把 state 存入 sessionStorage
    window.addEventListener('unload', this.saveState)
  },
  created() {},
  methods: {
    saveState() {
      sessionStorage.setItem('state', JSON.stringify(this.$store.state))
    }
  },
  components: {}
}
</script>

<style scoped lang="stylus">
</style>
