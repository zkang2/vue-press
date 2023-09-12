<template>
  <el-form :model="form" ref="ruleFormRef">
    <el-form-item style="margin: 10px 0">
      <el-button type="primary" @click="add">加一行</el-button>
      <el-button type="primary" @click="submitForm(ruleFormRef)">提交</el-button>
    </el-form-item>
    <el-table :data="form.tableData" border>
      <el-table-column prop="name" label="姓名">
        <template #default="{row,$index}">
          <el-form-item :prop="`tableData.${$index}.name`"
                        :rules="[{ required: true, message: '请输入姓名' },{ validator: checkName, name: row.name }]">
            <el-input v-model="row.name"/>
          </el-form-item>
        </template>
      </el-table-column>
      <el-table-column prop="money" label="money">
        <template #default="{row,$index}">
          <el-form-item :prop="`tableData.${$index}.money`"
                        :rules="[{ required: true, message: '请输入money' }]">
            <el-input v-model="row.money" @input="inputChange($index)" @blur="blurChange($index)"/>
          </el-form-item>
        </template>
      </el-table-column>
      <el-table-column label="操作">
        <template #default="{row,$index}">
          <el-button type="danger" :icon="Delete" @click="deletes(index)" circle/>
        </template>
      </el-table-column>
    </el-table>
  </el-form>
</template>

<script setup>
import {Delete} from '@element-plus/icons-vue'
import {reactive, ref} from "vue";
import {ElMessage} from "element-plus";

const ruleFormRef = ref()
let form = reactive({
  tableData: [
    {
      name: 'Tom',
      money: ''
    }
  ]
})
const checkName = (rule, value, cb) => {
  const is = form.tableData.filter(item => item.name === value)
  if (is.length > 1) {
    ElMessage({
      message: '姓名重复',
      type: 'warning',
    })
    cb(new Error('姓名重复'));
  } else {
    cb();
  }
}
const add = () => {
  form.tableData.push({});
}
const deletes = (index) => {
  form.tableData.splice(index, 1);
}

const submitForm = async (formEl) => {
  if (!formEl) return
  await formEl.validate((valid, fields) => {
    if (valid) {
      console.log('submit!')
    } else {
      let errorMsg = []
      console.log('error submit!', fields)
      Object.keys(fields).forEach(key => {
        fields[key].map(v => {
          errorMsg.push(v.message)
        })
      })
      errorMsg = errorMsg.join(",")
      ElMessage({
        message: errorMsg,
        type: 'warning',
      })
    }
  })
}
const inputChange = (index) => {
  // 限制输入位数为8位
  form.tableData[index].money = form.tableData[index].money.replace(
      /^\D*(\d{0,8}(?:\.\d{0,2})?).*$/g,
      "$1"
  );
  // 如果输入非数字，则替换为''
  form.tableData[index].money = form.tableData[index].money.replace(
      /[^\d\.]/g,
      ""
  );
  // 必须保证第一个为数字而不是.
  form.tableData[index].money = form.tableData[index].money.replace(
      /^\./g,
      ""
  );
  // 保证只有出现一个.而没有多个.
  form.tableData[index].money = form.tableData[index].money.replace(
      /\.{2,}/g,
      "."
  );
  //前两位不能是0加数字
  form.tableData[index].money = form.tableData[index].money.replace(
      /^0\d[0-9]*/g,
      ""
  );
  // 保证.只出现一次，而不能出现两次以上
  form.tableData[index].money = form.tableData[index].money
      .replace(".", "$#$")
      .replace(/\./g, "")
      .replace("$#$", ".");
  // 只能输入两位小数
  form.tableData[index].money = form.tableData[index].money.replace(
      /^(\-)*(\d+)\.(\d\d).*$/,
      "$1$2.$3"
  );
}
const blurChange = (index) => {
  form.tableData[index].money = accurateDecimal(form.tableData[index].money);
}
const accurateDecimal = (number, zerolen = 2, isRound = true) => {
  if (!number || isNaN(parseFloat(number))) {
    return number
  }
  const n = Math.pow(10, zerolen)
  if (isRound) {
    number = Math.round(number * n) / n
  }
  let str = number.toString()
  let index = 0
  if (str.indexOf('.') == -1) {
    index = zerolen
    str += '.'
  } else {
    index = zerolen - (str.length - 1 - str.indexOf('.'))
  }
  str += '0'.repeat(index > 0 ? index : 0)
  return str
}
</script>

<style lang="scss" scoped>
:deep(table) {
  margin: 0 !important;
}

.el-form-item {
  margin-bottom: 0;
}
</style>