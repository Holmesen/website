import {get, post,deletes,put,service} from '../utils/axios.js' // 导入axios实例文件中方法
let bsae_api = process.env.BASE_API ? process.env.BASE_API :'..' // 获取项目api请求地址
// 根据id获取用户信息
export const getUserInfoById=(id)=>{
  return get(`${bsae_api}/web/user/${id}`) // resfulapi风格
}
export function login(formData, queryData={}) {
  return post(`${bsae_api}/login`, queryData, formData)
}

// export function signup(formData, queryData={}) {
//   return post(`${bsae_api}/user/signup`, queryData, formData)
// }

export function signup(formData) {
  return service({
    url: '/signup',
    method: 'post',
    headers: {
      'Content-Type': 'application/json;charset=UTF-8'
    },
    params: {},
    data: {
      userData: JSON.stringify(formData)
    }
  })
}