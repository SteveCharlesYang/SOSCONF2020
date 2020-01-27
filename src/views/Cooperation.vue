<template>
  <div class="cooperation">
    <Head />
    <div class="main main-raised">
      <Intro />
    </div>
  </div>
</template>

<script>
import Head from "@/components/Cooperation/Head.vue";
import Intro from "@/components/Cooperation/Intro.vue";

export default {
  name: "coop",
  components: {
    Head,
    Intro
  },
  beforeCreate: function() {
    document.body.className = "body-dark";
  }
};
</script>
