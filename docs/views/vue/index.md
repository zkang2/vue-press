## vue2与vue3的区别

### 1.组件根节点标签

vue2 根标签只支持一个 vue3 根标签可支持多个

### 2.生命周期
| v2            |        v3        | Description              |
|---------------|:----------------:|:-------------------------|
| beforeCreate  |     setup()      | 开始创建组件之前，创建的是data和method |
| created       |     setup()      |                          |
| beforeMount   |  onBeforeMount   | 组件挂载到节点上之前执行的函数          |
| mounted       |    onMounted     | 组件挂载完成后执行的函数             |
| beforeUpdate  |  onBeforeUpdate  | 组件更新之前执行的函数              |
| updated       |    onUpdated     | 组件更新完成之后执行的函数            |
| beforeDestroy | onBeforeUnmount  | 组件挂载到节点上之前执行的函数          |
| destroyed     |   onUnmounted    | 组件卸载之前执行的函数              |
| activated     |   onActivated    | 组件卸载完成后执行的函数             |
| deactivated   |  onDeactivated   | 在组件切换中老组件消失的时候执行         |

### 3.选项试API & 组合式API
vue2
```vue
<script>
 export default {
   // 数据
  data(){
   return{};
  },
  mounted(){},
  // 方法
  methods:{},
  computed:{}
}
</script>
```
vue3 setup语法糖
```vue
<script setup>
// 写入数据和方法
</script>
```
### 4.组件传值

#### props获取

vue 2
```vue
<script>
export default {
  props: {
    type: {
      type: Object,
      default ()  {
        return {}
      }
    }
  }
}
</script>
```
vue3
```vue
<script setup>
    const props = defineProps({
      type:{
            type:Object,
            default:()=>{
                return {}
            }
        }
    })
    console.log(props.type);
</script>
```
#### 子传父自定义方法

vue2
```vue
<script>
  this.emit('clickSetData',{params:123})
</script>
```
vue3
```vue
<script setup>
  const emit = defineEmits(['clickSetData'])
  function buttonClick() {
    emit('clickSetData',{params:123})
  }
</script>
```

