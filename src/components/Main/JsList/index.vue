<!--
 * @Description: 
 * @version: 1.0.0
 * @Author: zhangtianhou
 * @Date: 2021-02-15 11:34:24
 * @LastEditors: zhangtianhou
 * @LastEditTime: 2021-02-21 16:49:04
-->
<template>
  <div>jslist</div>
  <div id="editor"></div>
</template>
<script lang='ts'>
import { defineComponent, onMounted } from "vue";
import E from "wangeditor";
export default defineComponent({
  name: "JsList",
  components: {},
  props: [],
  setup: () => {
    onMounted(() => {
      console.log(1);
      const editor = new E("#editor");
      editor.create();
    });
  },
});
</script>
<style scoped>
</style>