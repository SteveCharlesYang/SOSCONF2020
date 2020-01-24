<template>
  <div class="sub">
    <Head/>
    <div class="main main-raised">
      <SubInfo/>
    </div>
  </div>
</template>

<script>
import Head from '@/components/Sub/Head.vue'
import SubInfo from '@/components/Sub/SubInfo.vue'

export default {
  name: 'sub',
  components: {
    Head,
    SubInfo
  }
}
</script>
