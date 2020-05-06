<template>
  <layout-title-bar
    left-arrow
    left-text="输入本人手机"
    class="page"
  >
    <p class="title">输入本人手机</p>
    <p class="tip">请输入已绑定的手机号码</p>
    <van-field required autofocus v-model="phone" label="本人手机" placeholder="请输入"></van-field>
    <van-button type="primary" @click="next" class="btn">下一步</van-button>
  </layout-title-bar>
</template>

<script>
import Vue from 'vue'
import LayoutTitleBar from '@/layout/TitleBar'
import { Button, Field } from 'vant'
import 'vant/lib/button/style'
import 'vant/lib/field/style'
import Regexps from '@/static/js/Regexps'
Vue.use(Button).use(Field)

export default {
  name: 'Profile-Phone-Input',
  components: { LayoutTitleBar },
  data () {
    return {
      phone: ''
    }
  },
  methods: {
    next () {
      if (!Regexps.patten.phone.test(this.phone)) {
        this.$toast('手机号格式错误')
        return false
      }
      this.$router.push({ name: 'Profile-Phone-SendMSG', params: { phone: this.phone } })
    }
  }
}
</script>

<style lang="scss" scoped>
@import '@/assets/scss/user-page.scss';
</style>
