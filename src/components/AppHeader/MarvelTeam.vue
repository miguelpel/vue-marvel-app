<script setup lang="ts">
  import { useStore } from 'vuex';
  import TeamMember from './TeamMember.vue';
  import { computed } from 'vue';

  const store = useStore();

  const team = computed(() => {
    return store.getters.teamContent;
  });
</script>

<template>
  <div class="App_team_container">
      <div
        v-for="item in team"
        :key="item.id"
      >
        <TeamMember :member="item"/>
      </div>
  </div>
</template>