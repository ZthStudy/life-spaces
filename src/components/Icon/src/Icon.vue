<!--
 * @Description: 
 * @version: 1.0.0
 * @Author: zhangtianhou
 * @Date: 2021-03-21 15:03:40
 * @LastEditors: zhangtianhou
 * @LastEditTime: 2021-03-23 16:46:18
-->
<template>
  <span
    ref="elRef"
    :class="[$attrs.class, 'app-iconify anticon']"
  ></span>
</template>
<script lang='ts'>
import { defineComponent, onMounted, ref, unref } from "vue";
import { string } from "vue-types";
import Iconify from "@purge-icons/generated";
export default defineComponent({
  name: "",
  components: {},
  props: {
    icon: string().isRequired,
  },
  setup: (props) => {
    const elRef = ref<ElRef>(null);

    const update = () => {
      const el = unref(elRef);
      if (!el) return;
      const icon = props.icon;
      console.log({ icon });

      if (!icon) return;
      const svg = Iconify.renderSVG(icon, {});
      if (svg) {
        el.textContent = "";
        el.appendChild(svg);
      }
    };

    onMounted(update);

    return { elRef };
  },
});
</script>
<style scoped>
</style>