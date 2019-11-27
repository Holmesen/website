// import { login, logout, getInfo, register, wxtrylogin, getWXInfo } from '@/api/login'
// import { getToken, setToken, removeToken } from '@/utils/auth'
import { login, signup, getUserInfo } from '@/apis/sign'
import { getToken, setToken, removeToken } from '@/utils/auth'

const user = {
  state: {
    base_url: 'http://localhost:3000',
    token: getToken(),
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
          const data = response.data.data
          setToken(data.token)
          commit('SET_TOKEN', data.token)
          commit('SET_NAME', data.name)
          commit('SET_AVATAR', data.avatar)
          commit('SET_SEX', data.sex)
          commit('SET_BIRTHDAY', data.birthday)
          commit('SET_INTRODUCTION', data.introduction)
          commit('SET_UPDATETIME', data.updateTime)
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
    GetInfo({ commit, state }) {
      return new Promise((resolve, reject) => {
        getUserInfo(state.token).then(response => {
          const data = response.data
          commit('SET_NAME', data.name)
          commit('SET_AVATAR', data.avatar)
          commit('SET_SEX', data.sex)
          commit('SET_BIRTHDAY', data.birthday)
          commit('SET_INTRODUCTION', data.introduction)
          commit('SET_UPDATETIME', data.updateTime)
          resolve(response)
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

    // 第三方验证登录
    // LoginByThirdparty({ commit, state }, code) {
    //   return new Promise((resolve, reject) => {
    //     commit('SET_CODE', code)
    //     loginByThirdparty(state.status, state.email, state.code).then(response => {
    //       commit('SET_TOKEN', response.data.token)
    //       setToken(response.data.token)
    //       resolve()
    //     }).catch(error => {
    //       reject(error)
    //     })
    //   })
    // },

    // 登出
    // LogOut({ commit, state }) {
    //   return new Promise((resolve, reject) => {
    //     logout(state.token).then(() => {
    //       commit('SET_TOKEN', '')
    //       commit('SET_ROLES', [])
    //       removeToken()
    //       resolve()
    //     }).catch(error => {
    //       reject(error)
    //     })
    //   })
    // },

    // 前端 登出
    FedLogOut({ commit }) {
      return new Promise(resolve => {
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
    }

    // 动态修改权限
    // ChangeRoles({ commit }, role) {
    //   return new Promise(resolve => {
    //     commit('SET_TOKEN', role)
    //     setToken(role)
    //     getInfo(role).then(response => {
    //       const data = response.data
    //       commit('SET_ROLES', data.Routers)
    //       commit('SET_NAME', data.Name)
    //       commit('SET_NICKNAME', data.NickName)
    //       commit('SET_AVATAR', data.Avatar)
    //       resolve()
    //     })
    //   })
    // }
  }
}

export default user
