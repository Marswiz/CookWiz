// function for dealing with local login User info.
import * as AV from "leancloud-storage";

function getLocalUser(){
    const currentUser = AV.User.current();
    return currentUser;
}

function getLocalUserNutritionGoals(){
    const currentUser = AV.User.current();
    const {
        caloriesGoal,
        carbohydrateGoal,
        fatGoal,
        proteinGoal,
    } = currentUser.attributes;
    return {
        caloriesGoal,
        carbohydrateGoal,
        fatGoal,
        proteinGoal,
    };
}

function getLocalUserName() {
    const currentUser = AV.User.current();
    if (currentUser) {
        return {
            user: currentUser.getUsername(),
            logStatus: true,
        };
    } else {
        return {
            user: '',
            logStatus: false,
        };
    }
}
export {
    getLocalUserName,
    getLocalUser,
    getLocalUserNutritionGoals,
};
