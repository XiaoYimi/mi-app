<template>
  <layout-title-bar
    left-text="修改姓名"
    left-arrow
    @click-left="routerLeft"
  >
    <van-field autofocus v-model="motto" placeholder="请输入用户名" class="motto"/>
    <van-button type="primary" block class="btn">确定</van-button>
  </layout-title-bar>
</template>

<script>
import Vue from 'vue'
import { Field, Button } from 'vant'
import 'vant/lib/field/style'
import 'vant/lib/button/style'
import LayoutTitleBar from '@/layout/TitleBar'
Vue.use(Field).use(Button)

export default {
  name: 'Profile-Motto-Edit',
  components: { LayoutTitleBar },
  data () {
    return {
      motto: ''
    }
  },
  methods: {
    routerLeft () { this.$router.go(-1) }
  }
}
</script>

<style lang="scss" scoped>
.motto { margin-top: 20px; }
.btn {
  margin-top: 20px;
  height: 50px;
}
</style>
