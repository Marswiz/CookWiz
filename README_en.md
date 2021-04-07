# CookWiz
[To English Version](/README_en.md)

![lemon_logo](/public/lemon_logo.png)

## A Personal Recipe Management,Show and Share System based on Vue.js 3.0

### Key Feature

CookWiz is a personal recipe management,show and share system based on Vue.js 3.0. The initial goal to design this app is to upload and show out my personal recipes which are originally saved as the format of Word Docs.
At the mean time, I can upgrade my skills of using Vue3.0 and other frontend tools about it.  

**These are the key features of CookWiz：**

- Register & login your personal account, do the frontend validation, and get your personal recipe space after these operations. 
- Show your personal recipe menu by the category: Appetizers, Main Courses, Drinks, Side Dishes, Desserts, or Basic Foods.
- Select & Show your recipe, which contains: Category, Serves, Duration, Ingredients, Processes, Tags, Tips, and Rating.
- Based on the ingredients of special recipe, fetch the food nutrition info from data base and calculate calories, protein, fat, and carbohydrate of this particular recipe automatically. 
- Edit & Upload your personal recipe;
- Set your personal intake value of the nutrition, show the percentage of your own daily intake goal for a serve of recipe. (Unaccomplished)
- Share your personal recipe if you'd like to.(Unaccomplished)
- See the recipes others shared, pick and collect them to your own recipe space. (Unaccomplished)
- Feedback for any recipe, upload your picture, rating, comments, and these infos will be calculated and shown in the recipe page.(Unaccomplished) 
- Maintain a food data base, when add a food which the data base doesn't have, remind editing and upload automatically. (Unaccomplished) 
- Create set meals from yoru personal menu; (Unaccomplished)

> The project was planed at March.5.2021, and finished the proposal at the same day, then began to design and code.

> For I'm not capable of writing the backend codes, using the LeanCloud as backend database temporarily, and it acts as backend data management program too. I'll replace it when I have learned to write my own backend program.

## Technologies

Vue3 + Vue-Router + Vue-CLI + ES6/async + SCSS + Flex/Grid布局 + LeanCloud + 腾讯云cloudBase + Eslint + Git

## How to Run
### 1. Browse Online

Click to browse online: (For Mobile)

[腾讯云CloudBase Serverless快速部署：CookWiz APP](https://cookwiz-1g3z8k0qb4ee0c8c-1254299756.tcloudbaseapp.com/#/)

### 2.Clone and run serve locally

You need to install Node.js at the minimum version of 6.0. 

Clone git repository to your local disk, and run Vue-CLI default commands to serve.

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
### Key Features & Pages

![菜单页](/src/assets/readmePics/1.png)
![登录页](/src/assets/readmePics/2.png)
![登录后](/src/assets/readmePics/3.png)
![菜谱实例](/src/assets/readmePics/4.png)
![添加菜谱](/src/assets/readmePics/5.png)

### Others

> If the project helps you, you can click "Star" at the right corner to support me, or you can "follow" me, thanks.
>
> Developing Environments: windows10 Chrome 87  Node,js 14.4.0
>
> Thanks to my UAV company for leaving me so much time to code this project.
>
> I love you m.liu...

### Author

Mars, engineer of UAV propulsion system for a listed company now, an amateur of frontend, Civil Chef & Singer.

The job of my future is a mystery.

Personal Blog：[Marswiz|Solid.路旁有花，心中有歌，天上有星](https://www.marswiz.com/)

### License
Under MIT License.