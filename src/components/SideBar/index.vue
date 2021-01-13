<template>
  <aside>
    <h1>Life Spaces</h1>
    <side-nav></side-nav>
  </aside>
</template>
<script lang='ts'>
import { defineComponent } from "vue";
import SideNav from "./SideNav.vue";
export default defineComponent({
  name: "SideBar",
  components: { SideNav },
  props: [],
  setup: () => {},
});
</script>
<style lang="scss" scoped>
aside {
  width: 20%;
  h1 {
    width: 100%;
    padding: 20px 0;
    text-align: center;
    background: $textture;
    color: #fff;
    font-size: 1.375em;
    font-weight: normal;
  }
}
</style>