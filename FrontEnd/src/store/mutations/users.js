export default {
  
  /* 사용자 로그인 */
  SET_USER_LOGIN(state) {
    state.users.isLogin = true;
  },

  /* 로그인한 사용자 정보 받기 */
  SET_USER_INFO(state, payload) {
    state.users.userInfo = payload;
  },

  SET_USER_KEY_INIT(state) {
    state.users.userKey = "";
  },

};
SET_RECEIVE_LIST