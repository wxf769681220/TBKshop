<template>
  <div class="user-login">
    <div class="avata">
      <img src="~common/images/avata.jpg" alt="用户头像" />
    </div>
    <p class="fs">Hi~欢迎来到 Misfish.com！</p>
    <div class="btn-group">
      <button class="btn">登录</button>
      <button class="btn">注册</button>
    </div>
  </div>
</template>

<script type="text/ecmascript-6">
export default {
  name: 'user-login',
  props: {},
  data() {
    return {}
  },
  computed: {},
  watch: {},
  mounted() {
  },
  created() {
  },
  methods: {
  },
  components: {
  }
}
</script>

<style scoped lang="stylus">
.user-login
  position: relative
  padding: 15px 0
  width: 100%
  text-align: center
  border-bottom: 1px dotted #d8d8d8
  .avata
    position: relative
    margin: 0 auto
    width: 64px
    height: 64px
    text-align: center
    border-radius: 50%
    background-color: #a1a1a1
    box-shadow: 1px 2px 2px #a1a1a1 inset
    overflow: hidden
    & > img
      position: absolute
      top: 0
      left: 0
      display: block
      width: 100%
  .fs
    margin: 10px 0
    font-size: 12px
  .btn-group
    & > .btn
      display: inline-block
      padding: 6px 12px
      font-size: 12px
      color: #000
      background-color: #fff
      border: 1px solid #000
      outline: 0
    & > .btn:hover
      color: #ff0036
      border-color: #ff0036
    & > .btn + .btn
      margin-left: 10px

</style>