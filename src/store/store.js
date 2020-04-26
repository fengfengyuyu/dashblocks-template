import Vue from 'vue';
import Vuex from 'vuex';
import layout from './modules/layout';
Vue.use(Vuex);

export default new Vuex.Store({
  state: {},
  modules: {
    layout
  },
  mutations: {
    SET_DB_SPEC(state, { spec }) {
      state.dashboardSpec = spec;
    }
  },
  actions: {
    setDashboardSpec({ commit }, { spec }) {
      commit('SET_DB_SPEC', { spec: spec });
    }
  }
});
