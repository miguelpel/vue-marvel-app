<script setup lang="ts">
    import { useStore } from 'vuex';
    const store = useStore();

    const props = defineProps(['hero'])
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
