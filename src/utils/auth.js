import Cookies from 'js-cookie'
import store from '../store'

const TokenKey = 'Holmesen-Token'

export function getToken() {
  return Cookies.get(TokenKey)
}

export function setToken(token) {
  return Cookies.set(TokenKey, token, {expires: new Date(new Date().getTime() + 60 * 1000 * 60 * 2)}) // 设置cookie有效期为2小时
}

export function removeToken() {
  return Cookies.remove(TokenKey)
}

export function isLogin() {
  if(Cookies.get(TokenKey) && store.getters.token) {
    return true
  } else {
    return false
  }
}
