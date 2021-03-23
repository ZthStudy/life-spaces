<!--
 * @Description: 
 * @version: 1.0.0
 * @Author: zhangtianhou
 * @Date: 2021-03-19 16:30:20
 * @LastEditors: zhangtianhou
 * @LastEditTime: 2021-03-23 15:16:45
-->
<template>
  <dropdown
    placement="bottomCenter"
    :trigger="['click']"
    :dropMenuList="localeList"
  >
    <Icon icon="ion:language" />
  </dropdown>
</template>
<script lang='ts'>
import { defineComponent } from "vue";
import { Dropdown } from "@/components/Dropdown";
import { localeList } from "@/settings/localeSetting";
import { Icon } from "@/components/Icon";
export default defineComponent({
  name: "",
  components: { Dropdown,Icon },
  props: [],
  setup: () => {
    return { localeList };
  },
});
</script>
<style scoped>
</style>