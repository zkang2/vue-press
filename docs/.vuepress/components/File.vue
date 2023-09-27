<template>
  <div style="display: flex;margin: 10px 0">
    <el-input v-model="input" placeholder="请输入描述" maxlength="5"/>
    <el-button @click="uploadFile">上传</el-button>
  </div>
  <el-upload
      v-model:file-list="fileList"
      action="#"
      drag
      :auto-upload="false"
      list-type="picture-card"
      :on-preview="handlePictureCardPreview"
      :on-remove="handleRemove"
      multiple
      :limit="9"
      accept=".png,.jpg,.jpeg,.mp4"
      :on-change="handleChange"
  >
    <el-icon>
      <Plus/>
    </el-icon>
  </el-upload>
  <el-dialog v-model="dialogVisible">
    <img w-full :src="dialogImageUrl" alt="Preview Image"/>
  </el-dialog>
  <el-divider content-position="right">预览</el-divider>
  <el-table :data="tableData" style="width: 100%" border>
    <el-table-column type="index" align="center" label="序号" width="60"/>
    <el-table-column label="Name" align="center" width="100">
      <template #default="{row}">
        {{ formatTime(row.time, 0) }}
      </template>
    </el-table-column>
    <el-table-column prop="content" align="center" label="描述" width="100" />
    <el-table-column prop="url" label="url" align="center">
      <template #default="{row}">
        <div class="box">
          <div v-for="(item,index) in JSON.parse(row.url)">
            <div v-if="item.split('.')[item.split('.').length -1] === 'mp4'" class="video">
              <video class="widthBox" @click="dialogBox(item)" :src="item"></video>
              <div class="icon">
                <el-icon :size="30" style="color: red" @click="dialogBox(item)">
                  <VideoPlay/>
                </el-icon>
              </div>
            </div>
            <div v-else>
              <el-image @click.stop="dialogBox(item)" lazy style="width: 100px;height: 100px;margin: 5px" :src="item"
                        fit="scale-down"></el-image>
            </div>
          </div>
        </div>
      </template>
    </el-table-column>
  </el-table>
  <el-pagination
      style="margin: 20px 0"
      :current-page="currentPage"
      :page-size="pageSize"
      :page-sizes="[5, 10, 20, 30]"
      :small="true"
      :background="true"
      layout="->,total, sizes, prev, pager, next, jumper"
      :total="total"
      @size-change="handleSizeChange"
      @current-change="handleCurrentChange"
  />

  <el-dialog v-model="dialogVisibleBox" title="Tips" width="50%" draggable>
    <div style="display: flex;justify-content: center">
      <div v-if="urlBox.split('.')[urlBox.split('.').length -1] === 'mp4'"
           style="display: flex;justify-content: center">
        <video style="width: 80%;margin: 5px" controls :src="urlBox"></video>
      </div>
      <div v-else style="display: flex;justify-content: center">
        <el-image style="width: 80%;margin: 5px;" :src="urlBox" fit="scale-down"></el-image>
      </div>
    </div>
  </el-dialog>
</template>

<script lang="ts" setup>
import {ref, onMounted, reactive} from 'vue'
import {Plus, VideoPlay, StarFilled} from '@element-plus/icons-vue'
import axios from 'axios'

const input = ref('')
const dialogVisibleBox = ref(false)
import type {UploadProps, UploadUserFile} from 'element-plus'
import {ElMessage} from 'element-plus'

const currentPage = ref(1)
const pageSize = ref(10)
let total = ref(0)
const fileList = ref<UploadUserFile[]>([])
let tableData = ref([])
let queryParams = reactive({
  page: 1,
  pageSize: 10
})
const dialogImageUrl = ref('')
const dialogVisible = ref(false)
let urlBox = ref(null)
const handleRemove: UploadProps['onRemove'] = (uploadFile, uploadFiles) => {
}

