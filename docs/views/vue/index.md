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

