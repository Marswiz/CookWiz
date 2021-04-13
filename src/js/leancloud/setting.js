import * as AV from "leancloud-storage";

// 传入leancloud class名和属性对象
function changeUserGoals(goalsObj){
  const currentUser = AV.User.current();
  for (let i of Object.keys(goalsObj)){
    currentUser.set(i, +goalsObj[i]);
  }
  currentUser.save().then((res)=>{
    console.log('设置成功！');
    console.log(res);
    return true;
  }).catch(err=>{
    console.warn(err);
  });
}

export {
  changeUserGoals,
}