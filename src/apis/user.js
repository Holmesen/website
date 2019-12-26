import {service} from '../utils/axios.js' // 导入axios实例文件中方法

/**
 * 获取用户的博客、记事...(博客：blog；记事：life；相册：album；收藏：collect；默认：tag=*)
 * @param {Object} query 
 */
export function getUserAssets(query) {
  return service({
    url: '/user/get-assets',
    method: 'get',
    params: query
  })
}

// export function updateInfo(query) {
//   return service({
//     url: '/user/update-info',
//     method: 'get',
//     params: query
//   })
// }
