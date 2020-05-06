<template>
  <layout-title-bar
    left-text="个人资料"
    left-arrow
  >

    <section class="baseinfo mt-20">
      <div @click="routerTo('Profile-Avatar-Edit')" class="item">
        <span class="item-left">头像</span>
        <span class="item-right">
          <img src="../../assets/image/def_user_icon.jpg" alt="u_cion" class="item-icon"/>
        </span>
      </div>
      <div @click="routerTo('Profile-Motto-Edit')" class="item">
        <span class="item-left">姓名</span>
        <span class="item-right">
          xiaoyimi
          <i class="iconfont ml-5">&#xe604;</i>
        </span>
      </div>
      <div @click="show = true" class="item">
        <span class="item-left">性别</span>
        <span class="item-right">
          男
          <i class="iconfont ml-5">&#xe604;</i>
        </span>
      </div>
      <div class="item">
        <span class="item-left">小米ID</span>
        <span class="item-right">
          15646
        </span>
      </div>
    </section>

    <section class="otherinfo mt-20">
      <div @click="routerTo('Profile-Password-Edit')" class="item">
        <span class="item-left">修改密码</span>
        <span class="item-right"><i class="iconfont color-secondgray">&#xe604;</i></span>
      </div>
      <div @click="routerTo('Profile-Address')" class="item">
        <span class="item-left">收货地址</span>
        <span class="item-right"><i class="iconfont color-secondgray">&#xe604;</i></span>
      </div>
      <div @click="routerTo('Profile-Secret')" class="item">
        <span class="item-left">账户安全</span>
        <span class="item-right"><i class="iconfont color-secondgray">&#xe604;</i></span>
      </div>
      <div @click="routerTo('Profile-Userbind-Signin')" class="item">
        <span class="item-left">第三方账户</span>
        <span class="item-right"><i class="iconfont color-secondgray">&#xe604;</i></span>
      </div>
    </section>
    <van-action-sheet v-model="show" :actions="actions" @select="onSelect" />
  </layout-title-bar>
</template>

<script>

import Vue from 'vue'
import { ActionSheet } from 'vant'
import 'vant/lib/action-sheet/style'
import LayoutTitleBar from '@/layout/TitleBar'
Vue.use(ActionSheet)

export default {
  name: 'Profile',
  components: { LayoutTitleBar },
  data () {
    return {
      baseinfo: [
        { route: '/adv', text: '小米会员' }
      ],
      show: false,
      actions: [
        { id: 0, name: '男' },
        { id: 1, name: '女' },
        { id: 2, name: '保密' }
      ]
    }
  },
  methods: {
    routerLeft () { this.$router.go(-1) },
    routerTo (routeName) { this.$router.push({ name: routeName }) },
    onSelect (item) {
      this.show = false
      console.log(item)
    }
  }
}
</script>

<style lang="scss" scoped>
.baseinfo, .otherinfo {
  background-color: #ffffff;
  .item {
    display: flex;
    justify-content: space-between;
    align-items: center;
    border-bottom: 1px solid #f0f0f0;
    padding: 0 20px;
    height: 50px;

    &:last-child { border-bottom: 0; }

    .item-right {
      font-size: 14px;
      color: #b9b9b9;
      .item-icon {
        border-radius: .5rem;
        width: 1rem;
        height: 1rem;
      }
    }
  }
}

.baseinfo {
  .item {
    &:first-child { padding-top: 10px; padding-bottom: 10px; }
  }
}
</style>
