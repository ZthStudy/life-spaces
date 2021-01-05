<template>
  <div class="side">
    <h1>Life Spaces</h1>
  </div>
</template>
<script lang='ts'>
import { defineComponent } from "vue";
export default defineComponent({
  name: "SideBar",
  components: {},
  props: [],
  setup: () => {},
});
</script>
<style lang="scss" scoped>
.side {
  width: 20%;
  header {
    width: 100%;
    height: 50px;
    line-height: 50px;
    text-align: center;
  }
}
</style>