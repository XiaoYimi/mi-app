<template>
  <layout-tabbar>
    Cart
  </layout-tabbar>
</template>

<script>
import LayoutTabbar from '../../layout/Tabbar'
export default {
  components: { LayoutTabbar },
  data () {
    return {}
  },
  created () { this.$api.getToken() }
}
</script>

<style lang="scss" scoped>
</style>
