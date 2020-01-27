<template>
  <div id="app">
    <NavBar />
    <transition name="fade" mode="out-in">
      <router-view />
    </transition>
    <Foot />
  </div>
</template>

<script>
import NavBar from "@/components/NavBar.vue";
import Foot from "@/components/Foot.vue";

export default {
  name: "App",
  components: {
    NavBar,
    Foot
  }
};
</script>

<style lang="scss">
.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.3s;
}
.fade-enter,
.fade-leave-to {
  opacity: 0;
}
</style>
