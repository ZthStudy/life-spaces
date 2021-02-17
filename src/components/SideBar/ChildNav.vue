<!--
 * @Description: 
 * @version: 1.0.0
 * @Author: zhangtianhou
 * @Date: 2021-02-10 16:34:32
 * @LastEditors: zhangtianhou
 * @LastEditTime: 2021-02-17 17:04:39
-->
<template>
  <div v-if="hasChildren(parent)" class="pl10">
    <ul :class="parent.fold ? 'slide-out' : 'slide-in'" class="child-panel">
      <li
        v-for="(child, index) in parent.children"
        :key="child.label"
        class="child"
        :class="{
          active:
            index === clickChildIndex && clickParentIndex === parent.index,
        }"
        @click.stop="childClick(index, parent, child)"
      >
        <svg-icon :icon-name="child.icon" class-name="mr5"></svg-icon>
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
  setup: () => {
    const {
      hasChildren,
      childClick,
      clickChildIndex,
      clickParentIndex,
    } = useNav();
    return { hasChildren, childClick, clickChildIndex, clickParentIndex };
  },
});
</script>
<style lang="scss" scoped>
$antiquewhite: antiquewhite;
.child {
  padding: 5px;
  &:hover {
    background: $antiquewhite;
  }
}
.active {
  background: $antiquewhite;
}
.child-panel {
  max-height: 0;
  overflow: hidden;
}
.slide-in {
  transition: max-height 0.15s ease-out;
}
.slide-out {
  max-height: 200px;
  transition: max-height 0.25s ease-in;
}
</style>