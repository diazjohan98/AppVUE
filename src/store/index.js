import { createStore } from "vuex";

export default createStore({
  state: {
    characters: [],
    characterFilter: [],
  },
  mutations: {
    setCharacters(state, payload) {
      state.characters = payload;
    },
    setCharacterFilter(state, payload) {
      state.characterFilter = payload;
    },
  },
  actions: {
    async getCharacters({ commit }) {
      try {
        const response = await fetch(
          "https://rickandmortyapi.com/api/character"
        );
        const data = await response.json();
        commit("setCharacters", data.results);
        commit("setCharacterFilter", data.results);
      } catch (error) {
        console.error(error);
      }
    },
  },
  modules: {},
});
