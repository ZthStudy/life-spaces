<!--
 * @Description: 
 * @version: 1.0.0
 * @Author: zhangtianhou
 * @Date: 2021-03-21 15:03:40
 * @LastEditors: zhangtianhou
 * @LastEditTime: 2021-03-21 15:03:40
-->
<template>
  <span
    ref="elRef"
    :class="[$attrs.class, 'app-iconify anticon']"
    :style="getWrapStyle"
  ></span>
</template>
<script lang='ts'>
import { defineComponent } from "vue";
export default defineComponent({
  name: "",
  components: {},
  props: {
    
  },
  setup: () => {},
});
</script>
<style scoped>
</style>