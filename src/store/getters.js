const getters = {
  base_url: state => state.user.base_url,
  token: state => state.user.token,
  keyid: state => state.user.keyid,
  name: state => state.user.name,
  avatar: state => state.user.avatar,
  sex: state => state.user.sex,
  birthday: state => state.user.birthday,
  updateTime: state => state.user.updateTime,
  introduction: state => state.user.introduction,
  roles: state => state.user.roles,
}
export default getters
