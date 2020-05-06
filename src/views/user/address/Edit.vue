<template>
  <layout-title-bar
    left-text="管理地址"
    :right-text="navbar.rightText"
    left-arrow
    @click-right="navbar.rightEvent"
  >
    <van-cell-group>
      <van-field required autofocus v-model="address.name" label="姓名" placeholder="请输入收货人姓名" />
      <van-field required v-model="address.tel" label="手机" placeholder="请输入收货人手机号" />
    </van-cell-group>

    <van-cell-group>
      <van-field required readonly v-model="address.location" @click="isShowPanel=true" label="地理位置" placeholder="选择地区信息" />
      <van-field required v-model="address.detail" label="详细地址" placeholder="小区、街道、楼牌等" />
    </van-cell-group>

    <section class="default">
      <div class="default-left">
        <span class="head">设置为默认地址</span>
        <span class="tip">提醒: 每次下单都会默认推荐使用该地址</span>
      </div>
      <van-switch v-model="address.isdef" class="default-right" />
    </section>

    <van-button type="primary" @click="save" class="save-btn">保存</van-button>

    <van-popup v-model="isShowPanel" position="bottom">
      <van-area :area-list="addressList" @cancel="isShowPanel=false" @confirm="selectedAddress" />
    </van-popup>
  </layout-title-bar>
</template>

<script>
import Vue from 'vue'
import { CellGroup, Field, Popup, Area, Switch, Button } from 'vant'
import 'vant/lib/cell-group/style'
import 'vant/lib/field/style'
import 'vant/lib/popup/style'
import 'vant/lib/area/style'
import 'vant/lib/switch/style'
import 'vant/lib/button/style'
import addressList from '@/static/js/Address'
import LayoutTitleBar from '@/layout/TitleBar'
Vue.use(CellGroup).use(Field).use(Popup).use(Area).use(Switch).use(Button)

export default {
  name: 'Address-Edit',
  components: { LayoutTitleBar },
  data () {
    return {
      navbar: {
        rightText: '',
        rightEvent: ''
      },
      address: {
        id: null,
        isdef: false,
        name: '',
        tel: '',
        location: '',
        detail: ''
      },
      isShowPanel: false,
      addressList: [] // 省市区列表
    }
  },
  methods: {
    routerLeft () { this.$router.go(-1) },
    nothing () { console.log('nothing') }, // 勿删,解决 vant 导航条 bug
    deleteAddress () {
      console.log('delete address', this.address.id)
      this.$dialog.alert({
        message: '删除当前收货地址?',
        showCancelButton: true
      }).then(() => {
        this.$store.dispatch('address/exec_remove', this.address.id)
        setTimeout(() => this.$router.go(-1), 100)
      }).catch(() => console.log('已取消删除当前收货地址'))
    },
    selectedAddress (item) {
      this.address.location = ''
      for (let i = 0; i < item.length; i++) { this.address.location += item[i].name + ' ' }
      this.isShowPanel = false
    },
    save () {
      // 要先获取 address 最后一项的 id，自动加 1
      const store = this.$store
      const instance = this.address
      if (instance.name === '' || instance.tel === '' || instance.location === '' || instance.detail === '') {
        this.$toast('请检查输入,不能为空')
        return false
      }
      if (instance.id === null) {
        // 新增
        store.dispatch('address/exec_add', instance)
      } else {
        // 修改
        store.dispatch('address/exec_modify', instance)
      }
      setTimeout(() => this.$router.go(-1), 500)
    }
  },
  created () {
    this.addressList = addressList
    const address = this.$route.params.address
    if (address) {
      this.navbar = { rightText: '删除', rightEvent: this.deleteAddress }
      this.address = address
    } else {
      this.navbar = { rightText: '', rightEvent: this.nothing }
    }
  }
}
</script>

<style lang="scss" scoped>
.default {
  margin-top: 20px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 15px;
  background-color: #ffffff;

  .default-left {
    flex: 1;
    display: flex;
    flex-direction: column;
    .head { font-size: 14px; }
    .tip {
      margin-top: 5px;
      font-size: 12px;
      color: #b9b9b9;
    }
  }
  .default-right { font-size: 16px; }
}

.save-btn {
  position: fixed;
  bottom: 20px;
  margin: 0 5%;
  width: 90%;
}
</style>
