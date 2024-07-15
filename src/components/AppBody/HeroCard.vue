<script setup lang="ts">
    import {PropType} from 'vue'
    import { useStore } from 'vuex';
    import type { HeroType } from '../types/heroes.ts';
    const store = useStore();

    const props = defineProps({
        hero: {
            type: Object as PropType<HeroType>,
            required: true
        }
    })
    const hero = props.hero;

    let thumbnailPath = "";

    if (hero && hero.thumbnail) {
        thumbnailPath = `${hero?.thumbnail.path}/portrait_medium.jpg`;
    }

    const addHeroToTeam = () => {
        console.log('HERE addHeroToTeam');
        store.commit('ADD_HERO_TO_TEAM', hero);
    }

    console.log(hero)

</script>

<template>
    <div class="App_hero_card">
        <img class="App_hero_card_thumbnail" :src=thumbnailPath alt="" />
        <div class="App_hero_card_infos">
            <h4>{{ hero.name }}</h4>
            <p>{{ hero.description }}</p>
            <button @click="addHeroToTeam">
                Add to Team
            </button>
        </div>
    </div>
</template>
