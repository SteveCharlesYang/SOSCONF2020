<template>
  <ul class="nav nav-pills nav-pills-icons" id="RoleSelection" role="tablist">
    <!--
        color-classes: "nav-pills-primary", "nav-pills-info", "nav-pills-success", "nav-pills-warning","nav-pills-danger"
      -->
    <li class="nav-item">
      <a
        class="nav-link active"
        href="#reg-speaker"
        role="tab"
        data-toggle="tab"
      >
        <i class="material-icons">perm_camera_mic</i>
        演讲者
      </a>
    </li>
    <li class="nav-item">
      <a class="nav-link" href="#reg-volunteer" role="tab" data-toggle="tab">
        <i class="material-icons">favorite</i>
        志愿者
      </a>
    </li>
    <li class="nav-item">
      <a class="nav-link" href="#reg-ticket" role="tab" data-toggle="tab">
        <i class="material-icons">credit_card</i>
        学生票
      </a>
    </li>
    <li class="nav-item">
      <a class="nav-link" href="#reg-community" role="tab" data-toggle="tab">
        <i class="material-icons">people</i>
        合作社区
      </a>
    </li>
  </ul>
</template>
<script>
export default {
  name: "RoleSelection"
};
</script>
<style lang="scss" scoped>
#RoleSelection .nav-item {
  .nav-link {
    color: #fff;
    &:active {
      background-color: #3c4858;
    }
    &.active {
      background-color: #3c4858;
    }
  }
}

#RoleSelection {
  justify-content: center;
}
</style>
