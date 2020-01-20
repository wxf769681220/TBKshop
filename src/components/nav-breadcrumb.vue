<template>
  <nav class="nav-breadcrumb clearfix">
    <ul class="nav">
      <li>
        <router-link to="/search_result">鞋靴箱包 > </router-link>
      </li>
        <li>
        <router-link to="/search_result">皮具 ></router-link>
      </li>
        <li>
        <router-link to="/search_result">腰带</router-link>
      </li>
    </ul>
  </nav>
</template>

<script type="text/ecmascript-6">
export default {
  name: 'card',
  props: {
  },
  data() {
    return {}
  },
  created() {
  },
  methods: {
  },
  components: {}
}
</script>

<style scoped lang="stylus">
.nav-breadcrumb
  padding: 10px 0
  background-color: #fff
  & > .nav
    display: block
    & > li
      display: inline-block
      padding: 8px
      & > a
        display: block
        font-size: 12px
        color: #000
</style>