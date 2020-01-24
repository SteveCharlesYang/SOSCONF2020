<template>
  <div class="about">
    <Head/>
    <div class="main main-raised">
      <AboutSelection/>
    </div>
  </div>
</template>

<script>
// @ is an alias to /src
import Head from '@/components/About/Head.vue'
import AboutSelection from '@/components/About/AboutSelection.vue'

export default {
  name: 'about',
  components: {
    Head,
    AboutSelection
  }
}
</script>
