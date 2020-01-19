<template>
  <CalendarComponent :events="data"/>
</template>
<script>

import CalendarComponent from '@/components/Generic/CalendarComponent.vue'

export default {
  name: 'Day0',
  props: ['data'],
  components: {
    CalendarComponent
  }
}
</script>
