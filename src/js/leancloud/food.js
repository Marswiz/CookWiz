// 从foodData class获取全部食物
import * as AV from "leancloud-storage";

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

// 按名称列表一次性从foodData class获取食物信息清单
async function getFoodNutritionListByNames(...names){
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

export {
    getFoods,
    getFoodNutritionListByNames,
};
