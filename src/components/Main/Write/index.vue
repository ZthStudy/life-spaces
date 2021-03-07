<!--
 * @Description: 
 * @version: 1.0.0
 * @Author: zhangtianhou
 * @Date: 2021-03-03 15:09:55
 * @LastEditors: zhangtianhou
 * @LastEditTime: 2021-03-07 15:27:43
-->
<template>
  <a-space>
    <a-input
      class="mb10"
      v-model:value="title"
      placeholder="输入文章标题"
    >
      <template #prefix>
        <span class="mr10">文章标题</span>
      </template>
    </a-input>
    <a-input v-model:value="sort" placeholder="输入分类">
      <template #prefix>
        <span class="mr10">分类</span>
      </template>
    </a-input>
  </a-space>
  <div id="wangEditor"></div>
  <a-button type="primary" @click="submit(title, sort)"
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
    const submit = (title: string, sort: string): void => {
      console.log({ title, sort, content: wangEditor.txt.html() });
      const res = axios.post("http://localhost:8000/api/blog", {
        title,
        sort,
        content: wangEditor.txt.html(),
      });
      console.log({ res });
    };

    return {
      title: ref(""),
      sort: ref("js"),
      submit,
    };
  },
});
</script>
<style scoped>
</style>