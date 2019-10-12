export default {
  state: {
    notes_content: ''
  },
  mutations: {
    addNotes(state, content) {
      state.notes_content = content;
    }
  },
  actions: {
    addNotes({commit}, content) {
      commit('addNotes', content);
    }
  }
}