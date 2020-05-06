<template>
  <layout-title-bar
    left-arrow
    left-text="重置密码"
  >
    <p class="title">重置密码</p>
    <van-cell-group>
      <van-field required autofocus v-model="password" label="新密码" placeholder="请输入"></van-field>
      <van-field required v-model="repassword" label="确认密码" placeholder="请输入"></van-field>
    </van-cell-group>

    <van-button type="primary" @click="reset" class="reset-btn">确定</van-button>
  </layout-title-bar>
</template>

<script>
import Vue from 'vue'
import LayoutTitleBar from '@/layout/TitleBar'
import { Button, CellGroup, Field } from 'vant'
import 'vant/lib/button/style'
import 'vant/lib/cell-group/style'
import 'vant/lib/field/style'
import Regexps from '@/static/js/Regexps'

Vue.use(Button).use(CellGroup).use(Field)

export default {
  name: 'Profile-Password-Reset',
  components: { LayoutTitleBar },
  data () {
    return {
      password: '',
      repassword: ''
    }
  },
  methods: {
    reset () {
      const obj = {
        password: this.password,
        repassword: this.repassword
      }
      if (!Regexps.patten.password.test(obj.password) || !Regexps.patten.password.test(obj.repassword)) {
        this.$toast('密码输入格式错误')
        return false
      }
      if (obj.password !== obj.repassword) { this.$toast('两次输入密码不一致') }
      // 发送请求修改密码
    }
  }
}
</script>

<style lang="scss" scoped>
.title {
  margin: 30px 0 60px;
  font-size: 20px;
  text-align: center;
}
.reset-btn {
  margin: 50px 5% 0;
  width: 90%;
}
</style>
