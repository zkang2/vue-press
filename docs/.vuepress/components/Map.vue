<template>
  <div id="map" style="width:800px;height:500px;overflow: hidden;position: relative;z-index: 1">
    <div class="mark">
      <el-button size="small" type="primary" plain @click="markFlag = 'mark'">打点</el-button>
      <el-button size="small" type="primary" plain @click="markFlag = 'line'">连线</el-button>
      <el-button size="small" type="primary" plain @click="markFlag = 'surface'">围栏</el-button>
      <el-button size="small" type="primary" plain @click="removeFn">移除图层</el-button>
    </div>
  </div>
</template>
<script setup>
import {onMounted, reactive, ref} from "vue"
import dataJson from "../config/yt.json"

let map = reactive({})
let mark = ref(null)
let addLineArr = []
let lineList = []
let markerList = []
let markFlag = ref(null)
onMounted(() => {
  init()
})
const init = () => {
  if (typeof window !== 'undefined') {
    //动态导入 解决打包报错
    import('leaflet').then(({default: L}) => {
      import('@supermap/iclient-leaflet').then(() => {
        map = L.map('map', {
          center: [34.26097780877091, 108.9421892166138],
          zoom: 18,
          crs: L.supermap.CRS.TianDiTu_Mercator,
          zoomControl: false, // 禁用 + - 按钮
          doubleClickZoom: false, // 禁用双击放大
          attributionControl: false // 移除右下角leaflet标识
        })
        // 855ca2e54b96d95cc8311f1a6052715c
        new L.supermap.TiandituTileLayer({
          layerType: 'img',
          key: '1d109683f4d84198e37a38c442d68311'
        }).addTo(map);
        new L.supermap.TiandituTileLayer({
          layerType: 'img',
          isLabel: true,
          key: '1d109683f4d84198e37a38c442d68311'
        }).addTo(map);
        let center = L.marker([34.26097780877091, 108.9421892166138]).addTo(map);
        // 展示雁塔区
        region()
        // 自定义区域
        custom()
        map.on('click', clickFn)
        map.on('dblclick', e => {
          map.off('click', lineFn)
          markFlag.value = null
          addLineArr = []
          polygonList = L.polygon([points], {
            color: '#800080',
            fillColor: '#800080',
            fillOpacity: 0.2,
          }).addTo(map)
          map.addLayer(polygonList)
          facepolygonList.push(polygonList)
          points = []
          // lines.setLatLngs([])
          lines = []
          map.off('click', surfaceFn)
        })
      })
    });
  }
}
const region = () => {
  let dataLine = dataJson.features[0].geometry.coordinates[0][0]
  if(dataJson.features[0].geometry.coordinates[0][0][0][0] > 100){
    dataLine.forEach(v => {
      [v[1], v[0]] = [v[0], v[1]]
    })
  }
  let polygon = L.polygon(dataLine, {color: '#1296db'}).addTo(map);
  //将地图视图调整为显示完整的多边形，不会使其超出地图的边界
  map.fitBounds(polygon.getBounds());
}
const custom = () => {
  let arr = [
    [34.200328293919014, 108.90841484069826],
    [34.21729286647309, 108.91716957092288],
    [34.20039928250781, 108.9200878143311],
    [34.210904934548346, 108.90532493591311],
    [34.210691995144245, 108.92678260803225],
    [34.200541259506075, 108.90858650207521],
    [34.200541259506075, 108.90858650207521],
  ]
  var polygon1 = L.polygon(arr, {color: 'red'}).addTo(map);
  polygon1.on('click', (e) => {
    var popup = L.popup()
        .setLatLng(e.latlng)
        .setContent('<p>发现新大陆</p>')
        .openOn(map);
  })
}
const clickFn = (e) => {
  if (markFlag.value === 'mark') {
    map.on('click', markFn)
    removeClick([lineFn, surfaceFn])
  } else if (markFlag.value === 'line') {
    map.on('click', lineFn)
    removeClick([markFn, surfaceFn])
  } else if (markFlag.value === 'surface') {
    map.on('click', surfaceFn)
    removeClick([markFn, lineFn])

  }
}

const removeClick = (arr) => {
  arr.forEach(v => {
    map.off('click', v)
  })
}
// 标点
const markFn = (e) => {
  let latlng = e.latlng;
  var myIcon = L.icon({
    iconUrl: '/gis/local.png',
    iconSize: [50, 50],
    iconAnchor: [30, 40],
  });
  if (mark) {
    map.removeLayer(mark)
  }
  mark = L.marker([latlng.lat, latlng.lng], {icon: myIcon}).addTo(map);
}
// 围栏
const lineFn = (e) => {
  addLineArr.push([e.latlng.lat, e.latlng.lng])
  const marker = L.marker([e.latlng.lat, e.latlng.lng]).addTo(map)
  markerList.push(marker)
  const line = L.polyline(addLineArr, {color: 'red'}).addTo(map)
  lineList.push(line)
}

let points = [] // 画的过程中的点
let lines = {} // 画的过程中生成的多边形
let tempLines = {}// 鼠标移动中生成的多边形（实际是一条线段）
let polygonList = {} // 双击结束生成多边形
let facelines = [] // 存储画的多边形
let facetempLines = []// 存储移动的多边形
let facepolygonList = [] // 存储结束生成的多边形
const surfaceFn = (e) => {
  lines = L.polyline([], {color: '#800080', fillColor: '#800080', fillOpacity: 0.2})
  tempLines = L.polyline([], {color: '#800080', fillColor: '#800080', fillOpacity: 0.2})
  map.addLayer(lines)
  map.addLayer(tempLines)

  points.push([e.latlng.lat, e.latlng.lng])
  lines.addLatLng(e.latlng)
  map.addLayer(lines)
  facelines.push(lines)

  map.on('mousemove', e => {
    if (points.length > 0) {
      tempLines.setLatLngs([points[points.length - 1], [e.latlng.lat, e.latlng.lng]])
      map.addLayer(tempLines)
      facetempLines.push(tempLines)
    }
  })
}
// 移除图层
const removeFn = () => {

  lineList.forEach(v => {
    map.removeLayer(v)
  })
  markerList.forEach(v => {
    map.removeLayer(v)
  })

  map.removeLayer(mark)

  points.forEach(item => {
    map.removeLayer(item)
  })
  facelines.forEach(item => {
    map.removeLayer(item)
  })
  facetempLines.forEach(item => {
    map.removeLayer(item)
  })
  facepolygonList.forEach(item => {
    map.removeLayer(item)
  })
  points = []
  facelines = []
  facetempLines = []
  facepolygonList = []
}
</script>
<style lang="scss" scoped>
@import url('https://unpkg.com/leaflet@1.7.1/dist/leaflet.css');
@import url('https://iclient.supermap.io/dist/leaflet/iclient-leaflet.min.css');

.mark {
  position: absolute;
  background: #ccc;
  padding: 10px;
  right: 0;
  top: 0;
  z-index: 999;
}

</style>