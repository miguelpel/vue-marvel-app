import * as Vue from 'vue';
import { createStore } from 'vuex';
import './style.css';
import App from './App.vue';

const store = createStore({
  state () {
     return {
      heroes: [],
      teamContent: [],
      loading: false,
    }
  },
  mutations: {
    ADD_HEROES: (state: any, heroes: any) => {
      const totalLength = state.heroes.length;

      if (totalLength > 0) {
        for (let i = 0; i <= totalLength; i++) {
          state.heroes.pop()
        }
      }

      for (let i = 0; i < heroes.length; i++) {
        const hero = heroes[i];
        state.heroes.push(hero);
      }
    },
    SET_LOADING: (state: any, targetBool: any) => {
      state.loading = targetBool;
    },
    ADD_HERO_TO_TEAM: (state: any, hero: any) => {
      state.teamContent.push(hero);
    },
    REMOVE_HERO_FROM_TEAM: (state: any, id: number) => {
      const index = state.teamContent.findIndex((hero: any) => {
        return hero.id === id
      })
      if (index > -1) { // only splice array when item is found
        state.teamContent.splice(index, 1); // 2nd parameter means remove one item only
      }
    },
  },
  getters: {
    heroes (state: any) {
      return state.heroes;
    },
    loading (state: any) {
      return state.loading;
    },
    teamContent (state: any) {
      return state.teamContent;
    },
  }
});

const app = Vue.createApp(App);

// Install the store instance as a plugin
app.use(store);

app.mount('#app');