const handlePictureCardPreview: UploadProps['onPreview'] = (uploadFile) => {
  dialogImageUrl.value = uploadFile.url!
  dialogVisible.value = true
}
const handleChange: UploadProps['onChange'] = async (uploadFile, uploadFiles) => {
  fileList.value.push(uploadFile)
}

const uploadFile = async () => {
  if (!fileList.value.length) {
    return ElMessage.error('请先添加文件')
  }
  let formData = new FormData();
  formData.append('time', new Date().getTime())
  formData.append('content', input.value)
  fileList.value.forEach(v => {
    formData.append('test', v.raw); // 假设有一个名为 test 的文件对象
  })
  const {data} = await axios({
    method: 'post',
    url: 'http://47.100.33.103:3001/file/uploadFile',
    data: formData,
    headers: {
      'Content-Type': 'multipart/form-data'
    }
  });
  fileList.value = []
  input.value = ''
  getList()
}

onMounted(() => {
  getList()
})
const getList = async () => {
  const {data} = await axios({
    method: 'post',
    url: 'http://47.100.33.103:3001/file/getBlog',
    data: queryParams,
  });
  tableData.value = data.data.results
  total.value = data.data.total
}

const handleSizeChange = (val: number) => {
  queryParams.pageSize = val
  getList()
}
const handleCurrentChange = (val: number) => {
  queryParams.page = val
  getList()
}
const dialogBox = (url) => {
  dialogVisibleBox.value = true
  urlBox.value = url
}
const formatTime = (time, option) => {
  if (('' + time).length === 10) {
    time = parseInt(time) * 1000
  } else {
    time = +time
  }
  const d = new Date(time)
  const now = Date.now()

  const diff = (now - d) / 1000

  if (diff < 30) {
    return '刚刚'
  } else if (diff < 3600) {
    // less 1 hour
    return Math.ceil(diff / 60) + '分钟前'
  } else if (diff < 3600 * 24) {
    return Math.ceil(diff / 3600) + '小时前'
  } else if (diff < 3600 * 24 * 2) {
    return '1天前'
  }
  if (option) {
    return parseTime(time, option)
  } else {
    return (
        d.getMonth() +
        1 +
        '月' +
        d.getDate() +
        '日' +
        d.getHours() +
        '时' +
        d.getMinutes() +
        '分'
    )
  }
}
const parseTime = (time, cFormat) => {
  if (arguments.length === 0 || !time) {
    return null
  }
  const format = cFormat || '{y}-{m}-{d} {h}:{i}:{s}'
  let date
  if (typeof time === 'object') {
    date = time
  } else {
    if ((typeof time === 'string')) {
      if ((/^[0-9]+$/.test(time))) {
        // support "1548221490638"
        time = parseInt(time)
      } else {
        // support safari
        // https://stackoverflow.com/questions/4310953/invalid-date-in-safari
        time = time.replace(new RegExp(/-/gm), '/')
      }
    }

    if ((typeof time === 'number') && (time.toString().length === 10)) {
      time = time * 1000
    }
    date = new Date(time)
  }
  const formatObj = {
    y: date.getFullYear(),
    m: date.getMonth() + 1,
    d: date.getDate(),
    h: date.getHours(),
    i: date.getMinutes(),
    s: date.getSeconds(),
    a: date.getDay()
  }
  const time_str = format.replace(/{([ymdhisa])+}/g, (result, key) => {
    const value = formatObj[key]
    // Note: getDay() returns 0 on Sunday
    if (key === 'a') {
      return ['日', '一', '二', '三', '四', '五', '六'][value]
    }
    return value.toString().padStart(2, '0')
  })
  return time_str
}
</script>
<style lang="scss" scoped>
:deep(table) {
  margin: 0 !important;
}

.box {
  display: flex;
  justify-content: center;
  width: 100%;
  flex-flow: wrap row;
  align-items: center;

  .video {
    position: relative;

    .widthBox {
      width: 100px;
      height: 100px;
      margin: 5px
    }

    .icon {
      position: absolute;
      left: 50%;
      top: 50%;
      transform: translate(-50%, -50%);
    }
  }
}
</style>