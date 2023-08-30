## vue3+vite 构建

::: tip 兼容性注意
Vite 需要 Node.js 版本 14.18+，16+。然而，有些模板需要依赖更高的 Node 版本才能正常运行，当你的包管理器发出警告时，请注意升级你的 Node 版本。
:::

### 搭建一个 Vite 项目
```shell
npm create vite@latest
```
### 路径别名配置

相对路径别名配置，使用 @ 代替 src

```js
// TODO vite.confif.js

import { defineConfig } from 'vite'
import path from "path";
import vue from '@vitejs/plugin-vue'
const pathSrc = path.resolve(__dirname,"src")
export default defineConfig({
  resolve:{
    alias:{
      "@":pathSrc
    }
  },
  plugins: [vue()]
})

```

### 安装 vue-router 4x

```shell
npm install vue-router@4
```

```js
// 新建router/index.js

import { createRouter, createWebHashHistory } from 'vue-router'

const routes = [
    {
        path: '/',
        component:() => import('@/views/home.vue')
    }
]

const router = createRouter({
    history: createWebHashHistory(),
    routes
})

export default router
```

```js
// main.js 注册
import { createApp } from 'vue'
import App from './App.vue'
import router from "@/router/index.js";
createApp(App).use(router).mount('#app')
```

::: details 更新中
 现在有了一个基本雏形 为引入gis Leaflet 做准备
:::

## vue3+vite 使用gis Leaflet


### 安装 leaflet

* npm 方式引入
```shell
npm install @supermap/iclient-leaflet
```

* 引入 CSS

```js
// index.html
<link rel="stylesheet" href="https://unpkg.com/leaflet@1.7.1/dist/leaflet.css"/>
<link rel="stylesheet" href="https://iclient.supermap.io/dist/leaflet/iclient-leaflet.min.css"/>
```

### 按需引入

```shell
npm install @supermap/babel-plugin-import -D
```

* vite.config.js添加如下配置

```js
// vite.config.js
import { defineConfig } from 'vite'
import path from "path";
import vue from '@vitejs/plugin-vue'
const pathSrc = path.resolve(__dirname,"src")
// https://vitejs.dev/config/
export default defineConfig({
  resolve:{
    alias:{
      "@":pathSrc
    }
  },
  plugins: [vue(),
    [
      "@supermap/babel-plugin-import",
      {
        "libraryName": "@supermap/iclient-leaflet"
      }
    ]
  ]
})
```
### 小坑 :hole:

![这是图片](/gis/1.jpg)

* 这里看看[@supermap/iclient-leaflet](https://www.npmjs.com/package/@supermap/iclient-leaflet)版本是不是beta版本，降为11.0.1版本后使用

![这是图片](/gis/2.jpg)

* 添加如下配置

安装 events util 这两个依赖

```shell
 npm i events util
```

```js
// vite.confis.js 修改
import { defineConfig } from 'vite'
import path from "path";
import vue from '@vitejs/plugin-vue'
const pathSrc = path.resolve(__dirname,"src")
// https://vitejs.dev/config/
export default defineConfig({
  resolve:{
    alias:{
      "@":pathSrc
    }
  },
  plugins: [vue(),
    [
      "@supermap/babel-plugin-import",
      {
        "libraryName": "@supermap/iclient-leaflet"
      }
    ]
  ],
  // TODO 这里添加配置
  define:{
    'process.env':{}
  }
})

```

### 创建一幅地图

```vue
<template>
 <div id="map" style="width:800px;height:500px;"></div>
</template>
<script setup>
 import {onMounted} from "vue"
 import L from 'leaflet';
 import {TiledMapLayer} from '@supermap/iclient-leaflet';
 onMounted(()=>{
  init()
 })
 const init = ()=>{
  const url = "https://iserver.supermap.io/iserver/services/map-world/rest/maps/World";
  const map = L.map('map', {
   crs: L.CRS.EPSG4326,
   center: [0, 0],
   maxZoom: 18,
   zoom: 1
  });
  const layer = new TiledMapLayer(url)
  layer.addTo(map);
 }
</script>
```
