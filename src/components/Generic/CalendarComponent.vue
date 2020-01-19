<template>
  <vue-cal
  class="vuecal--blue-theme"
  :events="events"
  selected-date="2020-05-16"
  locale="zh-cn"
  hide-view-selector
  default-view="day"
  :disable-views="['years', 'year', 'month']"
  :time-from="10 * 60"
  events-count-on-year-view="events-count-on-year-view"
  events-on-month-view="short" />
</template>
<script>

import VueCal from 'vue-cal'
import 'vue-cal/dist/vuecal.css'
import 'vue-cal/dist/i18n/zh-cn.js'

export default {
  components: { VueCal },
  name: 'CalendarComponent',
  props: ['events']
}
</script>
<style lang="scss">
.vuecal__event {
  background-color: rgba(173, 216, 230, 0.5);
  &.test {
    background: repeating-linear-gradient(45deg, transparent, transparent 10px, #f2f2f2 10px, #f2f2f2 20px);
  }
  &.rest {
    background: repeating-linear-gradient(45deg, transparent, transparent 10px, #f2f2f2 10px, #f2f2f2 20px);
  }
}
</style>
