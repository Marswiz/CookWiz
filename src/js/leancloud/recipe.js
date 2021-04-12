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
function publicUsersRecipe(user, recipe){
    const Recipe = AV.Object.extend('publicRecipes');
    const recipeUpload = new Recipe();
    for (let key of Object.keys(recipe)){
        if (key == 'time' || key == 'rating' || key == 'serve') {
            recipeUpload.set(key, +recipe[key]);
        } else {
            recipeUpload.set(key, recipe[key]);
        }
    }
    recipeUpload.set('owner', user);
    recipeUpload.save().then(()=>{
        // 将本菜单本菜谱的isPublic变更为true。
        const queryRecipes = new AV.Query(user+'_Recipes');
        queryRecipes.equalTo('chName', recipe.chName);
        queryRecipes.find().then((res)=>{
            res[0].set('isPublic', true);
            res[0].save();
        });
    }, error=>{
        console.warn(error);
    });
}

function privateUsersRecipe(user, recipe){
    const queryPublicRecipe = new AV.Query('publicRecipes');
    queryPublicRecipe.equalTo('chName', recipe.chName);
    queryPublicRecipe.find().then((res)=>{
        if (res[0]) {
            res[0].destroy().then(()=>{
                // 将本菜单本菜谱的isPublic变更为false。
                const queryRecipes = new AV.Query(user+'_Recipes');
                queryRecipes.equalTo('chName', recipe.chName);
                queryRecipes.find().then((res)=>{
                    res[0].set('isPublic', false);
                    res[0].save();
                });
            });
        } else {
            alert('内部错误！无此共享菜谱。');
        }
    }, err => {
        console.warn(err);
    });
}

export {
    getAllRecipes,
    getRecipeFromName,
    getRecipeFromId,
    uploadRecipe,
    publicUsersRecipe,
    privateUsersRecipe,
};
