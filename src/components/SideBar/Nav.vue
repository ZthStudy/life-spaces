<!--
 * @Description: 
 * @version: 1.0.0
 * @Author: zhangtianhou
 * @Date: 2021-01-07 09:56:08
 * @LastEditors: zhangtianhou
 * @LastEditTime: 2021-01-24 20:05:19
-->
<template>
  <ul class="parent">
    <li
      v-for="(parent, parentIndex) in parentNavs"
      :key="parent.label"
      :class="{ active: clickIndex === parentIndex }"
      @click="parentClick(parentIndex)"
    >
      <svg class="icon" aria-hidden="true">
        <use :xlink:href="`#${parent.icon}`"></use>
      </svg>
      {{ parent.label }}
      <svg v-if="parent.children.length" class="icon arrow" aria-hidden="true">
        <use :xlink:href="`#${arrow}`"></use>
      </svg>
      <ul>
        <li v-for="child in parent.children" :key="child.label">
          <svg class="icon" aria-hidden="true">
            <use :xlink:href="`#${child.icon}`"></use>
          </svg>
          {{ child.label }}
        </li>
      </ul>
    </li>
  </ul>
</template>
<script lang='ts'>
import { defineComponent, onMounted, ref } from "vue";
export default defineComponent({
  name: "Nav",
  components: {},
  props: [],
  setup: () => {
    const parentNavs = [
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
      },
      {
        label: "Node.js",
        icon: "icon-fanqie",
        children: [],
      },
      {
        label: "Life",
        icon: "icon-xigua",
        children: [],
      },
      {
        label: "Note",
        icon: "icon-ningmeng",
        children: [],
      },
    ];
    const clickIndex = ref(0);
    const arrow = ref("icon-arrow-up");
    const parentClick = (parentIndex: number) => {
      clickIndex.value = parentIndex;
    };
    return { parentNavs, clickIndex, parentClick, arrow };
  },
});
</script>
<style lang="scss" scoped>
ul.parent {
  background: #fff;
  text-align: left;
  padding-top: 20px;
  @keyframes falldown {
    0% {
      opacity: 0;
      transform: translateY(-280px);
    }
    50% {
      opacity: 0.5;
      transform: translateY(-140px);
    }
    50% {
      opacity: 1;
      transform: translateY(0);
    }
  }
  animation: falldown 1s ease-out;
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
ul.aniClass {
  // opacity: 1;
  // transform: translateY(0);
}
</style>