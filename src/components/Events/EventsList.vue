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
                  href="#overview"
                  role="tablist"
                  aria-expanded="true"
                >Overview</a>
              </li>
              <li class="nav-item">
                <a
                  class="nav-link"
                  data-toggle="tab"
                  href="#day0"
                  role="tablist"
                  aria-expanded="true"
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
                    href="#day1-main"
                    role="tablist"
                    aria-expanded="false"
                  >主会场</a>
                  <div class="dropdown-divider"></div>
                  <a class="dropdown-item" href="#">分会场1</a>
                </div>
              </li>
              <li class="nav-item">
                <a
                  class="nav-link"
                  data-toggle="tab"
                  href="#day2"
                  role="tablist"
                  aria-expanded="false"
                >Day 2 / 第三天</a>
              </li>
            </ul>
          </div>
        </div>
      </div>
      <div class="card-body">
        <div class="tab-content text-center">
          <div class="tab-pane active" id="overview" aria-expanded="false">
            <Overview :data="events" />
          </div>
          <div class="tab-pane" id="day0" aria-expanded="false">
            <Day0 :data="events" />
          </div>
          <div class="tab-pane" id="day1-main" aria-expanded="false">
            <Day0 :data="events" />
          </div>
          <div class="tab-pane" id="day2" aria-expanded="false">
            <Day0 :data="events" />
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import Day0 from '@/components/Events/Days/Day0.vue'
import Overview from '@/components/Events/Overview.vue'

export default {
  name: 'EventsList',
  data: () => ({
    events: [
      {
        start: '2020-05-16 09:00',
        end: '2020-05-16 09:30',
        title: '开幕式'
      },
      {
        start: '2020-05-16 09:30',
        end: '2020-05-16 10:30',
        title: '主题演讲 I'
      },
      {
        start: '2020-05-16 10:30',
        end: '2020-05-16 10:50',
        title: '休憩与闪电演讲'
      },
      {
        start: '2020-05-16 10:50',
        end: '2020-05-16 11:50',
        title: '主题演讲 II'
      },
      {
        start: '2020-05-16 11:50',
        end: '2020-05-16 14:00',
        title: '午休',
        class: 'test',
        background: true
      },
      {
        start: '2020-05-16 14:00',
        end: '2020-05-16 17:30',
        title: '分会场活动'
      },
      {
        start: '2020-05-16 18:30',
        end: '2020-05-16 20:30',
        title: '晚宴与开源圆桌会议'
      },
      {
        start: '2020-05-17 09:30',
        end: '2020-05-17 10:30',
        title: '主题演讲 III'
      },
      {
        start: '2020-05-17 10:30',
        end: '2020-05-17 10:50',
        title: '休憩与闪电演讲'
      },
      {
        start: '2020-05-17 10:50',
        end: '2020-05-17 11:50',
        title: '主题演讲 IV'
      },
      {
        start: '2020-05-17 11:50',
        end: '2020-05-17 14:00',
        title: '午休',
        class: 'test',
        background: true
      },
      {
        start: '2020-05-17 14:00',
        end: '2020-05-17 17:30',
        title: '分会场活动'
      },
      {
        start: '2019-12-26 11:00',
        end: '2019-12-26 15:30',
        title: 'test',
        class: 'test',
        background: true
      }
    ]
  }),
  components: {
    Overview,
    Day0
  }
}
</script>
