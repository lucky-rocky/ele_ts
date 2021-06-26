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

  mounted() {
    HomeStore.GET_USERNAME()
  }
}
</script>

<style lang="less" scoped></style>
