## html使用模块化引入

::: tip
浏览器加载 ES6 模块，也使用`<script>`标签,但是要加入`type="module"`属性
:::

新建一个demo.js
```shell
export const str = 'module'
```
导入demo.js使用
```js
<script type="Module">
  import {str} from "./demo.js"
  console.log(str); // module
</script>
```

## export 命令
为模块指定分别导出
新建一个demo.js
```js
export const str = "xxx";
export function fn(){
    return "function"
}
```
导入demo.js使用
```js
<script type="Module">
    import { fn, str} from "./demo.js"
    // import命令要使用as关键字，将输入的变量重命名
    import * as demo from "./demo.js"
    console.log(fn()); // function
    console.log(str);  // xxx
</script>
```


## export default 命令
为模块指定默认输出
新建一个demo.js
```js
export default{
    str:'xxx',
    fn(){
        return "function"
    }
}
```
导入demo.js使用
```js
<script type="Module">
    import xx from "./demo.js"
    console.log(xx.fn()); //function
</script>
```
