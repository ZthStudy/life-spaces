<!--
 * @Description: 
 * @version: 1.0.0
 * @Author: zhangtianhou
 * @Date: 2021-03-03 15:09:55
 * @LastEditors: zhangtianhou
 * @LastEditTime: 2021-03-05 10:50:31
-->
<template>
  <a-space>
    <a-input
      class="mb10"
      v-model:value="articleTitle"
      placeholder="输入文章标题"
    >
      <template #prefix>
        <span class="mr10">文章标题</span>
      </template>
    </a-input>
    <a-input v-model:value="sortValue" placeholder="输入分类">
      <template #prefix>
        <span class="mr10">分类</span>
      </template>
    </a-input>
  </a-space>
  <div id="wangEditor"></div>
  <a-button type="primary" @click="submit(articleTitle, sortValue)"
    >提交</a-button
  >
</template>
<script lang='ts'>
import { defineComponent, onMounted, ref } from "vue";
// import { Input, Select, Button } from "ant-design-vue";
import E from "wangeditor";
import axios from "axios";
export default defineComponent({
  name: "Write",
  // components: { Input, Select, Button },
  props: [],
  setup() {
    let wangEditor: any;
    onMounted(() => {
      wangEditor = new E("#wangEditor");
      wangEditor.create();
    });
    const submit = (articleTitle: string, sortValue: string): void => {
      console.log({ articleTitle, sortValue, content: wangEditor.txt.html() });
      const res = axios.post("http://localhost:8000/api/blog", {
        articleTitle,
        sortValue,
        content: wangEditor.txt.html(),
      });
      console.log({ res });
    };

    return {
      articleTitle: ref(""),
      sortValue: ref("js"),
      submit,
    };
  },
});
</script>
<style scoped>
</style>