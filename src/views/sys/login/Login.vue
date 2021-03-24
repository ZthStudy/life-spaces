<!--
 * @Description: 
 * @version: 1.0.0
 * @Author: zhangtianhou
 * @Date: 2021-03-11 13:54:57
 * @LastEditors: zhangtianhou
 * @LastEditTime: 2021-03-24 11:07:13
-->
<template>
  <div class="relative px-4">
    <app-locale-picker
      class="absolute top-4 right-4 text-white dd xl:text-gray-600"
    ></app-locale-picker>
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
<style>
.dd {
  transform: translateX(50px);
  opacity: 0;
  animation: aaa 0.4s ease-in-out 0.1s forwards;
}
@keyframes aaa {
  100% {
    opacity: 1;
    transform: translateX(0);
  }
}
</style>