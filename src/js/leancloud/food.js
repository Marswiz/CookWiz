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

export {
    getFoods,
};
