<template>
  <div class="cooperation">
    <Head />
    <div class="main main-raised">
      <Intro />
    </div>
    <VolunteerModal />
  </div>
</template>

<script>
import Head from "@/components/Cooperation/Head.vue";
import Intro from "@/components/Cooperation/Intro.vue";
import VolunteerModal from "@/components/Cooperation/VolunteerModal";

export default {
  name: "coop",
  components: {
    Head,
    Intro,
    VolunteerModal
  },
  beforeCreate: function() {
    document.body.className = "body-dark";
  }
};
</script>
