<script setup lang="ts">
import type { ISyllable } from '@/common/types';
import Syllable from '@/components/Syllable.vue'
import { onMounted, ref } from 'vue';

let syllables: ISyllable[] = [
    { spelling: 'ka', symbol: 'か' },
    { spelling: 'tsi', symbol: 'し' },
    { spelling: 'a', symbol: 'し' },
    { spelling: 'su', symbol: 'す' },
    { spelling: 'i', symbol: 'い' }
]

const currentFocus = ref(0);
const sylList: any = ref([]);

function passFocus(): void {
    currentFocus.value++;
    if (currentFocus.value < sylList.value.length) {
        sylList.value[currentFocus.value].focus();
    }
}

onMounted((): void => {
    console.log('[onMounted]', sylList.value.length);
    sylList.value[0].focus()
});
</script>

<template>
    <div
        class="typearea"
    >
        <Syllable
            v-for="(syllable, index) in syllables"
            v-bind:ref="(a) => { console.log('for', a); if (a) sylList[index] = a }"
            v-bind:syllable="syllable"
            v-bind:key="index"
            v-on:on-completed="passFocus"
        />
    </div>
</template>

<style scoped>
.typearea {
    display: flex;
    flex-direction: row;
    justify-content: center;
}
</style>