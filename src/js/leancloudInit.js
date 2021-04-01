// leancloud 配置
import * as AV from "leancloud-storage";

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

export {
  AV,
  getRecipeFromName,
  getAllRecipes,
  getRecipeFromId,
};