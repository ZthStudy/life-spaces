<!--
 * @Description: 
 * @version: 1.0.0
 * @Author: zhangtianhou
 * @Date: 2021-01-07 09:56:08
 * @LastEditors: zhangtianhou
 * @LastEditTime: 2021-01-15 13:33:18
-->
<template>
  <ul class="parent">
    <li
      v-for="(parent, parentIndex) in parentNavs"
      :key="parent.label"
      :class="{ active: clickIndex === parentIndex }"
      @click="parentClick(parentIndex)"
    >
      <svg-icon :icon-name="parent.icon"></svg-icon>
      {{ parent.label }}
      <svg-icon
        v-if="isHasChildren(parent)"
        :icon-name="arrow"
        class-name="arrow"
      ></svg-icon>
      <div v-if="isHasChildren(parent)">
        <ul v-show="parent.fold">
          <li
            v-for="(child, childIndex) in parent.children"
            :key="child.label"
            @click.stop="childClick(parentIndex, childIndex)"
          >
            <svg-icon :icon-name="child.icon"></svg-icon>
            {{ child.label }}
          </li>
        </ul>
      </div>
    </li>
  </ul>
</template>
<script lang='ts'>
import { defineComponent, ref } from "vue";
import SvgIcon from "@/components/SvgIcon.vue";
export default defineComponent({
  name: "Nav",
  components: { SvgIcon },
  props: [],
  setup: () => {
    const parentNavs = ref([
      {
        label: "前端",
        icon: "icon-mangguo",
        children: [
          {
            label: "js",
            icon: "icon-shuimitao",
          },
          {
            label: "css",
            icon: "icon-huolongguo",
          },
        ],
        fold: true,
      },
      {
        label: "Node.js",
        icon: "icon-fanqie",
        children: [],
        fold: true,
      },
      {
        label: "Life",
        icon: "icon-xigua",
        children: [],
        fold: true,
      },
      {
        label: "Note",
        icon: "icon-ningmeng",
        children: [],
        fold: true,
      },
    ]);
    const clickIndex = ref(0);
    const arrow = ref("icon-arrow-up");
    const parentClick = (parentIndex: number) => {
      clickIndex.value = parentIndex;
      toggleChildsNav();
      function toggleChildsNav() {
        const curFold = parentNavs.value[parentIndex].fold;
        parentNavs.value[parentIndex].fold = !curFold;
      }
    };

    interface defineNav {
      label: string;
      icon: string;
      children?: defineNav[];
    }
    const isHasChildren = (parent: defineNav) => {
      return parent?.children?.length || false;
    };

    const childClick = () => {
      return false;
    };

    return {
      parentNavs,
      clickIndex,
      parentClick,
      childClick,
      arrow,
      isHasChildren,
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