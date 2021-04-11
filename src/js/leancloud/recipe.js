// 获取所有菜谱函数
import * as AV from "leancloud-storage";

async function getAllRecipes(user){
    const queryRecipes = new AV.Query(user+'_Recipes');
    try {
        let res = await queryRecipes.find();
        return res.map(i => i.toJSON());
    } catch (err){
        return [{}];
    }
}

// 按中文名获取菜谱函数
async function getRecipeFromName(name,user){
    const queryRecipes = new AV.Query(user+'_Recipes');
    queryRecipes.equalTo('chName', name);
    let res = await queryRecipes.find();
    return res[0].toJSON();
}

// 按objectId获取菜谱函数
async function getRecipeFromId(id,user){
    const queryRecipes = new AV.Query(user+'_Recipes');
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

// 上传菜谱函数
function uploadRecipe(recipe,user){
    const Recipe = AV.Object.extend(user+'_Recipes');
    const recipeUpload = new Recipe();
    for (let key of Object.keys(recipe)){
        if (key == 'time' || key == 'rating' || key == 'serve') {
            recipeUpload.set(key, +recipe[key]);
        } else {
            recipeUpload.set(key, recipe[key]);
        }
    }
    recipeUpload.save().then(()=>{
        alert(`菜谱：${recipe.chName} 上传成功！`);
    }, error=>{
        console.warn(error);
    });
}

// 用户公开菜谱函数方法
function publicUsersRecipe(user,recipe){
    recipe.user = user;
    const Recipe = AV.Object.extend('publicRecipes');
    const recipeUpload = new Recipe();
    for (let key of Object.keys(recipe)){
        if (key == 'time' || key == 'rating' || key == 'serve') {
            recipeUpload.set(key, +recipe[key]);
        } else {
            recipeUpload.set(key, recipe[key]);
        }
    }
    recipeUpload.save().then
}

export {
    getAllRecipes,
    getRecipeFromName,
    getRecipeFromId,
    getFoodNutritionByName,
    uploadRecipe,
    publicUsersRecipe,
};
