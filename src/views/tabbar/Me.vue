<template>
  <layout-tabbar>
    <section class="me-panel">
      <div @click="handToProfile" class="me-panel-left">
        <img v-if="hasLogin" :src="this.$store.state.user.avatar" alt="u_img" class="avartor">
        <img v-else src="../../static/image/def_user_icon.jpg" alt="u_img" class="avartor">
        <span class="ml-10 color-wihte">{{ hasLogin ? this.$store.state.user.motto : '登录/注册' }}</span>
      </div>
      <div class="me-panel-right">
        <i class="iconfont integral">&#xe61f;</i>
        会员积分
      </div>
    </section>
    <section class="me-order">
      <div class="me-order-bar">
        <span>我的订单</span>
        <span class="font-14 color-secondgray">全部订单<i class="iconfont">&#xe604;</i></span>
      </div>
      <div class="option">
        <div
          v-for="(item, oid) of orderOptions" :key="oid"
          class="option-item">
          <i class="iconfont option-item-icon" v-html="item.code"/>
          <span class="option-item-text">{{ item.name }}</span>
        </div>
      </div>
    </section>
    <section class="me-other option mt-10">
      <div
        v-for="(item, oid) of toolsOptions" :key="oid"
        class="option-item">
        <span class="tools-value">{{ item.code }}</span>
        <span class="option-item-text tools-text">{{ item.name }}</span>
      </div>
      <div class="option-item">
        <i class="iconfont option-item-icon">&#xe673;</i>
        <span class="option-item-text">我的钱包</span>
      </div>
    </section>
    <adv :list="advs" class="mt-10"></adv>
    <list :list="list" class="mt-10"></list>
    <div class="setting mt-10">
      <i class="iconfont setting-icon ml-20">&#xe69b;</i>
      <div class="bar ml-10">
        <span class="setting-text">设置</span>
        <i class="iconfont mr-20 color-secondgray">&#xe604;</i>
      </div>
    </div>
  </layout-tabbar>
</template>

<script>
import LayoutTabbar from '@/layout/Tabbar'
import Adv from '@/components/lib/adv/index'
import List from '@/components/lib/list/index'

export default {
  name: 'Tabbar-Me',
  components: {
    LayoutTabbar,
    Adv,
    List
  },
  data () {
    return {
      orderOptions: [
        { name: '待付款', code: '&#xe613;' },
        { name: '待收货', code: '&#xe608;' },
        { name: '待评价', code: '&#xe7a3;' },
        { name: '退换修', code: '&#xe681;' }
      ],
      toolsOptions: [
        { name: '优惠券', code: '0' },
        { name: '最高额度', code: '20000+' },
        { name: '礼品卡', code: '0' }
      ],
      advs: [
        { alt: 'demo', route: '/adv', src: 'http://img3.imgtn.bdimg.com/it/u=3838312022,943518749&fm=26&gp=0.jpg' },
        { alt: 'demo', route: '/adv', src: 'http://img3.imgtn.bdimg.com/it/u=3838312022,943518749&fm=26&gp=0.jpg' },
        { alt: 'demo', route: '/adv', src: 'http://img3.imgtn.bdimg.com/it/u=3838312022,943518749&fm=26&gp=0.jpg' },
        { alt: 'demo', route: '/adv', src: 'http://img3.imgtn.bdimg.com/it/u=3838312022,943518749&fm=26&gp=0.jpg' },
        { alt: 'demo', route: '/adv', src: 'http://img3.imgtn.bdimg.com/it/u=3838312022,943518749&fm=26&gp=0.jpg' },
        { alt: 'demo', route: '/adv', src: 'http://img3.imgtn.bdimg.com/it/u=3838312022,943518749&fm=26&gp=0.jpg' },
        { alt: 'demo', route: '/adv', src: 'http://img3.imgtn.bdimg.com/it/u=3838312022,943518749&fm=26&gp=0.jpg' },
        { alt: 'demo', route: '/adv', src: 'http://img3.imgtn.bdimg.com/it/u=3838312022,943518749&fm=26&gp=0.jpg' }
      ],
      list: [
        { route: '/adv', icon: '&#xe610;', iconColor: 'orange', text: '小米会员', remark: '123' },
        { route: '/adv', icon: '&#xe610;', iconColor: 'orange', text: '小米会员', arrow: '123' },
        { route: '/adv', icon: '&#xe610;', iconColor: 'orange', text: '小米会员' }
      ]
    }
  },
  computed: {
    hasLogin () { return this.$store.state.loginState }
  },
  methods: {
    // 提示是否前往登录页
    funcAskToSign (cb) {
      if (this.hasLogin) {
        cb()
      } else {
        this.$dialog({
          showCancelButton: true,
          confirmButtonText: '前往',
          message: '您的账户暂未登录,是否前往登录?'
        }).then(() => {
          this.$router.push({ name: 'Signup' })
        }).catch(() => console.log('您已取消前往登录'))
      }
    },
    // 点击个人主页
    handToProfile () {
      this.funcAskToSign(() => {
        this.$router.push({ name: 'Profile' })
      })
    }
  }
}
</script>

<style lang="scss" scoped>
.me-panel {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0 0 0 10px;
  height: 150px;
  background-image: url('https://dss0.baidu.com/6ONWsjip0QIZ8tyhnq/it/u=341048775,3283545532&fm=85&app=63&f=JPEG?w=121&h=75&s=A1D2846FDAE1FB64023646010300A0DE');
  background-repeat: no-repeat;
  background-size: cover;

  .me-panel-left {
    display: flex;
    align-items: center;
    .avartor {
      border: 1px solid #ffffff;
      border-radius: 50%;
      width: 70px;
      height: 70px;
    }
  }

  .me-panel-right {
    border-top-left-radius: 12px;
    border-bottom-left-radius: 12px;
    padding: 2px 8px;
    height: 24px;
    vertical-align: middle;
    color: #ffffff;
    background-color: #ffc84d;

    .integral { color: #ffffff; }
  }
}

.me-order {
  background-color: #ffffff;

  .me-order-bar {
    display: flex;
    justify-content: space-between;
    align-items: center;
    border-bottom: .5px solid #f0f0f0;
    padding: 0 10px;
    height: 50px;
  }
}

.me-other {
  background-color: #ffffff;
}

.option {
  display: flex;
  justify-content: space-around;
  align-items: center;
  height: 100px;

  .option-item {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;

    .option-item-icon { font-size: 32px; }

    .tools-value { margin-top: 10px; }

    .option-item-text { font-size: 15px; }

    .tools-text { margin-top: 5px; }
  }
}

.setting {
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 50px;
  background-color: #ffffff;

  .setting-icon {
    position: relative;
    font-size: 24px;
    left: -2px;
  }

  .bar {
    flex: 1;
    display: flex;
    justify-content: space-between;
    align-items: center;
    height: inherit;
  }
}

</style>
