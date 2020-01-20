<template>
  <div class="page-header header-filter clear-filter purple-filter" data-parallax="true" style="background-image: url('./assets/img/bg2.jpg');">
    <div class="container">
      <div class="row">
        <div class="col-md-8 ml-auto mr-auto">
          <div class="brand">
            <img src="@/assets/logo.png">
            <h2>SOSCONF.ZH 2020 / 2020中文学生开源年会</h2>
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

<style lang="scss">
.brand p {
  margin-top: 10px;
}
.brand p button {
  margin-inline-end: 10px;
}
</style>
