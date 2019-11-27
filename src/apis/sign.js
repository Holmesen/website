import {service} from '../utils/axios.js' // 导入axios实例文件中方法

export function login(formData) {
  return service({
    url: '/user/login',
    method: 'post',
    headers: {
      'Content-Type': 'application/json;charset=UTF-8'
    },
    params: {},
    data: formData
  })
}

export function signup(formData) {
  return service({
    url: '/user/signup',
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

export function getUserInfo(token) {
  return service({
    url: '/user/get-info',
    method: 'get',
    headers: {
      'Authorization': 'Bearer ' + token
    }
  })
}