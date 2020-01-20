<template>
  <nav class="navbar navbar-color-on-scroll fixed-top navbar-expand-lg navbar-transparent" color-on-scroll="100" id="sectionsNav">
        <div class="container">
          <div class="navbar-translate">
            <router-link to="/" class="navbar-brand"> SOSCONF.ZH 2020 </router-link>
            <button class="navbar-toggler" type="button" data-toggle="collapse" aria-expanded="false" aria-label="Toggle navigation">
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
              <li class="dropdown nav-item">
                <a href="#" class="dropdown-toggle nav-link" data-toggle="dropdown">
                  <i class="material-icons">dashboard</i> 分会场列表
                </a>
                <div class="dropdown-menu dropdown-with-icons">
                  <router-link to="/sub/codes" class="nav-link">
                    <i class="material-icons">code</i> 代码
                  </router-link>
                </div>
              </li>
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
                <a class="nav-link" rel="tooltip" title="" data-placement="bottom" href="#" target="_blank" data-original-title="WeChat">
                  <i class="fa fa-wechat"></i>
                </a>
              </li>
              <li class="nav-item">
                <a class="nav-link" rel="tooltip" title="" data-placement="bottom" href="#" target="_blank" data-original-title="Weibo">
                  <i class="fa fa-weibo"></i>
                </a>
              </li>
              <li class="nav-item">
                <a class="nav-link" rel="tooltip" title="" data-placement="bottom" href="#" target="_blank" data-original-title="Telegram">
                  <i class="fa fa-telegram"></i>
                </a>
              </li>
              <li class="nav-item">
                <a class="nav-link" rel="tooltip" title="" data-placement="bottom" href="#" target="_blank" data-original-title="Github">
                  <i class="fa fa-github"></i>
                </a>
              </li>
            </ul>
          </div>
        </div>
      </nav>
</template>

<script>
export default {
  name: 'NavBar'
}
</script>
