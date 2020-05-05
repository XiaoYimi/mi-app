<template>
  <div class="page-signup">
    <p class="form-title">小米登录</p>
    <van-cell-group>
      <van-field required autofocus label="手机号" placeholder="请输入"></van-field>
      <van-field required autofocus label="密码" placeholder="请输入"></van-field>
    </van-cell-group>
    <van-button type="primary" class="confirm-btn">登录</van-button>
    <p class="helper">手机号可作为账号直接注册登录</p>
    <bg-fixed bg="#ffffff"/>
  </div>
</template>

<script>
import Vue from 'vue'
import { CellGroup, Field, Button } from 'vant'
import 'vant/lib/cell-group/style'
import 'vant/lib/field/style'
import 'vant/lib/button/style'
import BgFixed from '@/components/lib/bg/fixed'

Vue.use(CellGroup).use(Field).use(Button)

export default {
  name: 'Signup',
  components: { BgFixed },
  data () {
    return {}
  }
}
</script>

<style lang="scss" scoped>
.page-signup {
  .form-title {
    display: flex;
    justify-content: center;
    align-items: center;
    height: 100px;
    font-size: 20px;
    font-weight: 500;
    color: orange;
  }
  .confirm-btn {
    margin: 60px 5% 0;
    width: 90%;
  }
  .helper {
    padding: 20px 20px 0;
    font-size: 14px;
    color: #b9b9b9;
  }
}
</style>
