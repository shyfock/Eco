import { createStore } from 'vuex'

export default createStore({
  state: {
    showPublishForm: false,
    showPublicationForm: false,
  },
  mutations: {
    setShowPublishForm(state, payload) {
      state.showPublishForm = payload;
    },
    setShowPublicationForm(state, payload) {
      state.showPublicationForm = payload;
    }
  },
  actions: {
  },
  modules: {
  }
})
