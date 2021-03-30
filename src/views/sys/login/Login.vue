<!--
 * @Description: 
 * @version: 1.0.0
 * @Author: zhangtianhou
 * @Date: 2021-03-11 13:54:57
 * @LastEditors: zhangtianhou
 * @LastEditTime: 2021-03-30 17:31:34
-->
<template>
  <div class="relative px-4" :class="prefixCls">
    <AppLocalePicker
      class="absolute top-4 right-4 enter-x xl:text-gray-600"
    ></AppLocalePicker>
    <AppLogo class="absolute top-4 left-4 xl:hidden"></AppLogo>
  </div>
</template>
<script lang='ts'>
import { defineComponent } from "vue";
import { AppLocalePicker } from "@/components/Application";
import { AppLogo } from "@/components/Application";
import { useDesign } from "@/hooks/web/useDesign";
export default defineComponent({
  name: "Login",
  components: {
    AppLocalePicker,
    AppLogo,
  },
  props: [],
  setup: () => {
    const { prefixCls } = useDesign("login");
    console.log({ prefixCls });
    return { prefixCls };
  },
});
</script>
<style lang="less">
// $login: "tianhou-login";

.tianhou-login {
  img {
    width: 32px;
    color: @red;
  }
}
.enter-x {
  transform: translateX(50px);
  opacity: 0;
  animation: show 0.4s ease-in-out 0.1s forwards;
}
@keyframes show {
  100% {
    opacity: 1;
    transform: translateX(0);
  }
}
</style>