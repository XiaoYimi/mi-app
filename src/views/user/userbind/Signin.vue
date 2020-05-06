<template>
  <layout-title-bar
    left-text="第三方登录"
    left-arrow
  >

  <section class="panel-signin">
    <div class="web-info">
      <i class="iconfont web-info-logo">&#xe69e;</i>
      <span class="web-info-text">第三方账户登录</span>
    </div>

    <van-cell-group class="field-group" >
      <van-field
        required
        autofocus
        v-model="username"
        placeholder="小米ID/手机号码"/>
      <van-field
        required
        v-model="password"
        :type="showPwd ? 'text' : 'password'"
        placeholder="密码"
        :right-icon="showPwd ? 'eye-o' : 'closed-eye'"
        @click-right-icon="toggleShowPwd" />
    </van-cell-group>

    <van-button type="primary" class="signin-btn">登录</van-button>

    <div class="signin-help">
      <span @click="phoneSign" class="signin-help-btn">手机注册|登录</span>
       |
      <span @click="phoneInput" class="signin-help-btn">忘记密码</span>
    </div>

    <section>
      <van-divider>其它登录方式</van-divider>
      <div class="other-type">
        <i class="iconfont wx" @click="authorize('wx')">&#xe637;</i>
        <i class="iconfont wb" @click="authorize('wb')">&#xe666;</i>
        <i class="iconfont zfb" @click="authorize('zfb')">&#xe68a;</i>
      </div>
    </section>

    <section class="helps">
      <span class="helps-btn">常见问题</span>
       |
      <span class="helps-btn">隐私政策</span>
    </section>

  </section>
  <bg-fixed bg="#ffffff"/>
  </layout-title-bar>
</template>

<script>
import Vue from 'vue'
import LayoutTitleBar from '@/layout/TitleBar'
import BgFixed from '@/components/lib/bg/fixed'
import { CellGroup, Field, Button, Divider } from 'vant'
import 'vant/lib/cell-group/style'
import 'vant/lib/field/style'
import 'vant/lib/button/style'
import 'vant/lib/divider/style'
Vue.use(CellGroup).use(Field).use(Button).use(Divider)

export default {
  name: 'Profile-Userbind-Signin',
  components: { LayoutTitleBar, BgFixed },
  data () {
    return {
      username: '',
      password: '',
      showPwd: false
    }
  },
  methods: {
    toggleShowPwd () { this.showPwd = !this.showPwd },
    // 第三方授权
    authorize (platform) { console.log(platform + '调用授权') },
    // 切换为手机登录
    phoneSign () { this.$router.push({ name: 'Signup' }) },
    // 忘记密码
    phoneInput () { this.$router.push({ name: 'Profile-Phone-Input' }) }
  }
}
</script>

<style lang="scss" scoped>
.panel-signin {
  .web-info {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    height: 100px;

    .web-info-logo {
      font-size: 40px;
      color: orange
    }

    .web-info-text { margin-top: 10px; }
  }
  .field-group {
    margin-top: 20px;

    &::after { border-top-width: 0; }
  }
  .signin-btn {
    margin: 50px 5% 20px;
    width: 90%;
  }
  .signin-help {
    display: flex;
    justify-content: center;
    align-items: center;
    height: 46px;
    font-size: 14px;
    color: #bbbbbb;

    .signin-help-btn { margin: 0 6px; }
  }

  .other-type {
    display: flex;
    justify-content: center;
    align-items: center;
    height: 60px;

    .iconfont {
      margin: 0 10px;
      font-size: 30px;
    }
    .wx { color: #00c800 }
    .wb { color: #e71f19; }
    .zfb { color: #02a9f1; }
  }

  .helps {
    margin-top: 60px;
    display: flex;
    justify-content: center;
    align-items: center;
    font-size: 14px;
    color: #b9b9b9;

    .helps-btn { margin: 0 10px; }
  }
}

</style>
