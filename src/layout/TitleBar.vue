<template>
  <div class="layout-titlebar">
    <van-nav-bar
      fixed
      @click-left="routerLeft"
      @click-right="clickRight"
      :left-text="leftText"
      :right-text="rightText"
      :title="title"
      :left-arrow="leftArrow"
      :border="border"
    />
    <slot/>
  </div>
</template>

<script>
import Vue from 'vue'
import { NavBar } from 'vant'
import 'vant/lib/nav-bar/style'
Vue.use(NavBar)

export default {
  name: 'Layout-Title-Bar',
  props: {
    leftText: String,
    rightText: String,
    title: String,
    leftArrow: { type: Boolean, default: false },
    border: { type: Boolean, default: true }
  },
  data () {
    return {}
  },
  methods: {
    routerLeft () { this.$router.go(-1) },
    clickRight () {
      this.$emit('click-right')
    }
  }
}
</script>

<style lang="scss" scoped>
.layout-titlebar {
  padding-top: 46px;
}
</style>
