const actions = {
  toggleSideBar: ({ commit }) => {
    commit('TOGGLE_SIDEBAR')
    commit('TOGGLE_MB_SIDEBAR')
  },
  toggleMBSideBar: ({ commit }) => {
    commit('TOGGLE_MB_SIDEBAR')
  },
  toggleMBHeader: ({ commit }) => {
    commit('TOGGLE_MB_HEADER')
  },
  closeSideBar({ commit }, { withoutAnimation }) {
    commit('CLOSE_SIDEBAR', withoutAnimation)
  },
  ToggleDevice({ commit }, device) {
    commit('TOGGLE_DEVICE', device)
  },
  setGoogleRecaptchaKey ({ commit }, key) {
    commit('SET_GG_RECAPTCHA', key)
  },
  setRoutes ({ commit }, routes) {
    commit('SET_ROUTES', routes)
  },
  setPagination ({ commit }, data) {
    commit('SET_PAGINATION', data || {})
  },
  setDialogCreateNews ({ commit }, data) {
    commit('SET_DIALOG_CREATE_NEWS', data)
  },
  setDialogEditUser ({ commit }, data) {
    commit('SET_DIALOG_EDIT_USER', data)
  }
}

export default { actions }
