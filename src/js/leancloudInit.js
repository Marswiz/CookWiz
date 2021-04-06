// leancloud 配置
import * as AV from "leancloud-storage";
// initialize app.
AV.init({
  appId: "1cIxhO0Vf6jLVLLKXPWdwTOK-MdYXbMMI",
  appKey: "Pn8EFfvyMY8TrmMwBBMf24Cr",
});

// 获取所有菜谱函数
async function getAllRecipes(){
  const queryRecipes = new AV.Query('Recipes');
  let res = await queryRecipes.find();
  return res.map(i => i.toJSON());
}

// 按中文名获取菜谱函数
async function getRecipeFromName(name){
  const queryRecipes = new AV.Query('Recipes');
  queryRecipes.equalTo('chName', name);
  let res = await queryRecipes.find();
  return res[0].toJSON();
}

// 按objectId获取菜谱函数
async function getRecipeFromId(id){
  const queryRecipes = new AV.Query('Recipes');
  queryRecipes.equalTo('objectId', id);
  let res = await queryRecipes.find();
  return res[0].toJSON();
}

// 按名称列表一次性从foodData class获取食物信息清单
async function getFoodNutritionByName(...names){
  let queryArr = [];
  for (let i of names){
    const queryFood = new AV.Query('foodData');
    queryFood.equalTo('food', i);
    queryArr.push(queryFood);
  }
  const query = AV.Query.or(...queryArr);
  let res = await query.find();
  if (res.length > 0){
    return res.map( item => item.toJSON() );
  } else {
    return [{
        food: 'default',
        protein: 0,
        fat: 0,
        sugar: 0,
        energy: 0,
    }];
  }
}

// 从foodData class获取全部食物
async function getFoods(){
  const queryFood = new AV.Query('foodData');
  let res = await queryFood.find();
  if (res.length > 0){
    return res.map(i => i.toJSON());
  } else {
    return {
      food: '',
      protein: 0,
      fat: 0,
      sugar: 0,
      energy: 0,
    };
  }
}

// 上传菜谱函数
function uploadRecipe(recipe){
  const Recipe = AV.Object.extend('Recipes');
  const recipeUpload = new Recipe();
  for (let key of Object.keys(recipe)){
    if (key == 'time' || key == 'rating' || key == 'serve') {
      recipeUpload.set(key, +recipe[key]);
    } else {
      recipeUpload.set(key, recipe[key]);
    }
  }
  console.log(recipe);
  recipeUpload.save().then(res=>{
    alert(`菜谱：${res.chName} 上传成功！`);
  }, error=>{
    console.warn(error);
  });
}

// 登录用户函数
async function login(username,password){
  const queryUser = new AV.Query('usersInfo');
  queryUser.equalTo('Username',username);
  let res = await queryUser.find();
  if (res.length === 0) {
    return {
      user: '',
      status: false,
    };
  }
  if (password !== res[0].toJSON().Password) {
    return {
      user: '',
      status: false,
    };
  }
  // 登录成功
  return {
    user: res[0].toJSON().Username,
    status: true,
  };
}

export {
  AV,
  getRecipeFromName,
  getAllRecipes,
  getRecipeFromId,
  getFoodNutritionByName,
  getFoods,
  uploadRecipe,
  login,
};