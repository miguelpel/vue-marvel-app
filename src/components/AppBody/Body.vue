<script setup lang="ts">
  import { useStore } from 'vuex';
  import HeroCard from './HeroCard.vue';
  import { computed } from 'vue';

  const store = useStore();
 
  const storeitems = computed(() => {
    return store.getters.heroes;
  });

  const isLoading = computed(() => {
    return store.getters.loading;
  });
</script>

<template>
  <div class="App_body">
    <div v-if="isLoading">
      <h1>
        Loading
      </h1>
    </div>
    <div v-else>
      <div v-for="item in storeitems">
        <HeroCard :hero="item" />
      </div>
    </div>
  </div>
</template>
