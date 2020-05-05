<template>
  <van-swipe class="my-swipe" :autoplay="autoplay" :indicator-color="indicatorColor">
    <van-swipe-item
      v-for="(item,lid) of list"
      :key="lid"
      @click="routerTo(item.route)"
      :style="'height:' + height + 'px;'">
        <img :src="item.src" :alt="item.alt" class="img" />
      </van-swipe-item>
  </van-swipe>
</template>

<script>
import Vue from 'vue'
import { Swipe, SwipeItem } from 'vant'
import 'vant/lib/swipe/style'
import 'vant/lib/swipe-item/style'
Vue.use(Swipe)
Vue.use(SwipeItem)

export default {
  props: {
    list: { type: Array, default: () => [] },
    autoplay: { type: Number, default: 3000 },
    indicatorColor: { type: String, default: 'white' },
    height: { Number, default: 200 }
  },
  data () {
    return {}
  },
  methods: {
    routerTo (route) {
      // this.$router.push({ path: route })
      this.$router.push({ path: '/adv' })
    }
  }
}
</script>

<style lang="scss" scoped>
.my-swipe {
  .img {
    width: 100%;
    height: auto;
  }
}
</style>
