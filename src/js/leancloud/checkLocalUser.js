import * as AV from "leancloud-storage";


// initialize app.
AV.init({
    appId: "1cIxhO0Vf6jLVLLKXPWdwTOK-MdYXbMMI",
    appKey: "Pn8EFfvyMY8TrmMwBBMf24Cr",
});

const currentUser = AV.User.current();

function getLocalUser() {
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
    getLocalUser,
};
