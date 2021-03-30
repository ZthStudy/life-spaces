<!--
 * @Description: 
 * @version: 1.0.0
 * @Author: zhangtianhou
 * @Date: 2021-03-30 15:12:28
 * @LastEditors: zhangtianhou
 * @LastEditTime: 2021-03-30 16:15:00
-->

<script lang='ts'>
import { defineComponent, toRefs } from "vue";
import VueTypes from "vue-types";
import designSetting from "@/settings/designSetting";
import { createAppProviderContext } from "@/components/Application/src/useAppContext";
export default defineComponent({
  name: "AppProvider",
  props: {
    prefixCls: VueTypes.string.def(designSetting.prefixCls),
  },
  setup: (props, { slots }) => {
    const { prefixCls } = toRefs(props);
    createAppProviderContext({ prefixCls });
    return () => slots.default?.();
  },
});
</script>
<style scoped>
</style>