<template>
  <el-button @click="uploadFile">上传</el-button>
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
      :on-change="handleChange"
  >
    <el-icon>
      <Plus/>
    </el-icon>
  </el-upload>
  <el-dialog v-model="dialogVisible">
    <img w-full :src="dialogImageUrl" alt="Preview Image"/>
  </el-dialog>
  <el-divider>
    <el-icon><star-filled /></el-icon>
  </el-divider>
  <el-table :data="tableData" style="width: 100%" border>
    <el-table-column type="index" align="center" label="序号" width="50"/>
    <el-table-column prop="id" label="Name" align="center" width="80"/>
    <el-table-column prop="url" label="url">
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
              <el-image @click="dialogBox(item)" style="width: 100px;height: 100px;margin: 5px" :src="item" fit="scale-down"></el-image>
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
      <div v-if="urlBox.split('.')[urlBox.split('.').length -1] === 'mp4'">
        <video style="width: 500px;height: 500px;margin: 5px" controls :src="urlBox"></video>
      </div>
      <div v-else>
        <el-image style="width: 700px;height: 500px;margin: 5px" :src="urlBox" fit="scale-down"></el-image>
      </div>
    </div>
  </el-dialog>
</template>

<script lang="ts" setup>
import {ref, onMounted, reactive} from 'vue'
import {Plus, VideoPlay,StarFilled } from '@element-plus/icons-vue'
import axios from 'axios'

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
  console.log(url)
  dialogVisibleBox.value = true
  urlBox.value = url
}
</script>
<style lang="scss" scoped>
:deep(table) {
  margin: 0 !important;
}

.box {
  display: flex;
  justify-content: center;
  width: 400px;
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