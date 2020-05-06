<template>
  <layout-title-bar
    left-arrow
    left-text="密保问题设置"
    class="page"
  >
    <p class="title">密保问题设置</p>

    <section class="problem">
      <van-dropdown-menu>
        <van-dropdown-item
          v-model="selected1"
          :options="options" />
      </van-dropdown-menu>
      <van-field
        required
        autofocus
        v-model="response1"
        label="您的回答"
        placeholder="请输入"></van-field>
    </section>

    <section class="problem">
      <van-dropdown-menu>
        <van-dropdown-item
          v-model="selected2"
          :options="options" />
      </van-dropdown-menu>
      <van-field
        required
        autofocus
        v-model="response2"
        label="您的回答"
        placeholder="请输入"></van-field>
    </section>

    <section class="problem">
      <van-dropdown-menu>
        <van-dropdown-item
          v-model="selected3"
          :options="options" />
      </van-dropdown-menu>
      <van-field
        required
        autofocus
        v-model="response3"
        label="您的回答"
        placeholder="请输入"></van-field>
    </section>

    <van-button
      type="primary"
      @click="save"
      class="btn">保存</van-button>

    <bg-fixed bg="#ffffff" />
  </layout-title-bar>
</template>

<script>
import Vue from 'vue'
import LayoutTitleBar from '@/layout/TitleBar'
import bgFixed from '@/components/lib/bg/fixed'
import { DropdownMenu, DropdownItem, Field, Button } from 'vant'
import 'vant/lib/dropdown-menu/style'
import 'vant/lib/dropdown-item/style'
import 'vant/lib/field/style'
import 'vant/lib/button/style'
Vue.use(DropdownMenu).use(DropdownItem).use(Field).use(Button)

export default {
  name: 'Profile-Secret-Problem',
  components: { LayoutTitleBar, bgFixed },
  data () {
    return {
      selected1: 0,
      response1: '',
      selected2: 1,
      response2: '',
      selected3: 2,
      response3: '',
      options: [
        { value: 0, text: '你父亲的名字' },
        { value: 1, text: '你母亲的名字' },
        { value: 2, text: '你爷爷的名字' },
        { value: 3, text: '你奶奶的名字' },
        { value: 4, text: '你哥哥的名字' },
        { value: 5, text: '你姐姐的名字' },
        { value: 6, text: '你妹妹的名字' },
        { value: 7, text: '你弟弟的名字' },
        { value: 8, text: '你小学班主任的名字' },
        { value: 9, text: '你最好的朋友的名字' },
        { value: 10, text: '你的暗恋对象是?' }
      ]
    }
  },
  methods: {
    save () {
      const selectedObj = [
        { id: this.selected1, name: this.options[this.selected1].text, value: this.response1 },
        { id: this.selected2, name: this.options[this.selected2].text, value: this.response2 },
        { id: this.selected3, name: this.options[this.selected3].text, value: this.response3 }
      ]

      let hasRepeat = false
      for (let i = 0; i < selectedObj.length; i++) {
        for (let j = i + 1; j < selectedObj.length; j++) {
          if (selectedObj[i].id === selectedObj[j].id) { hasRepeat = true }
        }
      }
      if (hasRepeat) { this.$toast('密保问题不能重复设置'); return false }

      console.log(selectedObj)
      // 请求-保存
      // 成功
      this.$toast('设置成功')
      this.$store.dispatch('exec_close_secretstate')
      setTimeout(() => this.$router.push({ name: 'Profile-Secret' }), 2000)
    }
  }
}
</script>

<style lang="scss" scoped>
@import '@/assets/scss/user-page.scss';
.problem {
  margin-top: 40px;
  padding-bottom: 15px;
  border-bottom: 1px solid #f0f0f0;
}
</style>
