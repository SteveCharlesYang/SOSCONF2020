<template>
  <div id="app">
    <NavBar/>
    <transition name="slide-fade">
      <router-view/>
    </transition>
    <Foot/>
  </div>
</template>

<script>
import NavBar from '@/components/NavBar.vue'
import Foot from '@/components/Foot.vue'

export default {
  name: 'App',
  components: {
    NavBar,
    Foot
  }
}
</script>

<style lang="scss">
.slide-fade-enter-active {
  transition: all .3s ease;
}
.slide-fade-leave-active {
  transition: all .3s cubic-bezier(1.0, 0.5, 0.8, 1.0);
}
.slide-fade-enter, .slide-fade-leave-to
/* .slide-fade-leave-active for below version 2.1.8 */ {
  transform: translateX(10px);
  opacity: 0;
}
</style>
