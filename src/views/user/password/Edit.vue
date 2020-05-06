<template>
  <layout-title-bar
    left-text="修改密码"
    left-arrow
  >

    <van-cell-group class="group">
      <van-field required v-model="cur_password" label="当前密码" placeholder="请输入" />
      <van-field required v-model="new_password" label="新密码" placeholder="请输入" />
      <van-field required v-model="con_password" label="确认密码" placeholder="请输入" />
    </van-cell-group>

    <div class="ptb-20 font-12 text-c color-secondgray">
      密码长度 6~12 位,由字母开头,由字母,数字,下划线组成
    </div>

    <van-button block type="primary" @click="submit" class="btn">确定</van-button>
  </layout-title-bar>
</template>

<script>
import Vue from 'vue'
import { CellGroup, Field, Button } from 'vant'
import Regexps from '@/static/js/Regexps'
import 'vant/lib/cell-group/style'
import 'vant/lib/field/style'
import 'vant/lib/button/style'
import LayoutTitleBar from '@/layout/TitleBar'
Vue.use(CellGroup).use(Field).use(Button)

export default {
  name: 'Profile-Password-Edit',
  components: { LayoutTitleBar },
  data () {
    return {
      cur_password: '',
      new_password: '',
      con_password: ''
    }
  },
  methods: {
    routerLeft () { this.$router.go(-1) },
    submit () {
      const obj = {
        current: this.cur_password,
        new: this.new_password,
        confirm: this.con_password
      }
      if (obj.current !== '' && obj.new !== '' && obj.confirm !== '') {
        // 正则验证
        let bool = false
        for (const key in obj) { if (!Regexps.patten.password.test(obj[key])) { bool = true } }
        if (bool) {
          this.$toast(Regexps.errortip.passwordFormat)
        } else {
          // 发送请求

          this.$store.dispatch('exec_close_secretstate')
        }
      } else {
        this.$toast('输入不能为空')
      }
    }
  }
}
</script>

<style lang="scss" scoped>
.group { margin-top: 20px; }
</style>
