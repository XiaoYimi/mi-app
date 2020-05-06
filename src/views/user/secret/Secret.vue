<template>
  <layout-title-bar
    left-text="小米账户-账户安全"
    left-arrow
  >
    <p class="flex ali-c plr-20"><i class="iconfont color-orange web-logo mr-10">&#xe69e;</i> 小米账号 </p>

    <section class="account">
      <div class="account-info">
        <span class="account-icon">
          <img src="../../../assets/image/def_user_icon.jpg" alt="u_img" class="account-icon-i">
        </span>
        <div class="account-data">
          <span class="name">筱依米</span>
          <span class="id">132456Id</span>
        </div>
      </div>
      <div class="account-tip">安全等级<i>100</i> 分太棒了,风险已降至最低</div>
    </section>

    <section class="baseinfo">
      <p class="mlr-20 font-14 color-secondgray">基本信息</p>
      <list :list="baseinfoList"></list>
    </section>

    <section class="baseinfo">
      <p class="mlr-20 font-14 color-secondgray">其它</p>
      <list :list="otherInfoList"></list>
    </section>
  </layout-title-bar>
</template>

<script>
import LayoutTitleBar from '@/layout/TitleBar'
import List from '@/components/lib/list/index'

export default {
  name: 'Profile-Secret',
  components: { LayoutTitleBar, List },
  data () {
    return {
      baseinfoList: [
        { route: 'Profile-Secret-Account', text: '账户密码', icon: '&#xe605;', iconSize: 24, iconColor: 'orange' },
        { route: 'Profile-Secret-Email', text: '安全邮箱', icon: '&#xe627;', iconSize: 24, iconColor: '#1989fa' },
        { route: 'Profile-Secret-Phone', text: '安全手机', icon: '&#xe61a;', iconSize: 24, iconColor: '#42b983' },
        { route: 'Profile-Secret-Problem', text: '密保问题', icon: '&#xe618;', iconSize: 24, iconColor: '#b36e6e' }
      ],
      otherInfoList: [
        { route: 'Profile-Secret-Userbind', text: '绑定授权', icon: '&#xe784;', iconSize: 24 },
        { route: 'Profile-Secret-Device', text: '设备管理', icon: '&#xe65f;', iconSize: 24 }
      ]
    }
  },
  methods: {
    routerLeft () { this.$router.go(-1) }
  }
}
</script>

<style lang="scss" scoped>
.web-logo { font-size: 24px; }
.account {
  padding: 10px 0 10px 20px;
  background-color: #ffffff;
  .account-info {
    display: flex;
    align-items: center;
    border-bottom: 1px solid #f0f0f0;

    .account-icon {
      border: 2px solid #f5f5f5;
      border-radius: .6rem;
      padding: 2px;
      width: 1rem;
      height: 1rem;
      line-height: 1rem;
      background-color: #ffffff;

      .account-icon-i {
        border-radius: .5rem;
        width: inherit;
        height: inherit;
      }
    }

    .account-data {
      margin-left: 5px;
      display: flex;
      flex-direction: column;
      align-items: center;
      border-bottom: 1px solid #f0f0f0;

      .name { font-size: 16px; }
      .id {
        margin-top: 2px;
        font-size: 14px;
        color: #b9b9b9;
      }
    }
  }

  .account-tip {
    margin-top: 8px;
    font-size: 14px;
    color: #b9b9b9;

    i {
      margin: 0 4px;
      color: #1989fa;
    }
  }
}
</style>
