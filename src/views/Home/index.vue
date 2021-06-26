<template>
  <div id="home">
    {{ title }}
    <el-row>
      <el-button type="primary" @click="handleClick">test</el-button>
    </el-row>
  </div>
</template>

<script lang="ts">
import { Vue, Component } from 'vue-property-decorator'
@Component
export default class Home extends Vue {
  title = '首页'

  handleClick() {
    this.$router.push('/home')
  }
}
</script>

<style lang="less" scoped></style>
