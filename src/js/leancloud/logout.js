import * as AV from "leancloud-storage";

let logout = function (){
    AV.User.logOut();
}

export {
    logout,
};
