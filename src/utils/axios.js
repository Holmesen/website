import axios from 'axios'
import router from '../router'
import qs from 'qs'

// 创建axios实例
const service = axios.create({
  baseURL: process.env.BASE_API, // api的base_url
  timeout: 3000, // 请求超时时间
  withCredentials: true
})

// 添加request拦截器
service.interceptors.request.use(config=> {
  config.headers['Content-Type'] = 'application/x-www-form-urlencoded;charset=utf-8'
  config.transformRequest = [data => {
    let ret = ''
    ret = qs.stringify(data)
    return ret
  }]
  return config
}, error => {
    Promise.reject(error)
  }
)

// 添加response拦截器
service.interceptors.response.use(
  response => {
    let res = {}
    res.status = response.status
    res.data = response.data
    return res
  },
  error => {
    if(error.response && +(error.response.status) === 404) {
      router.push('/blank.vue')
    }
    return Promise.reject(error.response)
  }
)

/**
 * 封装get请求
 * @param {string} url 
 * @param {json} params 
 */
export function get(url, params = {}) {
  params.t = new Date().getTime() // get方法加一个时间参数，解决ie下可能缓存问题
  return service({
    url,
    method: 'get',
    headers: {},
    params
  })
}

/**
 * 封装post请求
 * @param {string} url 
 * @param {json} params
 * @param {json} data 
 */
export function post(url, params = {}, data = {}) {
  return service({
    url,
    method: 'post',
    headers: {
      'Content-Type': 'application/json;charset=UTF-8'
    },
    params,
    data: JSON.stringify(data)
  })
}

/**
 * 封装put请求
 * @param {string} url 
 * @param {json} params 
 * @param {json} data 
 */
export function put(url, params = {}, data = {}) {
  return service({
    url,
    method: 'put',
    headers: {
      'Content-Type': 'application/json;charset=UTF-8'
    },
    params,
    data: JSON.stringify(data)
  })
}

/**
 * 封装delete请求
 * @param {string} url 
 * @param {json} params 
 */
export function deletes(url, params = {}) {
  return service({
    url,
    method: 'delete',
    headers: {},
    params
  })
}

export { service }