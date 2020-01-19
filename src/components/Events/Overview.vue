<template>
  <vue-cal
  class="vuecal--blue-theme"
  :events="data"
  selected-date="2020-05-16"
  locale="zh-cn"
  hide-view-selector
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
  props: ['data'],
  name: 'Overview'
}
</script>
