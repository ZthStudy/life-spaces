<template>
  <div class="headband"></div>
  <div class="container">
    <side-bar></side-bar>
    <content></content>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import SideBar from "./components/SideBar/index.vue";
import Content from "./components/Main/index.vue";
export default defineComponent({
  name: "App",
  components: {
    SideBar,
    Content,
  },
});
</script>

<style lang="scss">
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  min-height: 100vh;
  background: $skin;
  line-height: 1.5;
}
</style>

<style scoped>
.container {
  width: 1190px;
  margin: 0 auto;
  display: flex;
}
.headband {
  background: #222;
  height: 3px;
}
</style>