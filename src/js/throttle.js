// 节流函数
function _throttle(func, delay){
  return function (...args){
    if (this.timeoutID){
      console.log('canceled');
      return ;
    }
    func(...args);
    let timeout = setTimeout(()=>{
      this.timeoutID = null;
    } ,delay);
    this.timeoutID = timeout;
  }
}

export {
  _throttle,
};