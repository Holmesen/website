import {get, post,deletes,put,service} from '../utils/axios.js' // 导入axios实例文件中方法
let bsae_api = process.env.BASE_API ? process.env.BASE_API :'..' // 获取项目api请求地址

export function verifyJWT() {
  return service({
    url: '/test/verify-token',
    method: 'post',
    headers: {
      'Content-Type': 'application/json;charset=UTF-8',
      'Authorization': 'Bearer ' + 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJuYW1lIjoiYWJjIiwicHdkIjoiMTIzNDU2IiwiaWF0IjoxNTc0NjYzNzkxfQ.xBOqZ1RNEOoHUoZHC46xZcDPHB0Wfov8NK-N-W8cbE8'
    },
    params: {},
    data: {
      data: JSON.stringify({})
    }
  })
}