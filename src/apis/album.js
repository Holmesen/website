import {service} from '../utils/axios.js' // 导入axios实例文件中方法

export function releaseAlbum(formData) {
  return service({
    url: '/album/upload',
    method: 'post',
    headers: {
      'Content-Type': 'application/json;charset=UTF-8'
    },
    params: {},
    data: {
      albumData: JSON.stringify(formData)
    }
  })
}

export function getAlbumList(query=null) {
  return service({
    url: '/album/get-list',
    method: 'get',
    headers: {
      'Content-Type': 'application/json;charset=UTF-8'
    },
    params: query
  })
}