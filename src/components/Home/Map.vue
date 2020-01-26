<template>
  <div class="section section-basic">
    <div class="container">
      <hr/>
      <h3 class="title">举办信息</h3>
      <div class="row">
        <div class="col-md-6 ml-auto mr-auto icon-list">
          <div class="tim-typo">
            <p><span class="tim-note">主会场</span><i class="material-icons">home</i> 中国成都市 · 电子科技大学（清水河校区）</p>
          </div>
          <div class="tim-typo">
            <p><span class="tim-note">举办时间</span><i class="material-icons">access_time</i> 2020年5月16日至17日</p>
          </div>
          <div class="tim-typo">
            <p><span class="tim-note">主办社区</span><i class="material-icons">people</i> 电子科技大学Linux用户组、电子科技大学微软学生俱乐部</p>
          </div>
        </div>
      </div>
      <vl-map
        :load-tiles-while-animating="true"
        :load-tiles-while-interacting="true"
        data-projection="EPSG:4326"
        style="height: 400px"
      >
        <vl-view :zoom.sync="zoom" :center.sync="center" :rotation.sync="rotation"></vl-view>

        <vl-geoloc @update:position="geolocPosition = $event">
          <template slot-scope="geoloc">
            <vl-feature v-if="geoloc.position" id="position-feature">
              <vl-geom-point :coordinates="geoloc.position"></vl-geom-point>
              <vl-style-box>
                <vl-style-icon src="_media/marker.png" :scale="0.4" :anchor="[0.5, 1]"></vl-style-icon>
              </vl-style-box>
            </vl-feature>
            <vl-feature id="marker" ref="marker" :properties="{ start: Date.now(), duration: 2500 }">
                <vl-geom-point :coordinates="loc"></vl-geom-point>
                <vl-style-box>
                  <vl-style-icon :src="MapIcon" :scale="0.5" :size="[96, 96]"></vl-style-icon>
                </vl-style-box>
            </vl-feature>
          </template>
        </vl-geoloc>

        <vl-layer-tile id="osm">
          <vl-source-osm></vl-source-osm>
        </vl-layer-tile>
      </vl-map>
    </div>
  </div>
</template>

<script>
import MapIcons from '@/assets/img/map_icon.png'

export default {
  name: 'Map',
  data () {
    return {
      zoom: 14,
      center: [103.93447213467519, 30.754676847667],
      loc: [103.9275765, 30.7586058],
      rotation: 0,
      geolocPosition: undefined,
      MapIcon: MapIcons
    }
  }
}
</script>
<style lang="scss">
.icon-list .tim-typo p .material-icons {
    vertical-align: middle;
}
</style>
