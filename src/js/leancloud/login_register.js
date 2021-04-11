import * as AV from "leancloud-storage";

async function isUserExist(username){
    const queryUser = new AV.User('usersInfo');
    queryUser.equalTo('Username',username);
    let res = await queryUser.find();
    if (res.length !== 0) return true;
    return false;
}

// 使用用户名登录
async function login(username, password){
    let res = await AV.User.logIn(username, password).then((user)=>{
        console.log(user.getUsername());
        return {
            user: user.getUsername(),
            status: true,
        };
    },(err)=>{
        if (/too many times/g.test(err)) return '您尝试登录失败的次数过多，账号已被暂时封停，请15分钟后再进行操作。';
        if (/password/g.test(err)) return '您的身份信息有误，请重新输入。';
        return '未知登录错误';
    });
    return res;
}

// 注册用户函数
async function register(username,password){
    const user = new AV.User();
    user.setUsername(username);
    user.setPassword(password);
    let res = await user.signUp().then(()=>{
        return true;
    },()=>{
        return false;
    });

    return res;
}

export {
    isUserExist,
    login,
    register,
};
