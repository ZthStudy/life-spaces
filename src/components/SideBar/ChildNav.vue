<!--
 * @Description: 
 * @version: 1.0.0
 * @Author: zhangtianhou
 * @Date: 2021-02-10 16:34:32
 * @LastEditors: zhangtianhou
 * @LastEditTime: 2021-02-10 17:46:02
-->
<template>
  <div v-if="hasChildren(parent)">
    <ul v-show="parent.fold">
      <li
        v-for="(child, index) in parent.children"
        :key="child.label"
        :class="{ active: index === childClick }"
        @click.stop="childClick(index)"
      >
        <svg-icon :icon-name="child.icon"></svg-icon>
        {{ child.label }}
      </li>
    </ul>
  </div>
</template>
<script lang='ts'>
import { defineComponent } from "vue";
import { useNav } from "./hooks";
import SvgIcon from "@/components/SvgIcon.vue";
export default defineComponent({
  name: "ChildNav",
  components: { SvgIcon },
  props: ["parent"],
  setup: (props) => {
    const { hasChildren, childClick } = useNav();
    return { hasChildren, childClick };
  },
});
</script>
<style scoped>
</style>