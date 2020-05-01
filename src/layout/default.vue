<template>
  <div>
    <slot/>
    <vant-tabbar></vant-tabbar>
  </div>
</template>

<script>
import vantTabbar from '../components/lib/tabbar/vant-tabbar'
export default {
  name: 'Layout-default',
  components: { vantTabbar }
}
</script>

<style lang="scss" scoped>
</style>
