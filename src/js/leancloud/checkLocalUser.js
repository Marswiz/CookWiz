import * as AV from "leancloud-storage";

function getLocalUser(){
    const currentUser = AV.User.current();
    return currentUser;
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
};
