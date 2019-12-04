import {service} from '../utils/axios.js' // 导入axios实例文件中方法

export function releaseLife(formData) {
  return service({
    url: '/life/release',
    method: 'post',
    headers: {
      'Content-Type': 'application/json;charset=UTF-8'
    },
    params: {},
    data: {
      lifeData: JSON.stringify(formData)
    }
  })
}

export function getLifeList2Id(query) {
  return service({
    url: '/life/get-idlist',
    method: 'get',
    headers: {
      'Content-Type': 'application/json;charset=UTF-8'
    },
    params: {
      lifeid: query
    }
  })
}

export function getLifeList(query=null) {
  return service({
    url: '/life/get-list',
    method: 'get',
    headers: {
      'Content-Type': 'application/json;charset=UTF-8'
    },
    params: query
  })
}

export function operateLife(formData) {
  return service({
    url: '/life/operate',
    method: 'put',
    headers: {
      'Content-Type': 'application/json;charset=UTF-8'
    },
    data: formData
  })
}

export function commentLife(formData) {
  return service({
    url: '/life/comment',
    method: 'post',
    headers: {
      'Content-Type': 'application/json;charset=UTF-8'
    },
    data: formData
  })
}

export function getLifeComment(query) {
  return service({
    url: '/life/get-comment',
    method: 'get',
    headers: {
      'Content-Type': 'application/json;charset=UTF-8'
    },
    params: query
  })
}

export function getLifeRecord(query) {
  return service({
    url: '/life/get-record',
    method: 'get',
    headers: {
      'Content-Type': 'application/json;charset=UTF-8'
    },
    params: query
  })
}

export function getCommentRecord(query) {
  return service({
    url: '/life/comment-record',
    method: 'get',
    headers: {
      'Content-Type': 'application/json;charset=UTF-8'
    },
    params: query
  })
}

export function operateLifeComment(formData) {
  return service({
    url: '/life/operate-comment',
    method: 'post',
    headers: {
      'Content-Type': 'application/json;charset=UTF-8'
    },
    data: formData
  })
}
