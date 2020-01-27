<template>
  <div>
    <h3 id="about-technicalSupporter">
      {{ name.zh }}
      <small class="text-muted">{{ name.en }}</small>
    </h3>
    <div class="row" v-for="i in Math.ceil(list.length / 3)" :key="i">
      <div
        class="card col-md-3 ml-auto mr-auto"
        v-for="j in list.slice((i - 1) * 3, i * 3)"
        :key="j.name"
      >
        <div class="card-body" align="center">
          <img
            v-if="j.image !== ''"
            src="@/assets/img/logo.png"
            alt="test"
            class="img-raised rounded-circle img-fluid"
          />
          <div v-else class="circle-text">
            {{ j.name[0] }}
          </div>
          <h4 class="card-title">
            {{ j.name }}
            <small v-if="typeof j.title !== 'undefined'" class="text-muted"
              ><br />{{ j.title }}</small
            >
          </h4>
          <p class="card-text">
            {{ j.desc }}
          </p>
          <a :href="j.link" class="btn btn-primary" v-if="j.link !== ''"
            >Go somewhere</a
          >
        </div>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  name: "StaffList",
  props: ["name", "list"]
};
</script>
<style lang="scss" scoped>
.circle-text {
  width: 120px;
  height: 120px;
  border-radius: 50%;
  font-size: 50px;
  color: #fff;
  line-height: 120px;
  text-align: center;
  background: #aaa;
}
</style>
