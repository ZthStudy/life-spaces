<!--
 * @Description: 
 * @version: 1.0.0
 * @Author: zhangtianhou
 * @Date: 2021-03-11 13:54:57
 * @LastEditors: zhangtianhou
 * @LastEditTime: 2021-03-20 11:12:53
-->
<template>
  <div class="relative px-4">
    <app-locale-picker></app-locale-picker>
  </div>
</template>
<script lang='ts'>
import { defineComponent } from "vue";
import { AppLocalePicker } from "@/components/Application";
export default defineComponent({
  name: "Login",
  components: {
    AppLocalePicker,
  },
  props: [],
  setup: () => {},
});
</script>
<style scoped>
</style>