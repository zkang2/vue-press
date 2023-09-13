<template>
  <div ref="main" style="width: 100%;height:400px;"></div>
</template>

<script setup>
import {onMounted, ref} from "vue";
import * as echarts from "echarts";
import axios from "axios";
const main = ref(null)
onMounted(() => {
  init()
})
const init = async () => {
  const {data} = await axios({
    method: 'get',
    url: 'https://restapi.amap.com/v3/weather/weatherInfo',
    params: {
      city: '610113',
      key: '8ee5e4fb315007b9fc4a746af71da084',
      extensions:'all'
    }
  });
  let num = data.forecasts[0].casts
  let dayObj = {
    '1':'一',
    '2':'二',
    '3':'三',
    '4':'四',
    '5':'五',
    '6':'六',
    '7':'日',
  }
  let day = num.map(v=> `周${dayObj[v.week]}`)
  const myChart = echarts.init(main.value);
  myChart.setOption({
    title: {
      text: data.forecasts[0].city
    },
    tooltip: {
      trigger: 'axis'
    },
    legend: {},
    toolbox: {
      show: true,
      feature: {
        dataZoom: {
          yAxisIndex: 'none'
        },
        dataView: { readOnly: false },
        magicType: { type: ['line', 'bar'] },
        restore: {},
        saveAsImage: {}
      }
    },
    xAxis: {
      type: 'category',
      boundaryGap: false,
      data: day
    },
    yAxis: {
      type: 'value',
      axisLabel: {
        formatter: '{value} °C'
      }
    },
    series: [
      {
        name: '白天温度',
        type: 'line',
        data: num.map(v=> v.daytemp),
        markPoint: {
          data: [
            { type: 'max', name: 'Max' },
            { type: 'min', name: 'Min' }
          ]
        },
        markLine: {
          data: [{ type: 'average', name: 'Avg' }]
        }
      },
      {
        name: '晚上温度',
        type: 'line',
        data: num.map(v=> v.nighttemp),
        markPoint: {
          data: [
            { type: 'max', name: 'Max' },
            { type: 'min', name: 'Min' }
          ]
        },
        markLine: {
          data: [{ type: 'average', name: 'Avg' }]
        }
      }
    ]
  });
  window.addEventListener('resize', function() {
    myChart.resize();
  });
}
</script>