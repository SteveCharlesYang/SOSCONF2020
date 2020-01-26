<template>
  <div class="page-header header-filter clear-filter" data-parallax="true">
    <div class="container">
      <div class="row">
        <div class="col-md-8 ml-auto mr-auto">
          <div class="brand">
            <img src="@/assets/img/logo.png">
            <h2><b>SOSCONF.ZH 2020 / 2020中文学生开源年会</b></h2>
            <h3>2020 5.17-5.18，Chengdu</h3>
            <p>
              <button class="btn btn-info btn-round">关于年会</button>
              <button class="btn btn-success btn-round">立即报名</button>
            </p>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Head'
}
</script>

<style lang="scss" scoped>
.brand {
  color: #3C4858;
  p {
    margin-top: 10px;
    button {
      margin-inline-end: 10px;
    }
  }
}
</style>
