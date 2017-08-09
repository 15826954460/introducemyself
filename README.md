# 网页版个人简历


### 一个基于vue2.0简易的网页版简历

> 该demo是为了找工作时候用的

### 技术栈

vue2.0 + vuex + i8n + vue-router + webpack + es6 + less + flex + svg + swiper + particles

### demo

##### 查看demo，请狠狠地点击这里 [http://demonodejs.applinzi.com] ，建议较新的Chrome,Fix,O....等浏览器进行浏览
##### 移动端扫码：
<img src="./static/img/erweima.png"/>

### 效果演示
<img src="./static/img/pc_login.gif"/>

##### pc端
<img src="./static/img/pc_login.gif"/>


### 项目运行

##### 温馨提示：由于该项目大量使用的ES6新特性，nodejs必须是较新的版本(6.0以上)，建议使用稳定版本

* git clone https://github.com/15826954460
* cd nodejs
* npm/cnpm install
* npm/cnpm run dev

### 说明
* 这是一个pc端的项目，做了一下移动端的适配
* 如果你觉得对您有帮助，您可以点击右上角的star支持一下，谢谢！
* 当然你一可以follow一下，我将会在后期开源更好的demo
* 项目还有一些不完美的地方，后续会持续进行修复更新

### 目录结构（布局）
# 项目结构

```
.
├── build                                                       // webpack配置文件
├── config                                                      // 项目打包路径
├── src                                                         // 资源文件
│    ├── assets
│    │     ├── fonts                                            // 字体文件
│    │     ├── image                                            // 图片
│    ├── commonstyle
│    │     ├── common.less (common.css)                         // 公用样式
│    │     ├── reset.less  (reset.css)                          // 重置样式
│    ├── components                                             // 组件
│    │     ├── footer.vue                                       // 底部组件
│    │     ├── guideline.vue                                    // 侧边栏导航线组件
│    │     ├── header.vue                                       // 头部组件
│    ├── page
│    │     ├── home.vue                                         // 主页面
│    │     ├── slideFive.vue                                    // 第五个子页面
│    │     ├── slideFour.vue                                    // 第四个子页面
│    │     ├── slideOne.vue                                     // 第一个子页面
│    │     ├── slideSix.vue                                     // 第六个子页面
│    │     ├── slideThreed.vue                                  // 第三个子页面
│    │     └── slideTwo.vue                                     // 第二个子也页面
│    ├── resource
│    │     ├── i18nconfig.js                                    // i18n入口文件
│    │     └── i18ndata.js                                      // i18n数据
│    ├── router
│    │    └── index.js                                         // 路由
│    ├── store                                                 // vuex的状态管理
│    │    ├── getters.js                                       // 配置getters
│    │    ├── index.js                                         // 引用vuex，创建store
│    │    └── mutations.js                                     // 配置mutations
│    ├── App.vue                                               // 页面入口文件
│    └── main.js                                               // 程序入口文件，加载各种公共组件
└── static                                                     // 静态资源文件
     ├── audio
     │    └── My_love.mp3                                      // 音乐
     ├── json
     │    └── particles.json                                   // particles.json配置文件
     ├── part
     ├── heart.js                                              // heart.js文件
     ├── part.js                                               // part.js文件
     └── particles.min.js                                      // particles.min.js文件
.

```

