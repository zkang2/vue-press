<template>
  <div id="map" style="width:800px;height:500px;overflow: hidden;position: relative;z-index: 1"></div>
</template>
<script setup>
import {onMounted} from "vue"
import dataJson from "../config/yt.json"
let dataLine = dataJson.features[0].geometry.coordinates[0][0]
dataLine.forEach(v=>{
  [v[1],v[0]]=[v[0],v[1]]
})
onMounted(() => {
  init()
})
const init = () => {
  if (typeof window !== 'undefined') {
    //动态导入 解决打包报错
    import('leaflet').then(({default: L}) => {
      import('@supermap/iclient-leaflet').then(() => {
        var map = L.map('map', {
          center: [34.26097780877091, 108.9421892166138],
          zoom: 18,
          crs: L.supermap.CRS.TianDiTu_Mercator
        });
        new L.supermap.TiandituTileLayer({
          layerType: 'img',
          key: '1d109683f4d84198e37a38c442d68311'
        }).addTo(map);
        new L.supermap.TiandituTileLayer({
          layerType: 'img',
          isLabel: true,
          key: '1d109683f4d84198e37a38c442d68311'
        }).addTo(map);
        var myIcon = L.icon({
          iconUrl: '/gis/local.png',
          iconSize: [50, 50],
          iconAnchor: [30, 50],
        });
        let m = L.marker([34.26097780877091, 108.9421892166138]).addTo(map);
        let arr = [[34.2033771445002,108.88039112091069],[34.20335939798549,108.88163566589358],[34.20193966470376,108.88167858123784],[34.20194853811102,108.88036966323857],[34.2033771445002,108.88039112091069]]
        var polygon = L.polygon(dataLine, {color: '#1296db'}).addTo(map);
        var polygon1 = L.polygon(arr, {color: 'red'}).addTo(map);
        polygon1.on('click',(e)=>{
          var popup = L.popup()
              .setLatLng(e.latlng)
              .setContent('<p>发现新大陆</p>')
              .openOn(map);
        })
        map.fitBounds(polygon.getBounds());
        map.on('click', (e) => {
          let latlng = e.latlng;
          map.removeLayer(m)
          m = L.marker([latlng.lat, latlng.lng], {icon: myIcon}).addTo(map);
        });
      })
    });
  }
}
</script>
<style>
@import url('https://unpkg.com/leaflet@1.7.1/dist/leaflet.css');
@import url('https://iclient.supermap.io/dist/leaflet/iclient-leaflet.min.css');
/* 其他样式 */
</style>