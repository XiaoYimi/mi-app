<template>
  <div class="layout-tabbar">
    <slot/>
    <vant-tabbar></vant-tabbar>
  </div>
</template>

<script>
import vantTabbar from '../components/lib/tabbar/vant-tabbar'
export default {
  name: 'Layout-Tabbar',
  components: { vantTabbar }
}
</script>

<style lang="scss" scoped>
.layout-tabbar { padding-bottom: 50px; }
</style>
