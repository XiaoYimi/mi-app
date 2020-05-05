<template>
  <div class="bg-fixed" :style="'background-color:' + bg + ';'"></div>
</template>

<script>
export default {
  props: {
    bg: String
  },
  data () {
    return {}
  }
}
</script>

<style lang="scss" scoped>
.bg-fixed {
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  z-index: -1;
}
</style>
