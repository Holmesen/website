import {service} from '../utils/axios.js' // 导入axios实例文件中方法

export function release(formData, token) {
  return service({
    url: '/blog/release',
    method: 'post',
    headers: {
      'Content-Type': 'application/json;charset=UTF-8',
      'Authorization': 'Bearer ' + token
    },
    params: {},
    data: {
      blogData: JSON.stringify(formData)
    }
  })
}

export function getList2Id(query) {
  return service({
    url: '/blog/get-idlist',
    method: 'get',
    headers: {
      'Content-Type': 'application/json;charset=UTF-8'
    },
    params: {
      blogid: query
    }
  })
}