<template>
  <div>
    <div class="card-body">
      <div class="row">
        <div class="col-md-3">
          <ul class="nav nav-pills nav-pills-primary flex-column">
            <li class="nav-item">
              <a class="nav-link active" href="#uestc" data-toggle="tab">电子科技大学主会场</a>
            </li>
            <li class="nav-item">
              <a class="nav-link" href="#sichuan-university-jiangan" data-toggle="tab">四川大学（江安校区）分会场</a>
            </li>
            <li class="nav-item">
              <a
                class="nav-link"
                href="#sichuan-university-wangjiang"
                data-toggle="tab"
              >四川大学（望江校区）分会场</a>
            </li>
          </ul>
        </div>
        <div class="col-md-9">
          <div class="tab-content">
            <div class="tab-pane active" id="uestc">
              <h2>
                电子科技大学
                <small class="text-muted">University of Electronic Science and technology</small>
              </h2>
              <div class="card card-body">
                <div class="icon-list">
                  <div class="tim-typo">
                    <p>
                      <span class="tim-note">主会场</span>
                      <i class="material-icons">home</i> 中国成都市 · 电子科技大学（清水河校区）
                    </p>
                  </div>
                  <div class="tim-typo">
                    <p>
                      <span class="tim-note">举办时间</span>
                      <i class="material-icons">access_time</i> 2020年5月16日至17日
                    </p>
                  </div>
                  <div class="tim-typo">
                    <p>
                      <span class="tim-note">主办社区</span>
                      <i class="material-icons">people</i> 电子科技大学Linux用户组、电子科技大学微软学生俱乐部
                    </p>
                  </div>
                </div>
                <img
                  class="card-img-bottom"
                  src="@/assets/img/UESTC-Qingshui.jpg"
                  alt="UESTC-Qingshui"
                />
              </div>
            </div>
            <div class="tab-pane" id="sichuan-university-jiangan">
              <h2>
                四川大学
                <small class="text-muted">Sichuan University - Jiangan Campus</small>
              </h2>
              <div class="card card-body">
                <div class="icon-list">
                  <div class="tim-typo">
                    <p>
                      <span class="tim-note">分会场</span>
                      <i class="material-icons">home</i> 中国成都市 · 四川大学（江安校区）
                    </p>
                  </div>
                  <div class="tim-typo">
                    <p>
                      <span class="tim-note">举办时间</span>
                      <i class="material-icons">access_time</i> 2020年5月16日至17日
                    </p>
                  </div>
                  <div class="tim-typo">
                    <p>
                      <span class="tim-note">合作社区</span>
                      <i class="material-icons">people</i> 四川大学飞扬俱乐部、四川大学智锐计算机协会
                    </p>
                  </div>
                </div>
                <img
                  class="card-img-bottom"
                  src="@/assets/img/Sichuan-University-Jiangan.jpg"
                  alt="Sichuan-University-Jiangan"
                />
              </div>
            </div>
            <div class="tab-pane" id="sichuan-university-wangjiang">
              <h2>
                四川大学
                <small class="text-muted">Sichuan University - Wangjiang Campus</small>
              </h2>
              <div class="card card-body">
                <div class="icon-list">
                  <div class="tim-typo">
                    <p>
                      <span class="tim-note">分会场</span>
                      <i class="material-icons">home</i> 中国成都市 · 四川大学（望江校区）
                    </p>
                  </div>
                  <div class="tim-typo">
                    <p>
                      <span class="tim-note">举办时间</span>
                      <i class="material-icons">access_time</i> 2020年5月16日至17日
                    </p>
                  </div>
                  <div class="tim-typo">
                    <p>
                      <span class="tim-note">合作社区</span>
                      <i class="material-icons">people</i> 四川大学飞扬俱乐部、四川大学智锐计算机协会
                    </p>
                  </div>
                </div>
                <img
                  class="card-img-bottom"
                  src="@/assets/img/Sichuan-University-Wangjiang.jpeg"
                  alt="Sichuan-University-Wangjiang"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "SubInfo"
};
</script>
