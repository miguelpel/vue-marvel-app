<script setup lang="ts">
    const props = defineProps(['member'])
    const member = props.member;

    let thumbnailPath = "";

    if (member && member.thumbnail) {
        thumbnailPath = `${member?.thumbnail.path}/portrait_small.jpg`;
    }
</script>

<template>
    <div class="App_team_card">
        <img class="App_team_card_thumbnail" :src=thumbnailPath alt="" />
        <p>{{ member.name }}</p>
    </div>
</template>
