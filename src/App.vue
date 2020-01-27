<template>
  <div id="app">
    <NavBar />
    <transition name="fade" mode="out-in">
      <router-view />
    </transition>
    <Foot />
    <GlobalModal modal_id="qqqrcode" :modal_content="qqqrcode" />
    <GlobalModal modal_id="weiboqrcode" :modal_content="weiboqrcode" />
  </div>
</template>

<script>
import NavBar from "@/components/NavBar.vue";
import Foot from "@/components/Foot.vue";
import GlobalModal from "@/components/Generic/GlobalModal.vue";
import qqqrcode from "@/assets/img/qqqrcode.jpg";
import weiboqrcode from "@/assets/img/weiboqrcode.jpg";

export default {
  name: "App",
  components: {
    NavBar,
    Foot,
    GlobalModal
  },
  data() {
    return {
      qqqrcode: qqqrcode,
      weiboqrcode: weiboqrcode
    };
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
