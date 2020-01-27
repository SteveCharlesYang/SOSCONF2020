<template>
  <nav
    class="navbar navbar-color-on-scroll fixed-top navbar-expand-lg navbar-transparent"
    color-on-scroll="100"
    id="sectionsNav"
  >
    <div class="container">
      <div class="navbar-translate">
        <router-link to="/" class="navbar-brand">
          <b>SOSCONF.ZH 2020</b>
        </router-link>
        <button
          class="navbar-toggler"
          type="button"
          data-toggle="collapse"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span class="sr-only">Toggle navigation</span>
          <span class="navbar-toggler-icon"></span>
          <span class="navbar-toggler-icon"></span>
          <span class="navbar-toggler-icon"></span>
        </button>
      </div>
      <div class="collapse navbar-collapse">
        <ul class="navbar-nav ml-auto">
          <li class="nav-item">
            <router-link to="/reg" class="nav-link">
              <i class="material-icons">done_all</i> 报名参加
            </router-link>
          </li>
          <li class="nav-item">
            <router-link to="/coop" class="nav-link">
              <i class="material-icons">contacts</i> 联系合作
            </router-link>
          </li>
          <!-- <li class="nav-item">
            <router-link to="/Sub" class="nav-link">
              <i class="material-icons">dashboard</i> 会场列表
            </router-link>
          </li> -->
          <!--
              <li class="dropdown nav-item">
                <a href="#" class="dropdown-toggle nav-link" data-toggle="dropdown">
                  <i class="material-icons">dashboard</i> 会场列表
                </a>
                <div class="dropdown-menu dropdown-with-icons">
                  <router-link to="/sub/Main" class="nav-link">
                    <i class="material-icons">code</i> 主会场
                  </router-link>
                  <router-link to="/sub/0" class="nav-link">
                    <i class="material-icons">code</i> 分会场0
                  </router-link>
                  <router-link to="/sub/1" class="nav-link">
                    <i class="material-icons">code</i> 分会场1
                  </router-link>
                  <router-link to="/sub/2" class="nav-link">
                    <i class="material-icons">code</i> 分会场2
                  </router-link>
                  <router-link to="/sub/3" class="nav-link">
                    <i class="material-icons">code</i> 分会场3
                  </router-link>
                </div>
              </li>
          -->
          <li class="nav-item">
            <router-link to="/events" class="nav-link">
              <i class="material-icons">event</i> 日程
            </router-link>
          </li>
          <li class="nav-item">
            <router-link to="/about" class="nav-link">
              <i class="material-icons">help</i> 关于我们
            </router-link>
          </li>
          <li class="nav-item">
            <a
              class="nav-link"
              rel="tooltip"
              title
              data-placement="bottom"
              href="#"
              target="_blank"
              data-original-title="Weibo"
            >
              <i class="fa fa-weibo"></i>
            </a>
          </li>
          <li class="nav-item">
            <a
              class="nav-link"
              rel="tooltip"
              title
              data-placement="bottom"
              href="https://t.me/joinchat/LgGQ2RZQrW7geSaaJicUgw"
              target="_blank"
              data-original-title="Telegram"
            >
              <i class="fa fa-telegram"></i>
            </a>
          </li>
          <li class="nav-item">
            <a
              class="nav-link"
              rel="tooltip"
              title="QQ"
              role="button"
              data-placement="bottom"
              data-original-title="QQ"
              data-toggle="modal"
              data-target="#qqqrcode"
            >
              <i class="fa fa-qq"></i>
            </a>
          </li>
        </ul>
      </div>
    </div>
    <div
      class="modal fade"
      id="qqqrcode"
      tabindex="-1"
      role="dialog"
      aria-labelledby="QQ qrcode"
      aria-hidden="true"
    >
      <div class="modal-dialog modal-sm">
        <div class="modal-content">
          <div class="modal-header">
            <button
              type="button"
              class="close"
              data-dismiss="modal"
              aria-label="关闭"
            >
              <span aria-hidden="true">&times;</span>
            </button>
          </div>
          <div class="modal-body qrcode">
            <img :src="qqqrcode" />
          </div>
        </div>
      </div>
    </div>
  </nav>
</template>

<script>
import qqqrcode from "@/assets/img/qqqrcode.jpg";

export default {
  name: "NavBar",
  data() {
    return {
      qqqrcode: qqqrcode
    };
  }
};
</script>
<style lang="scss">
.navbar-transparent {
  div {
    color: #3c4858;
  }
  background-color: #ffffffcc !important;
}

#qqqrcode {
  z-index: 1000;
}

.modal-backdrop {
  z-index: 1000;
}

.qrcode {
  position: relative;
  width: 100%;
  height: 0;
  padding-top: 100%;
  img {
    position: absolute;
    left: 0;
    top: 0;
    width: 100%;
    height: auto;
  }
}
</style>
