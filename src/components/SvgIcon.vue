<!--
 * @Description: 
 * @version: 1.0.0
 * @Author: zhangtianhou
 * @Date: 2021-01-13 10:10:09
 * @LastEditors: zhangtianhou
 * @LastEditTime: 2021-01-13 10:44:04
-->
<template>
  <svg :class="[className, 'icon']" aria-hidden="true">
    <use :xlink:href="`#${iconName}`"></use>
  </svg>
</template>
<script lang='ts'>
import { defineComponent } from "vue";
export default defineComponent({
  name: "SvgIcon",
  props: {
    iconName: {
      type: String,
      required: true,
    },
    className: String,
  },
  setup: () => {},
});
</script>
<style scoped>
</style>