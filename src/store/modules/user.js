import { login, signup, getUserInfo, updateInfo } from '@/apis/sign'
import { getToken, setToken, removeToken } from '@/utils/auth'

const user = {
  state: {
    base_url: process.env.NODE_ENV === 'production'?'http://apis.holmesen.xyz:3000':'http://localhost:3000',
    token: getToken(),
    keyid: '',
    name: '',
    avatar: '',
    sex: '',
    birthday: '',
    updateTime: '',
    introduction: '',
    roles: []
  },

  mutations: {
    SET_TOKEN: (state, token) => {
      state.token = token
    },
    SET_KEYID: (state, keyid) => {
      state.keyid = keyid
    },
    SET_NAME: (state, name) => {
      state.name = name
    },
    SET_AVATAR: (state, avatar) => {
      state.avatar = avatar
    },
    SET_SEX: (state, sex) => {
      state.sex = sex
    },
    SET_BIRTHDAY: (state, birthday) => {
      state.birthday = birthday
    },
    SET_INTRODUCTION: (state, introduction) => {
      state.introduction = introduction
    },
    SET_UPDATETIME: (state, updateTime) => {
      state.updateTime = updateTime
    },
    SET_ROLES: (state, roles) => {
      state.roles = roles
    }
  },

  actions: {
    // 登录
    Login({ commit }, userInfo) {
      return new Promise((resolve, reject) => {
        login(userInfo).then(response => {
          const data = response.data
          if(data.success && data.data){
            setToken(data.data.token)
            commit('SET_TOKEN', data.data.token)
            commit('SET_KEYID', data.data.keyid)
            commit('SET_NAME', data.data.name)
            commit('SET_AVATAR', data.data.avatar)
            commit('SET_SEX', data.data.sex)
            commit('SET_BIRTHDAY', data.data.birthday)
            commit('SET_INTRODUCTION', data.data.introduction)
            commit('SET_UPDATETIME', data.data.updateTime)
          }
          resolve(response.data)
        }).catch(error => {
          reject(error)
        })
      })
    },

    // 微信扫码登录
    // WXLogin({ commit }, code) {
    //   return new Promise((resolve, reject) => {
    //     wxtrylogin(code).then(response => {
    //       resolve(response.data)
    //     }).catch(error => {
    //       reject(error)
    //     })
    //   })
    // },

    // 注册
    SignUp({}, userInfo) {
      return new Promise((resolve, reject) => {
        debugger
        signup(userInfo).then(response => {
          resolve(response.data)
        }).catch(error => {
          reject(error)
        })
      })
    },

    // 获取用户信息
    GetUserInfo({ commit, state }) {
      return new Promise((resolve, reject) => {
        getUserInfo(state.token).then(response => {
          const data = response.data
          if(data.success && data.data) {
            commit('SET_KEYID', data.data[0].keyid)
            commit('SET_NAME', data.data[0].name)
            commit('SET_AVATAR', data.data[0].avatar)
            commit('SET_SEX', data.data[0].sex)
            commit('SET_BIRTHDAY', data.data[0].birthday)
            commit('SET_INTRODUCTION', data.data[0].introduction)
            commit('SET_UPDATETIME', data.data[0].updateTime)
          }
          resolve(response.data)
        }).catch(error => {
          reject(error)
        })
      })
    },

    // SetRoles({ commit }, data) {
    //   return new Promise(resolve => {
    //     // debugger
    //     commit('SET_ROLES', data)
    //     resolve()
    //   })
    // },

    // 获取微信用户信息
    // GetWXInfo({ commit, state }, wxid) {
    //   return new Promise((resolve, reject) => {
    //     getWXInfo(wxid).then(response => {
    //       const data = response.data
    //       setToken(data.token)
    //       commit('SET_TOKEN', data.token)
    //       commit('SET_NAME', name)
    //       commit('SET_NICKNAME', name)
    //       commit('SET_AVATAR', '@/assets/images/avatar.jpg')
    //       commit('SET_YDID', data.token.YdId)
    //       resolve()
    //     }).catch(error => {
    //       reject(error)
    //     })
    //   })
    // },

    // 前端 登出
    FedLogOut({ commit }) {
      return new Promise(resolve => {
        commit('SET_KEYID', '')
        commit('SET_TOKEN', '')
        commit('SET_NAME', '')
        commit('SET_AVATAR', '')
        commit('SET_SEX', '')
        commit('SET_BIRTHDAY', '')
        commit('SET_INTRODUCTION', '')
        commit('SET_UPDATETIME', '')
        removeToken()
        resolve()
      })
    },

    // 更新用户信息
    UpdateInfo({ commit }, data) {
      return new Promise(resolve => {
        updateInfo(data).then(response => {
          const data = response.data
          if(data.success && data.data) {
            setToken(data.data.token)
            commit('SET_KEYID', data.data.keyid)
            commit('SET_NAME', data.data.name)
            commit('SET_AVATAR', data.data.avatar)
            commit('SET_SEX', data.data.sex)
            commit('SET_BIRTHDAY', data.data.birthday)
            commit('SET_INTRODUCTION', data.data.introduction)
            commit('SET_UPDATETIME', data.data.updateTime)
          }
          resolve(response)
        }).catch(error => {
          reject(error)
        })
      })
    }

  }
}

export default user
