import { createStore } from 'vuex'
import axios from 'axios'


export const store = createStore({
  state: {
    zipData: null,
    userData: null
  },
  mutations: {
    setZipData (state, zipData) {
      state.zipData = zipData
    },
    setUserData (state, userData) {
      state.userData = userData
    }
  },
  actions: {
    async loadZipData ({ commit }, payload) {
      const { data } = await axios.get(`https://api.zippopotam.us/us/${payload}`)
      commit('setZipData', data)
    },
    async loadUserData ({ commit }) {
      const { data } = await axios.get('https://ipwhois.app/json/')
      commit('setUserData', data)
    }
  },
  getters: {
    getZipData (state) {
      return state.zipData
    },
    getUserData (state) {
      return state.userData
    }
  }
})