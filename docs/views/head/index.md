:hourglass_flowing_sand:{{readingTimeLocale.time}}
:mag:{{readingTimeLocale.words}}
***

<script setup>
import {useReadingTimeLocale} from "vuepress-plugin-reading-time2/client";
const readingTimeLocale = useReadingTimeLocale();
</script>

### 一行代码，快速删除 node_modules 文件夹

安装依赖
```shell
    cnpm install rimraf -g 或 npm i rimraf -g
```
命令行运行
```shell
    rimraf node_modules
```