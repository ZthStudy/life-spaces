<!--
 * @Description: 
 * @version: 1.0.0
 * @Author: zhangtianhou
 * @Date: 2021-01-07 09:56:08
 * @LastEditors: zhangtianhou
 * @LastEditTime: 2021-02-11 10:58:29
-->
<template>
  <ul class="parent">
    <li
      v-for="(item, index) in parent"
      :key="item.label"
      :class="{ active: clickParentIndex === index }"
      @click="parentClick(item, index)"
    >
      <svg-icon :icon-name="item.icon"></svg-icon>
      {{ item.label }}
      <svg-icon
        v-if="hasChildren(item)"
        :icon-name="item.fold ? 'icon-arrow-down' : 'icon-arrow-up'"
        class-name="arrow"
      ></svg-icon>
      <child-nav :parent="item"></child-nav>
    </li>
  </ul>
</template>
<script lang='ts'>
import { defineComponent, ref } from "vue";
import SvgIcon from "@/components/SvgIcon.vue";
import ChildNav from "./ChildNav.vue";
import { useNav } from "./hooks";
export default defineComponent({
  name: "Nav",
  components: { SvgIcon, ChildNav },
  props: [],
  setup: () => {
    const { parent, hasChildren, clickParentIndex, parentClick } = useNav();
    return {
      parent,
      clickParentIndex,
      parentClick,
      hasChildren,
    };
  },
});
</script>
<style lang="scss" scoped>
ul.parent {
  background: #fff;
  text-align: left;
  padding-top: 20px;
  user-select: none;
  li {
    padding: 5px 10px;
    cursor: pointer;
    font-size: 14px;
    &:hover {
      background: $hover;
    }
    &:visited {
      background: $hover;
    }
    .icon {
      font-size: 16px;
      vertical-align: middle;
      margin-right: 3px;
    }
    .icon.arrow {
      float: right;
    }
  }
  li.active {
    background: $hover;
  }
}
</style>