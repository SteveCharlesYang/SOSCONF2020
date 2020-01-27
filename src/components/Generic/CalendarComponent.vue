<template>
  <div>
    <FullCalendar
      class="CalendarComponent"
      :plugins="calendarPlugins"
      :allDaySlot="allDay"
      defaultDate="2020-05-16"
      defaultView="listWeek"
      events="/data/events.json"
      :contentHeight="height"
      timeGridEventMinHeight="1"
      :firstDay="firstDay"
      :timeGrid="false"
      :hiddenDays="hiddenDays"
      :minTime="minTime"
      :maxTime="maxTime"
      locale="zh"
      :header="header"
      ref="main"
    />
  </div>
</template>

<script>
import FullCalendar from "@fullcalendar/vue";
import listPlugin from "@fullcalendar/list";
import dayGridPlugin from "@fullcalendar/daygrid";
import timeGridPlugin from "@fullcalendar/timegrid";
import interactionPlugin from "@fullcalendar/interaction";

export default {
  components: {
    FullCalendar
  },
  data() {
    return {
      calendarPlugins: [
        listPlugin,
        dayGridPlugin,
        timeGridPlugin,
        interactionPlugin
      ],
      timeGridProp: {
        weekends: false
      },
      height: 1000,
      header: false,
      firstDay: 6,
      allDay: false,
      hiddenDays: [1, 2, 3, 4, 5],
      minTime: "07:00:00",
      maxTime: "20:00:00"
    };
  },
  name: "CalendarComponent"
};
</script>
<style lang="scss">
@import "~@fullcalendar/core/main.css";

.fc-scroller {
  height: auto !important;
}

.fc-event {
  bottom: auto !important;
}
</style>
