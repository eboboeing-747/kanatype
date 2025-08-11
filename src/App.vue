<script setup lang="ts">
import Typearea from '@/components/Typearea.vue';
import Syllable from './components/Syllable.vue';
import { ref } from 'vue';
import { onMounted } from 'vue';

const syl: any = ref(null);

console.log(syl);

onMounted(() => {
    console.log('[App] mounting syllable');
/*     syl.value.focus(); */
})
</script>

<template>
    <Typearea
    />
<!--     <Syllable
        ref="syl"
        v-bind:syllable="{ spelling: 'ka', symbol: 'か' }"
        v-on:on-completed="console.log('next')"
    /> -->
</template>

<style scoped>
</style>
