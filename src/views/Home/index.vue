<template>
  <div id="home">
    {{ title }}
    <el-row>
      <el-button type="primary" @click="handleClick">{{ username }}</el-button>
    </el-row>
  </div>
</template>

<script lang="ts">
import { Vue, Component } from 'vue-property-decorator'
import { HomeStore } from '@/store/modules/home'
import webRequest from '@/api/webRequest/index'
@Component
export default class Home extends Vue {
  title = '首页'

  // test, could be deleted
  get username() {
    console.log('username', HomeStore.username)
    return HomeStore.username
  }

  handleClick() {
    this.$router.push('/home')
  }

  async mounted() {
    HomeStore.GET_USERNAME()
    const data = await webRequest.getCity('guess')
    // console.log(res.pinyin)
    // TODO: 不检测当前代码的驼峰
    /* eslint-disable @typescript-eslint/camelcase */
    const res = await webRequest.postE({
      name: '热销榜',
      description: '很好',
      restaurant_id: 1
    })
    console.log(res.sussess)
  }
}
</script>

<style lang="less" scoped></style>
