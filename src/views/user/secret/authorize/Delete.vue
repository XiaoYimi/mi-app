<template>
  <layout-title-bar
    left-arrow
    left-text="解除授权绑定"
    class="page"
  >
    <section class="screen-height">
      <div class="screen-top">

      </div>
      <div class="screen-bottom">
        <van-button type="warning" class="btn">解除绑定</van-button>
        <van-button type="default" @click="routerLeft" class="btn">返回</van-button>
      </div>
    </section>
  </layout-title-bar>
</template>

<script>

import Vue from 'vue'
import LayoutTitleBar from '@/layout/TitleBar'
import { Button } from 'vant'
import 'vant/lib/button/style'
Vue.use(Button)
export default {
  name: 'Profile-Secret-Userbind-Delete',
  components: { LayoutTitleBar },
  data () {
    return {
      authorize: null
    }
  },
  methods: {
    routerLeft () { this.$router.go(-1) }
  },
  created () {
    console.log(this.$route.params.authorize)
    this.authorize = this.$route.params.authorize
  }
}
</script>

<style lang="scss" scoped>
@import '@/assets/scss/user-page.scss';
.screen-height {
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  height: calc(100vh - 46px);

  .screen-top {
    margin-top: 30px;
    .logo-wrap {
      display: flex;
      justify-content: center;
      align-items: center;
      margin-bottom: 15px;
      height: 40px;
      .logo {

      }
    }
  }

  .screen-bottom {
    .btn { margin: 10px 5%; }
  }
}
</style>
