<template>
  <van-tabbar v-model="tabIndex" @change="routerTo">
    <van-tabbar-item>
      <template #icon>
        <i class="iconfont">&#xe69e;</i>
      </template>
      <span>首页</span>
    </van-tabbar-item>
    <van-tabbar-item>
      <template #icon>
        <i class="iconfont">&#xe76f;</i>
      </template>
      <span>分类</span>
    </van-tabbar-item>
    <van-tabbar-item>
      <template #icon>
        <i class="iconfont">&#xe683;</i>
      </template>
      <span>购物车</span>
    </van-tabbar-item>
    <van-tabbar-item>
      <template #icon>
        <i class="iconfont">&#xe60b;</i>
      </template>
      <span>我的</span>
    </van-tabbar-item>
  </van-tabbar>
</template>

<script>
import Vue from 'vue'
import { Tabbar, TabbarItem } from 'vant'
import 'vant/lib/tabbar/style'
import 'vant/lib/tabbar-item/style'
Vue.use(Tabbar)
Vue.use(TabbarItem)

export default {
  props: { index: Number },
  data () {
    return {
      tabIndex: 0
    }
  },
  created () {
    const routes = ['Home', 'Classify', 'Cart', 'Me']
    if (!this.$route.params.tabIndex) {
      routes.map((item, index) => {
        if (this.$route.name === item) {
          this.tabIndex = index
        }
      })
    } else {
      this.tabIndex = this.$route.params.tabIndex
    }
  },
  methods: {
    routerTo (tabIndex) {
      const routes = ['Home', 'Classify', 'Cart', 'Me']
      this.$router.push({
        name: routes[tabIndex],
        params: {
          tabIndex: tabIndex
        }
      })
    }
  }
}
</script>

<style lang="scss" scoped>
</style>
