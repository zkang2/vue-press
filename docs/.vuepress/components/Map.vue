<template>
  <div id="map" style="width:800px;height:500px;overflow: hidden;position: relative;z-index: 1"></div>
</template>
<script setup>
import {onMounted} from "vue"
// onMounted(() => {
//   init()
// })
// const init = () => {
  if (typeof window !== 'undefined') {
    //动态导入 解决打包报错
    import('leaflet').then(({default: L}) => {
      import('@supermap/iclient-leaflet').then(() => {
        var map = L.map('map', {
          center: [0, 0],
          zoom: 0,
          crs: L.supermap.CRS.TianDiTu_Mercator
        });
        new L.supermap
            .TiandituTileLayer({
              layerType: 'img',
              key: '1d109683f4d84198e37a38c442d68311'
            })
            .addTo(map);
        new L.supermap
            .TiandituTileLayer({
              layerType: 'img',
              isLabel: true,
              key: '1d109683f4d84198e37a38c442d68311'
            })
            .addTo(map);
      })
    });
  // }

}
</script>
<style>
@import url('https://unpkg.com/leaflet@1.7.1/dist/leaflet.css');
@import url('https://iclient.supermap.io/dist/leaflet/iclient-leaflet.min.css');
/* 其他样式 */
</style>