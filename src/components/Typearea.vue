<script setup lang="ts">
import type { ISyllable } from '@/common/types';
import Syllable from '@/components/Syllable.vue'
import { onMounted, ref, type Ref } from 'vue';
import { generateQuiz } from '@/common/quiz';

const currentFocus: Ref<number> = ref(0);
const syllableList: any /* Ref<InstanceType<typeof Syllable>[]> */ = ref([]); // no idea how to properly type it

function passFocus(): void {
    currentFocus.value++;
    if (currentFocus.value < syllableList.value.length) {
        syllableList.value[currentFocus.value].focus();
    }
    else {
        syllables.value = generateQuiz();
        currentFocus.value = 0;

        for (let i: number = 0; i < syllableList.value.length; i++) {
            syllableList.value[i].clear();
        }

        syllableList.value[0].focus();
    }
}

onMounted((): void => {
    syllableList.value[0].focus();
});

let syllables: Ref<ISyllable[]> = ref(generateQuiz());
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