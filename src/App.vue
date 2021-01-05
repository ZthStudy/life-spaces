<template>
  <SideBar></SideBar>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import SideBar from "./components/SideBar/index.vue";

export default defineComponent({
  name: "App",
  components: {
    SideBar
  },
});
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
  width: 1190px;
  margin: 0 auto;
}
</style>