<template>
  <div class="home">
    <Head />
    <div class="main main-raised">
      <Introduction />
      <Map />
    </div>
  </div>
</template>

<script>
// @ is an alias to /src
import Head from "@/components/Home/Head.vue";
import Introduction from "@/components/Home/Introduction.vue";
import Map from "@/components/Home/Map.vue";

export default {
  name: "home",
  components: {
    Head,
    Introduction,
    Map
  },
  beforeCreate: function() {
    document.body.className = "body-light";
  }
};
</script>
