<template>
  <layout-title-bar
    left-arrow
    left-text="修改安全邮箱"
    class="page"
  >
    <p class="title">修改安全邮箱</p>
    <van-field required autofocus v-model="email" label="邮箱" placeholder="请输入"></van-field>
    <van-button type="primary" @click="confirm" class="btn">确定</van-button>
    <bg-fixed bg='#ffffff'/>
  </layout-title-bar>
</template>

<script>
import Vue from 'vue'
import { Field, Button } from 'vant'
import 'vant/lib/field/style'
import 'vant/lib/button/style'
import LayoutTitleBar from '@/layout/TitleBar'
import BgFixed from '@/components/lib/bg/fixed'
import Regexps from '@/static/js/Regexps'
Vue.use(Field).use(Button)

export default {
  name: 'Profile-Secret-Email',
  components: { LayoutTitleBar, BgFixed },
  data () {
    return {
      email: ''
    }
  },
  methods: {
    confirm () {
      if (!Regexps.patten.email.test(this.email)) {
        this.$toast('邮箱格式错误')
        return false
      }
      // 请求-修改邮箱
      // 成功
      this.$toast('修改成功')
      this.$store.dispatch('exec_close_secretstate')
      setTimeout(() => this.$router.push({ name: 'Profile-Secret' }), 2000)
    }
  }
}
</script>

<style lang="scss" scoped>
@import '@/assets/scss/user-page.scss';
</style>
