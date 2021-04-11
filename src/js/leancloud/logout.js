import * as AV from "leancloud-storage";

// initialize app.
AV.init({
    appId: "1cIxhO0Vf6jLVLLKXPWdwTOK-MdYXbMMI",
    appKey: "Pn8EFfvyMY8TrmMwBBMf24Cr",
});

let logout = function (){
    AV.User.logOut();
}

export {
    logout,
};
