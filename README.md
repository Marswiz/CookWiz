# CookWiz
[To English Version](/README_en.md)

![lemon_logo](/public/lemon_logo.png)

## 基于Vue3的私人菜谱管理、展示与分享系统

### 主要功能

CookWiz是一款基于Vue3的私人菜谱管理、展示与分享系统。它的设计初衷是为了方便上传、展示自己原保存为Doc格式的私人菜谱，同时，在此过程中练习Vue3及其他工具的使用。

**CookWiz主要有以下功能：**

- 注册、登录个人账号，进行前端验证，注册登录后获取私人菜谱空间；
- 按类别展示私人菜单：开胃菜、主菜、饮品、甜品、配菜、基础；
- 选择并展示菜单，内容包括：菜品类别、人份数、制作时长、食材与用量、菜品关键词描述、成品图、制作步骤、技巧提示、菜品评分等；
- 根据菜谱食材与用量，自动从食物库中拉取营养素数据，自动计算并显示菜谱热量和三大营养素含量；
- 编辑并上传私人菜谱；
- 设置个人每日营养素摄入值，在菜谱内显示三大营养素占每人一天总量的百分比；（未实现）
- 视个人需求选择公开分享与否；（未实现）
- 查看他人分享的私房菜谱，并收藏到个人菜单；（未实现）
- 对菜品制作进行反馈，上传点评，图片，评分，多人评分会综合计算并反映在菜谱评分组件内；（未实现）
- 维护一个食材库，对食材库中没有的食物，在添加时自动提示填写并上传；（未实现）
- 根据私人菜单，从各类别菜品中随机组合生成套餐；（未实现）

> 本项目从2021年3月5日开始策划，当日完成策划书并开始设计、编写。

> 因为不会写后端程序，暂时使用LeanCloud作为后端数据库，同时进行后端数据管理，以后学会了再编写后端程序。

## 技术栈

Vue3 + Vue-Router + Vue-CLI + ES6/async + SCSS + Flex/Grid布局 + LeanCloud + 腾讯云cloudBase + Eslint + Git

## 运行方式*__*
### 1.在线浏览

点击下面链接以在线预览（目前仅适配移动端，PC请缩小页面或打开F12开发移动端选项）：

[腾讯云CloudBase Serverless快速部署：CookWiz APP](https://cookwiz-1g3z8k0qb4ee0c8c-1254299756.tcloudbaseapp.com/#/)

### 2.克隆仓库到本地运行

需要本地Node 6.0及以上环境。

先克隆到本地，然后使用Vue-CLI默认指令开启本地服务。

```
# Clone project to local dir;
git clone https://github.com/Marswiz/CookWiz.git

# Change dir to project dir;
cd  CoolWiz

# npm install packages;
npm i

# Vue-CLI locak serve;
npm run serve
```
### 功能与页面展示

![菜单页](/src/assets/readmePics/1.png)
![登录页](/src/assets/readmePics/2.png)
![登录后](/src/assets/readmePics/3.png)
![菜谱实例](/src/assets/readmePics/4.png)
![添加菜谱](/src/assets/readmePics/5.png)

### 其他说明

> 如果内容对您有帮助，您可以点右上角 "Star" 支持一下,或者您可以 "follow" 一下，让我更有动力，谢谢！
>
> 开发环境 windows10 Chrome 87  Node,js 14.4.0
>
> 感谢某无人机公司平台，让我有充足的时间完成这个APP
>
> 感谢刘小宝，我永远爱你，么么哒。

### 作者

Mars. 现职务为某上市公司无人机动力系统工程师，业余前端爱好者，民间厨师、歌手，未来职业方向不可控。

个人Blog：[Marswiz|Solid.路旁有花，心中有歌，天上有星](https://www.marswiz.com/)

### License
Under MIT License.