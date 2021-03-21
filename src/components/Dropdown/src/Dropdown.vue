<!--
 * @Description: 
 * @version: 1.0.0
 * @Author: zhangtianhou
 * @Date: 2021-03-20 11:16:12
 * @LastEditors: zhangtianhou
 * @LastEditTime: 2021-03-21 14:15:50
-->
<template>
  <a-dropdown v-bind="$attrs">
    <slot></slot>
    <template #overlay>
      <a-menu>
        <a-menu-item
          v-for="item in dropMenuList"
          :key="`${item.event}`"
          @click="handleClickMenu(item)"
        >
          <span>{{ item.text }}</span>
        </a-menu-item>
      </a-menu>
    </template>
  </a-dropdown>
</template>
<script lang='ts'>
import { defineComponent } from "vue";
import { Dropdown, Menu } from "ant-design-vue";
import type { PropType } from "vue";
import type { DropMenu } from "@/components/Dropdown/src/types";

export default defineComponent({
  name: "BasicDropdown",
  components: {
    [Dropdown.name]: Dropdown,
    [Menu.name]: Menu,
    [Menu.Item.name]: Menu.Item,
  },
  props: {
    dropMenuList: {
      type: Array as PropType<DropMenu[]>,
    },
  },
  setup: () => {},
});
</script>
<style scoped>
</style>