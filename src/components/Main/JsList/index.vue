<!--
 * @Description: 
 * @version: 1.0.0
 * @Author: zhangtianhou
 * @Date: 2021-02-15 11:34:24
 * @LastEditors: zhangtianhou
 * @LastEditTime: 2021-02-23 19:28:54
-->
<template>
  <div>jslist</div>
  <a-input class="mb10" v-model:value="articleTitle" placeholder="输入文章标题">
    <template #prefix>
      <span class="mr10">文章标题</span>
    </template>
  </a-input>
  <div id="wangEditor"></div>
  <a-button type="primary" @click="submit">提交</a-button>
</template>
<script lang='ts'>
import { defineComponent, onMounted, ref } from "vue";
import E from "wangeditor";
export default defineComponent({
  name: "JsList",
  components: {},
  props: [],
  setup: () => {
    let editor: any = null;
    onMounted(() => {
      editor = new E("#wangEditor");
      editor.create();
    });
    const articleTitle = ref<string>("");
    const submit = () => {
      console.log({ articleTitle, content: editor.txt.html() });
    };
    return {
      articleTitle,
      submit,
    };
  },
});
</script>
<style scoped>
</style>