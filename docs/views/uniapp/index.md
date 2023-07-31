## uniapp快速上手

通过 vue-cli 创建 uni-app 项目

``` sh
    vue2
    vue create -p dcloudio/uni-preset-vue my-project
```

``` sh
    Vue3/Vite
    npx degit dcloudio/uni-preset-vue#vite my-vue3-project
```
## 公众号H5
### 登录

[微信官方文档](https://developers.weixin.qq.com/doc/offiaccount/OA_Web_Apps/Wechat_webpage_authorization.html)

```js
    async getCode() {
        // 获取当前页面的url
        const link = window.location.href
        console.log(link, 'link')
        let code = null
        if (link.indexOf('code=') === -1) {
            const appid = 'xxxxxxxxxx'
            // const appid = 'xxxxxxxxxx' // 本地测试appid
            // 重定向地址，就是用户授权后返回来的地址
            const uri = encodeURIComponent(link)
            const authURL = `https://open.weixin.qq.com/connect/oauth2/authorize?appid=${appid}&redirect_uri=${uri}&response_type=code&scope=snsapi_base&state=123#wechat_redirect`
            window.location.href = authURL
        } else {
            // 回调函数已经执行 返回的链接存在code= 地址解析
            const temp = link.split('code=')[1]
            code = temp.split('&')[0]
            console.log(code, 'code')
            uni.setStorageSync('code', code)
            const params = {
                xcxCode: uni.getStorageSync('code')
            }
            const { data } = await this.$api.POST('/xcxLogin', params, { catch: true })
        }
	}
```

### 支付
>  微信内嵌浏览器运行H5版时，可通过js sdk实现微信支付，需要引入一个单独的js

> - NPM安装方式
```shell
    npm install jweixin-module --save
```
> - 使用
```js
    var jWeixin = require('jweixin-module')  
    jWeixin.ready(function(){  
        // TODO  
    });
```
[微信官方文档](https://developers.weixin.qq.com/doc/offiaccount/OA_Web_Apps/JS-SDK.html)
```js
import http from '@/api/http'
const jWeixin = require('jweixin-module')
export const mypay = (params) => {
	return new Promise((resolve, reject) => {
		http.GET('/jjyyOrderInfo/pay', params, {
			custom: {
				catch: true
			}
		}).then((res) => {
			jWeixin.config({
				debug: false, // 开启调试模式,调用的所有api的返回值会在客户端alert出来,线上环境需要改为false
				appId: res.data.appId, // 必填，公众号的唯一标识
				timestamp: res.data.timeStamp, // 必填，生成签名的时间戳
				nonceStr: res.data.nonceStr, // 必填，生成签名的随机串
				signature: res.data.paySign, // 必填，签名
				jsApiList: ['chooseWXPay'] // 必填，需要使用的JS接口列表
			})
			jWeixin.ready(() => {
				jWeixin.chooseWXPay({
					appId: res.data.appId, // 必填，公众号的唯一标识
					timestamp: res.data.timeStamp,
					nonceStr: res.data.nonceStr, // 支付签名随机串，不长于 32 位
					package: res.data.prepayId, // 统一支付接口返回的prepay_id参数值
					signType: res.data.signType, // 签名方式，默认为'SHA1'，使用新版支付需传入'MD5'
					paySign: res.data.paySign, // 支付签名
					success: function(res) { // 支付成功回调
						uni.showToast({
							title: '支付成功',
							icon: 'none',
							duration: 2000
						})
						// //成功后跳转到订单页
						setTimeout(() => {
							uni.navigateTo({
								url: `/pages/Major/successfulAppointment?par=${params.reservationId}`
							})
						}, 2000)
					},
					cancel: function(res) {
						uni.showToast({
							title: '取消支付',
							icon: 'none',
							duration: 2000
						})
					},
					fail: function(res) {
						console.log('fail', res)
						uni.showToast({
							title: '支付失败',
							icon: 'none',
							duration: 2000
						})
					}
				})
			})
		}).catch((e) => {
			reject(e)
		})
	})
}


```
