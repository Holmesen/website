export function NowTime(){
  //获取年月日
  var time=new Date()
  var year=time.getFullYear()
  var month=time.getMonth()+1
  var day=time.getDate()
  
  //获取时分秒
  var h=time.getHours()
  var m=time.getMinutes()
  var s=time.getSeconds()
  
  //检查是否小于10
  h=check(h)
  m=check(m)
  s=check(s)
  return year+"-"+month+"-"+day+"  "+h+":"+m+":"+s
}
//时间数字小于10，则在之前加个“0”补位。
function check(i){
  //方法一，用三元运算符
  var num
  i<10?num="0"+i:num=i
  return num
  
  //方法二，if语句判断
  //if(i<10){
  //    i="0"+i;
  //}
  //return i;
}

export function UTC2Local(utc){
  if(!!utc) {
    return new Date(utc).toLocaleString() || utc
  }
  return ""
}