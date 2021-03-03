<!--
 * @Description: 
 * @version: 1.0.0
 * @Author: zhangtianhou
 * @Date: 2021-03-03 15:09:55
 * @LastEditors: zhangtianhou
 * @LastEditTime: 2021-03-03 15:47:23
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
    <a-select v-model:value="sortValue">
      <a-select-option value="js">js</a-select-option>
      <a-select-option value="css">css</a-select-option>
      <a-select-option value="travel">travel</a-select-option>
      <a-select-option value="note">note</a-select-option>
    </a-select>
  </a-space>
  <div id="wangEditor"></div>
  <a-button type="primary" @click="submit">提交</a-button>
</template>
<script lang='ts'>
import { defineComponent, onMounted, ref } from "vue";
import E from "wangeditor";
export default defineComponent({
  name: "Write",
  components: {},
  props: [],
  setup: () => {
    let editor: any = null;
    onMounted(() => {
      editor = new E("#wangEditor");
      editor.create();
    });
    const articleTitle = ref("");
    const sortValue = ref("js");
    const submit = () => {
      console.log({ articleTitle, sortValue, content: editor.txt.html() });
    };
    return {
      articleTitle,
      sortValue,
      submit,
    };
  },
});
</script>
<style scoped>
</style>