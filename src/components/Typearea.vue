<script setup lang="ts">
import type { ISyllable } from '@/common/types';
import Syllable from '@/components/Syllable.vue'
import { onMounted, ref, type Ref } from 'vue';

let syllables: ISyllable[] = [
    { spelling: 'ga', symbol: 'が' },
    { spelling: 'su', symbol: 'す' },
    { spelling: 'ki', symbol: 'き' },
    { spelling: 'de', symbol: 'で' },
    { spelling: 'su', symbol: 'す' },
    { spelling: 'ka', symbol: 'か' },
    { spelling: 'ka', symbol: 'か' },
    { spelling: 'tsi', symbol: 'し' },
    { spelling: 'a', symbol: 'し' },
    { spelling: 'su', symbol: 'す' },
    { spelling: 'i', symbol: 'い' }
];

const currentFocus: Ref<number> = ref(0);
const syllableList: any /* Ref<InstanceType<typeof Syllable>[]> */ = ref([]); // no idea how to properly type it

function passFocus(): void {
    currentFocus.value++;
    if (currentFocus.value < syllableList.value.length) {
        syllableList.value[currentFocus.value].focus();
    }
}

onMounted((): void => {
    syllableList.value[0].focus();
});
</script>

<template>
    <div
        class="typearea"
    >
        <Syllable
            v-for="(syllable, index) in syllables"
            v-bind:ref="(syllableRef): void => { if (syllableRef) syllableList[index] = syllableRef }"
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