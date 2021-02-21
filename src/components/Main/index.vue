<!--
 * @Description: 
 * @version: 1.0.0
 * @Author: zhangtianhou
 * @Date: 2021-02-15 11:36:26
 * @LastEditors: zhangtianhou
 * @LastEditTime: 2021-02-21 16:50:10
-->
<template>
  <div class="main">
    <router-view></router-view>
  </div>
</template>
<script lang='ts'>
import { defineComponent } from "vue";
export default defineComponent({
  name: "Main",
  components: {},
  props: [],
  setup: () => {},
});
</script>
<style scoped>
.main {
  width: calc(100% - 240px);
  min-height: 100vh;
  margin-left: 10px;
  background: #fff;
  padding: 20px;
}
</style>