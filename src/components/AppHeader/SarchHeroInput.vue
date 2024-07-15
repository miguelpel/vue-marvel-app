<script setup lang="ts">
import { ref } from 'vue';
import md5 from 'md5';
import axios from 'axios';
import { useStore } from 'vuex';

    const store = useStore();

    const message = ref('');
    const publicKey = "f69c9fb63b5f00d91f2d4dd8c2497cf2";
    const privateKey = "5f47b3a18a189bbeaa489839e90ac9678c6d9055";

    const baseUrl = "https://gateway.marvel.com:443/v1/public/characters";
   
    const updateText = (event: any) => {
      message.value = event.target.value;
      if (message.value.length >= 3) {
        store.commit('SET_LOADING', true);
        callApi(message.value);
      } else {
        store.commit('ADD_HEROES', []);
      }
    };

    const callApi = (txt: string) => {
      const query = `?&nameStartsWith=${txt}&limit=${100}&offset=${1}`;
      const timestamp = new Date().getTime();
      const hash = md5(timestamp + (privateKey ? privateKey : "") + publicKey);
      const authHash = `&ts=${timestamp}&apikey=${publicKey}&hash=${hash}`;
      const urlHash = `${baseUrl}${query}${authHash}`;

      axios.get(urlHash)
      .then(function (response: any) {
        const results = response.data.data.results;
        store.commit('ADD_HEROES', results);
        store.commit('SET_LOADING', false);
      })
        .catch(function (error: any) {
        // handle error
        console.log(error);
      })
        .finally(function () {
        // always executed
      });
    };
</script>

<template>
  <div>
    <input
      placeholder="Edit me"
      :value="message"
      @input="updateText"
    />
  </div>
</template>../temp