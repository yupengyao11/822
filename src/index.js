import './banner.js'
import './tabs.js'

import './style/index.css'
import './style/index.less'


import imgUrl from './assets/1.gif'
const theImg = document.createElement("img")
theImg.src = imgUrl
document.body.appendChild(theImg)


import imgUrlp from './assets/logo_small.png'
const theImgp = document.createElement("img")
theImgp.src = imgUrlp
document.body.appendChild(theImgp)

import './assets/fonts/iconfont.css'


class Appb {
    static a = 123
}

console.log(Appb.a)


import App from './App.vue' // 根vue文件
// import Vue from './app.vue' // 引入vue.js对象

// new Vue({
//     render: h => h(App) // 渲染函数, 渲染App组件里的标签
// }).$mount('#app') // 把vue文件的标签结构 -> 挂载到id为app的标签里