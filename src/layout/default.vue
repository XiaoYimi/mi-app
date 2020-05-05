<template>
  <div class="layout-default">
    <layout-title-bar left-text="返回" right-text="按钮" title="标题" @click-right="func"></layout-title-bar>
    <span @click="func1">135456</span>
  </div>
</template>

<script>
import LayoutTitleBar from './TitleBar'
export default {
  components: { LayoutTitleBar },
  data () {
    return {}
  },
  methods: {
    func () { console.log('click right ') },
    func1 () {
      this.$dialog.alert({
        title: '标题',
        message: '弹窗内容',
        showCancelButton: true
      }).then(() => {
        console.log('close dialog, confirm')
      }).catch(() => {
        console.log('close dialog, cancel')
      })
    }
  }
}
</script>
<style lang="scss" scoped>
</style>
