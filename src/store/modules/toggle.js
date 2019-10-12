export default {
  state: {
    company_data_modal: false
  },
  mutations: {
    toggle (state, toggle_type) {
      state[toggle_type] = !state[toggle_type]
    }
  },
  actions: {
    toggle (context, toggle_type) {
      context.commit('toggle', toggle_type)
    }
  }
}