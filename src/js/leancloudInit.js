// leancloud 配置
import * as AV from "leancloud-storage";

// initialize app.
AV.init({
  appId: "1cIxhO0Vf6jLVLLKXPWdwTOK-MdYXbMMI",
  appKey: "Pn8EFfvyMY8TrmMwBBMf24Cr",
});

export {AV};
export {  getRecipeFromName,  getAllRecipes,  getRecipeFromId , uploadRecipe, publicUsersRecipe,privateUsersRecipe,} from './leancloud/recipe.js';
export {  isUserExist,  login,  register,} from './leancloud/login_register.js'
export {  getFoods, getFoodNutritionByName} from './leancloud/food.js';
export {  logout} from './leancloud/logout.js';
export {  getLocalUser,} from './leancloud/checkLocalUser.js';
export {  changeUserGoals,} from './leancloud/setting.js';
