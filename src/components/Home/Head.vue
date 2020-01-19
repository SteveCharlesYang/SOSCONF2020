<template>
  <div class="page-header header-filter clear-filter purple-filter" data-parallax="true" style="background-image: url('./assets/img/bg2.jpg');">
    <div class="container">
      <div class="row">
        <div class="col-md-8 ml-auto mr-auto">
          <div class="brand">
            <img src="@/assets/logo.png">
            <h2>SOSCONF 2020 / 学生开源年会</h2>
            <h3>这里是介绍。太短了不好看，再稍微长一点吧嗯应该差不多了。</h3>
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
