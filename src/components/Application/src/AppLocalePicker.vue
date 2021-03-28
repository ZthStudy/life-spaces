<!--
 * @Description: 
 * @version: 1.0.0
 * @Author: zhangtianhou
 * @Date: 2021-03-19 16:30:20
 * @LastEditors: zhangtianhou
 * @LastEditTime: 2021-03-28 14:36:56
-->
<template>
  <dropdown
    placement="bottomCenter"
    :trigger="['click']"
    :dropMenuList="localeList"
  >
    <span>
      <Icon :icon="translateIcon" />
    </span>
  </dropdown>
</template>
<script lang='ts'>
import { defineComponent } from "vue";
import { Dropdown } from "@/components/Dropdown";
import { localeList } from "@/settings/localeSetting";
import { Icon } from "@iconify/vue";
import translateIcon from "@iconify-icons/mdi/translate";
export default defineComponent({
  name: "",
  components: { Dropdown, Icon },
  props: [],
  setup: () => {
    return { localeList, translateIcon };
  },
});
</script>
<style scoped>
</style>