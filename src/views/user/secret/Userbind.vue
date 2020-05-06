<template>
  <layout-title-bar
    left-arrow
    left-text="授权绑定"
    class="page"
  >
    <p class="title">授权绑定</p>

    <section class="list">
      <div
        v-for="(item, lid) of list"
        :key="lid"
        @click="handDelete(item)"
        class="list-item">
        <div class="content">
          <img :src="item.src" alt="logo" class="content-left">
          <div class="content-right">
            <div class="right-title">{{ item.name }}</div>
            <span
              class="right-state"
              :style="'background-color:' + (item.state ? '#07c160' : '#078560;')"
            >{{ item.state ? '已绑定' : '未绑定' }}</span>
          </div>
        </div>
        <i class="iconfont color-secondgray">&#xe604;</i>
      </div>
    </section>

    <bg-fixed bg="#ffffff" />
  </layout-title-bar>
</template>

<script>
import LayoutTitleBar from '@/layout/TitleBar'
import bgFixed from '@/components/lib/bg/fixed'

export default {
  name: 'Profile-Secret-Userbind',
  components: { LayoutTitleBar, bgFixed },
  data () {
    return {
      list: [
        { id: 1, name: '微信', src: '', state: false, token: 'hngbfdg564rtsh.hhrst5gb' },
        { id: 2, name: '微信', src: '', state: true, token: 'hngbfdg564rtsh.hhrst5gb' },
        { id: 3, name: '微信', src: '', state: false, token: 'hngbfdg564rtsh.hhrst5gb' }
      ]
    }
  },
  methods: {
    handDelete (obj) {
      this.$router.push({ name: 'Profile-Secret-Userbind-Delete', params: { authorize: obj } })
    }
  }
}
</script>

<style lang="scss" scoped>
@import '@/assets/scss/user-page.scss';
.list {
  .list-item {
    display: flex;
    justify-content: space-between;
    align-items: center;
    border-bottom: 1px solid #f0f0f0;
    padding: 10px 15px;

    .content {
      display: flex;
      align-items: center;
      .content-left {
        margin-right: 15px;
      }
      .content-right {
        .right-title {
          margin-bottom: 5px;
          font-weight: 600;
        }
        .right-state {
          display: inline-block;
          border-radius: 4px;
          padding: 4px 6px;
          font-size: 14px;
          color: #ffffff;
        }
      }
    }
  }
}
</style>
