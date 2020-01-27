<template>
  <div>
    <h2 id="about-contributor">
      筹备委员会
      <small class="text-muted">Preparatory Committee</small>
    </h2>
    <!-- <div class="row">
      <div class="card col-md-5 ml-auto mr-auto">
        <div class="card-body" align="center">
          <img
            src="@/assets/img/logo.png"
            alt="test"
            class="img-raised rounded-circle img-fluid"
          />
          <h4 class="card-title">Special title treatment</h4>
          <p class="card-text">
            With supporting text below as a natural lead-in to additional
            content.
          </p>
          <a href="#0" class="btn btn-primary">Go somewhere</a>
        </div>
      </div>
    </div> -->
    <h3 id="about-volunteer">
      志愿者
      <small class="text-muted">Volunteer</small>
    </h3>
    <div class="card" align="center">
      <div class="card-body">
        <h3 class="card-title">
          <i class="material-icons">sentiment_satisfied_alt</i>最衷心的感谢
        </h3>
        <h5 class="card-text">
          2020中文学生开源年会的成功举办与你们的志愿服务息息相关！
        </h5>
        <!-- <button
          type="button"
          class="btn btn-primary"
          data-toggle="modal"
          data-target=".volunteer-modal"
        >
          查看所有志愿者
        </button> -->
      </div>
    </div>
    <StaffList :name="{ zh: '媒体', en: 'Media' }" :list="staff.media" />
    <StaffList
      :name="{ zh: '技术支持', en: 'Technical Supporter' }"
      :list="staff.tech"
    />
    <StaffList :name="{ zh: '赞助', en: 'Sponsor' }" :list="staff.sponsor" />
    <StaffList :name="{ zh: '场地', en: 'Site' }" :list="staff.area" />
  </div>
</template>

<script>
import staff from "@/data/staff.json";

import StaffList from "@/components/About/StaffList";

export default {
  name: "Contributor",
  data() {
    return {
      staff: staff
    };
  },
  components: {
    StaffList
  }
};
</script>
