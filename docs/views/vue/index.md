## vue2与vue3的区别

### 1.组件根节点标签

vue2 根标签只支持一个 vue3 根标签可支持多个

### 2.生命周期

| v2            |       v3        | Description              |
|---------------|:---------------:|:-------------------------|
| beforeCreate  |     setup()     | 开始创建组件之前，创建的是data和method |
| created       |     setup()     |                          |
| beforeMount   |  onBeforeMount  | 组件挂载到节点上之前执行的函数          |
| mounted       |    onMounted    | 组件挂载完成后执行的函数             |
| beforeUpdate  | onBeforeUpdate  | 组件更新之前执行的函数              |
| updated       |    onUpdated    | 组件更新完成之后执行的函数            |
| beforeDestroy | onBeforeUnmount | 组件挂载到节点上之前执行的函数          |
| destroyed     |   onUnmounted   | 组件卸载之前执行的函数              |
| activated     |   onActivated   | 组件卸载完成后执行的函数             |
| deactivated   |  onDeactivated  | 在组件切换中老组件消失的时候执行         |

### 3.选项试API & 组合式API

:::: code-group
::: code-group-item vue2

```vue

<script>
  export default {
    // 数据
    data() {
      return {};
    },
    mounted() {
    },
    // 方法
    methods: {},
    computed: {}
  }
</script>
```

:::
::: code-group-item vue3 setup语法糖

```vue

<script setup>
  // 写入数据和方法
</script>
```

:::
::::

### 4.组件传值

#### props获取

:::: code-group
::: code-group-item vue2

```vue

<script>
  export default {
    props: {
      type: {
        type: Object,
        default() {
          return {}
        }
      }
    }
  }
</script>
```

:::
::: code-group-item vue3

```vue

<script setup>
  const props = defineProps({
    type: {
      type: Object,
      default: () => {
        return {}
      }
    }
  })
  console.log(props.type);
</script>
```

:::
::::

#### 子传父自定义方法

:::: code-group
::: code-group-item vue2

```vue

<script>
  this.$emit('clickSetData', {params: 123})
</script>
```

:::
::: code-group-item vue3

```vue

<script setup>
  const emit = defineEmits(['clickSetData'])

  function buttonClick() {
    emit('clickSetData', {params: 123})
  }
</script>
```

:::
::::

### 5.侦听器watch

:::: code-group
::: code-group-item vue2

```vue

<script>
  export default {
    data() {
      return {
        num: undefined,
        object: {
          num: undefined
        }
      }
    },
    watch: {
      // 简写
      num(newVal, oldVal) {
        console.log(`新值：${newVal}`)
        console.log(`旧值：${oldVal}`)
      },
      //监听对象中的某一项
      "object.num": {
        handle(newVal, oldVal) {
          console.log(newVal, oldVal)
        },
        // 进页面立即执行 immediate
        immediate: true,
        // 深度监听
        deep: true
      }
    }
  }
</script>
```

:::
::: code-group-item vue3

```vue

<script setup>
  import {ref, reactive, watch} from 'vue'

  const num = ref(0)
  const obj = reactive({count: 0})
  //监听 ref 定义的响应式数据
  watch(num, (newVal, oldVal) => {
    console.log('值改变了', newVal, oldVal)
  })
  // 监听对象的某个值
  watch(() => obj.count, (newVal, oldVal) => {
        console.log('值改变了', newVal, oldVal)
      },
      {
        // 深层监听
        deep: true,
        // 立即执行
        immediate: true
      }
  )
  // 监听多个
  // 第一个参数可监听多个对象,也可以监听多个值 [()=>obj.count,()=>obj.num]
  watch([obj, obj1], (newVal, oldVal) => {
        console.log('值改变了', newVal, oldVal)
      },
  )
  //不用指明监视哪个属性，监视的回调中用到哪个属性，就监视哪个属性
  // watchEffect有点像computed
  watchEffect(() => {
    console.log(obj.count, '-----')
  })
</script>
```

:::
::::

### 6.计算属性computed

:::: code-group
::: code-group-item vue2

```vue

<script>
  export default {
    computed: {
      num() {
        return this.num * this.size
      }
    }
  }
</script>
```

:::
::: code-group-item vue3

```vue

<script setup>
  import {computed} from 'vue'
  // 用于动态的根据某个值或某些值的变化，来产生对应的变化
  const num = computed(() => {
    return this.num * this.size
  })
</script>
```

:::
::::

### 7.nextTick()

:::: code-group
::: code-group-item vue2

```vue
<script>
  this.$nextTick(() => {
    this.show = false
  })
</script>
```

:::
::: code-group-item vue3

```vue
<script setup>
  import {ref, watch, nextTick} from 'vue'
  const is = ref(true)
  watch(input, async (newVal, oldVal) => {
    is.value = false
    await nextTick()
    is.value = true
  })
</script>
```

:::
::::