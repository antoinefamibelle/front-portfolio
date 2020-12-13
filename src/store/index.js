import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    isLogged: false,
    userToken: '',
    user: {
      bio: '',
      githubUsername: '',
      website: '',
      livingCity: '',
      workingCity: ''
    },
    numberOfWidget: 0,
  },
  mutations: {
    login (state, payload){
      state.userToken = payload;
      return state.isLogged = true;
    },
    logout (state){
      state.userToken = '';
      return state.isLogged = false;
    },
    setUserToken(state, payload) {
      return state.userToken = payload;
    },
    setWidget (state, payload) {
      return state.WidgetSelected = payload;
    },
    setNumberWidget (state, payload) {
      return state.numberOfWidget = payload;
    },
    setEmail(state, payload) {
      return state.user.email = payload;
    },
    setLocation(state, payload) {
      return state.user.location = payload;
    },
    setBio(state, payload) {
      return state.user.bio = payload;
    },
    setGithubUsername(state, payload) {
      return state.user.githubUsername = payload;
    },
    setWebsite(state, payload) {
      return state.user.website = payload;
    },
    setLivingCity(state, payload) {
      return state.user.livingCity = payload;
    },
    setWorkingCity(state, payload) {
      return state.user.workingCity = payload;
    }

  },
  actions: {
    login (context, payload) {
      context.commit('login', payload);
    },
    logout (context) {
      context.commit('logout');
    },
    setUserToken (context, payload) {
      context.commit('setUserToken', payload);
    },
    setNumberWidget (context, payload) {
      context.commit('setNumberWidget', payload);
    },
    setEmail (context, payload) {
      context.commit('setEmail', payload);
    },
    setLocation (context, payload) {
      context.commit('setLocation', payload);
    },
    setBio (context, payload) {
      context.commit('setBio', payload);
    },
    setGithubUsername (context, payload) {
      context.commit('setGithubUsername', payload);
    },
    setWebsite (context, payload) {
      context.commit('setWebsite', payload);
    },
    setLivingCity (context, payload) {
      context.commit('setLivingCity', payload);
    },
    setWorkingCity (context, payload) {
      context.commit('setWorkingCity', payload);
    }
  },
})
