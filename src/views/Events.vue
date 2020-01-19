<template>
  <div class="events">
    <Head/>
    <div class="main main-raised">
      <EventsList/>
    </div>
  </div>
</template>

<script>
// @ is an alias to /src
import EventsList from '@/components/Events/EventsList.vue'
import Head from '@/components/Events/Head.vue'

export default {
  name: 'events',
  components: {
    Head,
    EventsList
  }
}
</script>
