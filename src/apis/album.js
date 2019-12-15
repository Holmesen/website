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

export function updateAlbum(formData) {
  return service({
    url: '/album/update',
    method: 'put',
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

export function deleteAlbum(query) {
  return service({
    url: '/album/delete/'+query,
    method: 'delete',
    headers: {
      'Content-Type': 'application/json;charset=UTF-8'
    }
  })
}

export function getPhotos() {
  return service({
    url: '/album/photos',
    method: 'get',
    headers: {
      'Content-Type': 'application/json;charset=UTF-8'
    }
  })
}