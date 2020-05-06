<template>
  <layout-title-bar
    left-arrow
    left-text="短信验证码"
    class="page"
  >
    <p class="title">输入短信验证码</p>
    <van-field required autofocus v-model="code" label="短信验证码" placeholder="请输入"></van-field>
    <van-button type="primary" @click="submit" class="btn">确定</van-button>
  </layout-title-bar>
</template>

<script>
import Vue from 'vue'
import LayoutTitleBar from '@/layout/TitleBar'
import { Button, Field } from 'vant'
import 'vant/lib/button/style'
import 'vant/lib/field/style'
Vue.use(Button).use(Field)

export default {
  name: 'Profile-Phone-Check',
  components: { LayoutTitleBar },
  data () {
    return {
      code: ''
    }
  },
  methods: {
    submit () {
      if (this.code === '') {
        this.$toast('短信验证码输入不能为空')
        return false
      }
      // 请求-校验验证码
      // 成功 secretState = true
      this.$store.dispatch('exec_open_secretstate')
      this.$toast('密保安全已验证,可直接对密保类直接操作')
      setTimeout(() => this.$router.push({ name: 'Profile-Secret' }), 2000)
    }
  }
}
</script>

<style lang="scss" scoped>
@import '../../../assets/scss/user-page.scss';
</style>
