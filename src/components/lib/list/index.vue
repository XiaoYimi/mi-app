<template>
  <section class="list">
    <div
      v-for="(item, lid) of list"
      :key="lid"
      @click="routerTo(item.route)"
      class="list-item"
      :style="'height:' + height + 'px;'">
      <i :class="['iconfont', item.icon !== '' ? 'ml-20' : '']"
        v-html="item.icon"
        :style="'color:' + item.iconColor + ';font-size:' + item.iconSize + 'px;'"></i>
      <div class="bar ml-20">
        <span class="text">{{ item.text }}</span>
        <div>
          <span class="color-secondgray">{{ item.remark ? item.remark : '' }}</span>
          <i v-if="!item.arrow" class="iconfont color-secondgray ml-10 mr-20">&#xe604;</i>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  props: {
    list: { type: Array, default: () => [] }, // { route, icon, iconColor, text, remark, arrow(bool) }
    height: { type: Number, default: 50 }
  },
  data () {
    return {}
  },
  computed: {
    itemHeight () {
      return {
        height: this.height ? this.height : 60 + 'px'
      }
    }
  },
  methods: {
    routerTo (routeName) {
      const routes = [
        'Profile-Secret-Account',
        'Profile-Secret-Email',
        'Profile-Secret-Phone',
        'Profile-Secret-Problem'
      ]
      const bool = routes.some(item => item === routeName)
      if (bool && !this.$store.state.secretState) {
        this.$router.push({ name: 'Profile-Phone-Input' })
      } else {
        this.$router.push({ name: routeName })
      }
    }
  }
}
</script>

<style lang="scss" scoped>
.list {
  background-color: #ffffff;
  .list-item {
    display: flex;
    justify-content: space-between;
    align-items: center;

    .bar {
      flex: 1;
      display: flex;
      justify-content: space-between;
      align-items: center;
      border-bottom: 1px solid #f0f0f0;
      height: inherit;
    }

    &:last-child { .bar { border-bottom: 0; } }
  }
}
</style>
