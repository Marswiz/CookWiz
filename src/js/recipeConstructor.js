class Recipe{
    constructor({
                    chName,
                    engName ,
                    time,
                    category ,
                    serve ,
                    tags,
                    rating ,
                    ingredient,
                    specialIngredient,
                    process,
                    tips,
                } = {
                      chName:'菜品名称',
                      engName: 'dish_name',
                      time: 0,
                      category: 'MC',
                      serve: 1,
                      tags: ['tag'],
                      rating: 5,
                      ingredient: [{food: 'food', weight: 0}],
                      specialIngredient:[''],
                      process: ['process'],
                      tips: ['tips'],
    }){
        this.chName = chName;
        this.engName = engName;
        this.time = time;
        this.category = category;
        this.serve= serve;
        this.tags= tags;
        this.rating = rating;
        this.ingredient = ingredient;
        this.specialIngredient = specialIngredient;
        this.process = process;
        this.tips = tips;
    }
}

export {Recipe};


