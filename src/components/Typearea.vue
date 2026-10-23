<script setup lang="ts">
import type { ISyllable } from '@/common/types';
import Syllable from '@/components/Syllable.vue'
import { nextTick, onMounted, ref, type Ref } from 'vue';
import { generateQuiz } from '@/common/quiz';

const syllables: Ref<ISyllable[]> = ref(generateQuiz());
const currentFocus: Ref<number> = ref(0);
const syllablesRef: Ref<any[]> = ref([]);
/*
 * why is there some iter and why is there this nextTick call?
 * vue will not create new instances of components (Syllables)
 * when passFocus is called, because it keeps same v-bind:key
 * due to how vue handles component updates
 * the purpose of this iter is to make those keys unique for
 * each quiz
 * nextTick call helps to not lose focus due to v-for being
 * re-rendered
*/
const iter = ref(1);

function isAtEnd(): boolean {
    return currentFocus.value < syllablesRef.value.length;
}

function passFocus(): void {
    currentFocus.value++;

    if (isAtEnd()) {
        syllablesRef.value[currentFocus.value].focus();
    } else {
        iter.value += syllables.value.length;

        nextTick(() => {
            currentFocus.value = 0;
            syllables.value = generateQuiz();
            syllablesRef.value[0].focus();
        });
    }
}

onMounted((): void => {
    syllablesRef.value[0].focus();
});
</script>

<template>
    <div class="typearea">
        <Syllable
            v-for="(syllable, index) in syllables"
            :ref="el => syllablesRef[index] = el"
            v-bind:syllable="syllable"
            v-bind:key="index + iter"
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