<template>
  <layout-title-bar
    left-text="管理地址"
    right-text="+"
    left-arrow
    @click-right="addAddress('Profile-Address-Edit')"
  >
    <section class="address">
      <div
        v-for="item of this.$store.state.address.list"
        :key="item.id"
        @click="editAddress(item)"
        class="address-item">
        <div class="item-left">
          <div class="head">
            <span class="name mr-10">{{ item.name }}</span>
            <span class="tel">{{ item.tel }}</span>
          </div>
          <div class="main">{{ item.location }}</div>
          <div class="foot">{{ item.detail }}</div>
        </div>
        <i class="iconfont color-secondgray">&#xe604;</i>
      </div>
    </section>
  </layout-title-bar>

</template>

<script>
import LayoutTitleBar from '@/layout/TitleBar'

export default {
  name: 'Address',
  components: { LayoutTitleBar },
  data () {
    return {}
  },
  methods: {
    routerLeft () { this.$router.go(-1) },
    addAddress (routeName) { this.$router.push({ name: routeName }) },
    editAddress (item) { this.$router.push({ name: 'Profile-Address-Edit', params: { address: item } }) }
  }
}
</script>

<style lang="scss" scoped>
.address {
  background-color: #ffffff;
  .address-item {
    display: flex;
    justify-content: space-between;
    align-items: center;
    border-bottom: 1px solid #f0f0f0;
    padding: 10px 20px;
    height: 80px;
    .item-left {
      .head {
        .name { color: orange; }
        .tel { font-size: 14px; }
      }
      .main, .foot {
        margin-top: 4px;
        font-size: 14px;
      }
    }
  }
}

</style>
