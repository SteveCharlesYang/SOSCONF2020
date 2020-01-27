<template>
  <div class="card-body">
    <div class="row">
      <div class="col-md-3">
        <ul class="nav nav-pills nav-pills-primary flex-column">
          <li class="nav-item">
            <a class="nav-link active" href="#community" data-toggle="tab"
              >合作社区</a
            >
          </li>
          <li class="nav-item">
            <a class="nav-link" href="#contributor" data-toggle="tab">贡献者</a>
          </li>
        </ul>
      </div>
      <div class="col-md-9">
        <div class="tab-content">
          <div class="tab-pane active" id="community"><Community /></div>
          <div class="tab-pane" id="contributor"><Contributor /></div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import Community from "@/components/About/Community.vue";
import Contributor from "@/components/About/Contributor.vue";

export default {
  name: "AboutSelection",
  components: {
    Community,
    Contributor
  }
};
</script>
