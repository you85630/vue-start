// import api from 'src/assets/js/api'
import router from 'src/router'

const state = {
  Message: {}
}

const getters = {
  Message: state => state.Message
}

const actions = {
  // 判断页面是否是移动端
  judge ({ commit }) {
    commit('judge')
  },
  // 提示信息
  showMessage ({ commit }, key) {
    commit('showMessage', key)
  },
  // 跳转主页
  goHome ({ commit }) {
    commit('goHome')
  }
}

const mutations = {
  judge (state) {
    let wid = document.body.clientWidth
    let userAgentInfo = navigator.userAgent
    let Agents = [
      'Android',
      'iPhone',
      'SymbianOS',
      'Windows Phone',
      'iPad',
      'iPod'
    ]
    let flag = true

    for (const key in Agents) {
      if (Agents.hasOwnProperty(key)) {
        const element = Agents[key]
        if (userAgentInfo.indexOf(element) > 0) {
          flag = false
          break
        }
      }
    }

    // PC端
    if (flag) {
      if (wid <= 920) {
        state.mobile = true
      } else {
        state.mobile = false
      }
    } else {
      // 移动端
      if (wid <= 414) {
        state.mobile = true
      } else {
        state.mobile = false
      }
    }
  },
  showMessage (state, data) {
    state.Message = {}
    state.Message = data
  },
  goHome (state) {
    router.push('/home')
    sessionStorage.clear()
  }
}

export default {
  state,
  getters,
  actions,
  mutations
}
