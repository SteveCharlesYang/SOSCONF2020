<template>
  <div>
    <div class="card card-nav-tabs">
      <div class="card-header card-header-primary">
        <!-- colors: "header-primary", "header-info", "header-success", "header-warning", "header-danger" -->
        <div class="nav-tabs-navigation">
          <div class="nav-tabs-wrapper">
            <ul class="nav nav-tabs" role="tablist">
              <li class="nav-item">
                <a
                  class="nav-link active"
                  data-toggle="tab"
                  role="tablist"
                  aria-expanded="true"
                  v-on:click="changeview('listWeek')"
                >Overview</a>
              </li>
              <li class="nav-item">
                <a
                  class="nav-link"
                  data-toggle="tab"
                  role="tablist"
                  aria-expanded="true"
                  v-on:click="changeview('timeGridDay',0)"
                >Day 0 / 第一天</a>
              </li>
              <li class="nav-item dropdown">
                <a
                  class="nav-link dropdown-toggle"
                  data-toggle="dropdown"
                  role="button"
                  aria-haspopup="true"
                  aria-expanded="false"
                >Day 1 / 第二天</a>
                <div class="dropdown-menu">
                  <a
                    class="dropdown-item"
                    data-toggle="tab"
                    role="tablist"
                    aria-expanded="false"
                    v-on:click="changeview('timeGridDay',1)"
                  >主会场</a>
                  <div class="dropdown-divider"></div>
                  <a class="dropdown-item"
                  v-on:click="changeview('timeGridDay',1,1)">分会场1</a>
                </div>
              </li>
              <li class="nav-item">
                <a
                  class="nav-link"
                  data-toggle="tab"
                  role="tablist"
                  aria-expanded="false"
                  v-on:click="changeview('timeGridDay',2)"
                >Day 2 / 第三天</a>
              </li>
            </ul>
          </div>
        </div>
      </div>
      <div class="card-body">
        <div class="tab-content text-center">
          <div class="tab-pane active" id="overview" aria-expanded="false">
            <CalendarComponent
              ref="CalendarComponent"
            />
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import CalendarComponent from '@/components/Generic/CalendarComponent.vue'

export default {
  name: 'EventsList',
  components: {
    CalendarComponent
  },
  methods: {
    changeview: function (view, day = 0, sub = 0) {
      let calendarApi = this.$refs.CalendarComponent.$refs.main.getApi()
      calendarApi.gotoDate('2020-05-' + (16 + day))
      calendarApi.changeView(view)
    }
  }
}
</script>
<style lang="scss">
@import '~@fullcalendar/daygrid/main.css';
@import '~@fullcalendar/timegrid/main.css';
@import '~@fullcalendar/list/main.css';
</style>
