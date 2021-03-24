<!--
 * @Description: 
 * @version: 1.0.0
 * @Author: zhangtianhou
 * @Date: 2021-03-21 15:03:40
 * @LastEditors: zhangtianhou
 * @LastEditTime: 2021-03-24 10:04:44
-->
<template>
  <span
    ref="elRef"
    :class="[$attrs.class]"
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