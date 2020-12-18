import Cookies from 'js-cookie'

const state = {
  sidebar: {
    opened: !+Cookies.get('sidebarStatus'),
    withoutAnimation: false
  },
  device: 'desktop',
  googleRecaptchaKey: '',
  routes: [],
  // isOpenedSidebar: true,
  isOpenedMBSidebar: false,
  isOpenMBHeader: false,
  pagination: {},
  dialogVisibleEditUser: false,
  dialogVisibleCreateNews: false,
}

const getters = {
  sidebar: state => state.sidebar,
  device: state => state.device,
  googleRecaptchaKey: state => state.googleRecaptchaKey,
  routes: state => state.routes,
  // isOpenedSidebar: state => state.isOpenedSidebar,
  pagination: state => state.pagination,
  isOpenedMBSidebar: state => state.isOpenedMBSidebar,
  isOpenMBHeader: state => state.isOpenMBHeader,
  dialogVisibleCreateNews: state => state.dialogVisibleCreateNews,
  dialogVisibleEditUser: state => state.dialogVisibleEditUser,
}

const mutations = {
  TOGGLE_SIDEBAR: state => {
    // state.isOpenedSidebar = !state.isOpenedSidebar
  },
  TOGGLE_MB_SIDEBAR: state => {
    state.isOpenedMBSidebar = !state.isOpenedMBSidebar
  },
  TOGGLE_MB_HEADER: state => {
    state.isOpenMBHeader = !state.isOpenMBHeader
  },
  CLOSE_SIDEBAR: (state, withoutAnimation) => {
    Cookies.set('sidebarStatus', 1)
    state.sidebar.opened = false
    state.sidebar.withoutAnimation = withoutAnimation
  },
  TOGGLE_DEVICE: (state, device) => {
    state.device = device
  },
  SET_GG_RECAPTCHA: (state, data) => {
    state.googleRecaptchaKey = data
  },
  SET_ROUTES: (state, routes) => {
    state.routes = routes
  },
  SET_PAGINATION: (state, data) => {
    state.pagination = data
  },
  SET_DIALOG_EDIT_USER: (state, data) => {
    state.dialogVisibleEditUser = data
  },
  SET_DIALOG_CREATE_NEWS: (state) => {
    state.dialogVisibleCreateNews = !state.dialogVisibleCreateNews
  }
}

export default { state, getters, mutations }
