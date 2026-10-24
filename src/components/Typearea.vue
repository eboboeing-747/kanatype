<script setup lang="ts">
import type { ISyllable } from '@/common/types';
import Syllable from '@/components/Syllable.vue'
import { onMounted, ref, type Ref } from 'vue';
import { generateQuiz } from '@/common/quiz';
import { isTyping } from '@/common/options';

const syllables: Ref<ISyllable[]> = ref(generateQuiz());
const currentFocus: Ref<number> = ref(0);
const syllablesRef: Ref<any[]> = ref([]);

function isAtEnd(): boolean {
    return currentFocus.value >= syllables.value.length;
}

function passFocus(): void {
    currentFocus.value++;

    if (isAtEnd()) {
        isTyping.value = false;
        reGenerate();
    } else {
        syllablesRef.value[currentFocus.value].focus();
        isTyping.value = true;
    }
}

const emit = defineEmits(['onCompleted'])

function reGenerate() {
    emit('onCompleted');
}

onMounted((): void => {
    syllablesRef.value[0].focus();
});
</script>

<template>
    <div class="typearea">
        <Syllable
            v-for="(syllable, index) in syllables"
            ref="syllablesRef"
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