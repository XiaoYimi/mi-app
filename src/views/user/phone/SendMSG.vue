<template>
  <layout-title-bar
    left-arrow
    left-text="小米账户安全验证"
    class="page"
  >
    <div class="title">小米账户安全验证</div>
    <div class="strong-text">为确认身份,我们仍需验证您的手机号码</div>
    <p class="strong-tip">点击发送短信按钮,将会发送一条验证码的短信至手机
      <span class="strong-phone">{{ phone }}</span>
    </p>
    <van-button type="primary" @click="sendMSG" class="btn">发送短信</van-button>
    <div @click="toggleType" class="helper">无法通过?点击换用其它验证方式</div>
    <bg-fixed bg="#ffffff"/>
  </layout-title-bar>
</template>

<script>
import LayoutTitleBar from '@/layout/TitleBar'
import BgFixed from '@/components/lib/bg/fixed'
import Vue from 'vue'
import { Button } from 'vant'
import 'vant/lib/button/style'
Vue.use(Button)

export default {
  name: 'Password-SendMSG',
  components: { LayoutTitleBar, BgFixed },
  data () {
    return {}
  },
  computed: {
    phone () { return this.$route.params.phone || this.$store.state.user.phone }
  },
  methods: {
    sendMSG () {
      setTimeout(() => this.$router.push({ name: 'Profile-Phone-Check' }), 1000)
    },
    toggleType () { console.log('toggle type') }
  }
}
</script>

<style lang="scss" scoped>
@import '@/assets/scss/user-page.scss';
.strong-text {
  margin: 0 20px 10px;
  font-weight: bold;
}
.strong-tip {
  margin: 0 20px 60px;
  font-size: 14px;
  line-height: 1.5;

  .strong-phone { color: orange; }
}
</style>
