<script setup lang="ts">
import { ref, type Ref } from 'vue';
import type { Syllable } from '@/common/types';
import Inscription from '@/components/Inscription.vue';

const emit = defineEmits(['onCompleted']);

const props = defineProps<{
    syllable: Syllable
}>();

let status: Ref<string> = ref('empty');
</script>

<template>
    <div class="syllable">
        <Inscription
            class="letter"
            v-bind:spelling="props.syllable.spelling"
            v-on:on-completed="(style: string) => { status = style; emit('onCompleted') }"
        />
        <div
            class="symbol"
            v-bind:class="status"
        >
            {{ props.syllable.symbol }}
        </div>
    </div>
</template>

<style scoped>
.syllable {
    display: flex;
    flex-direction: column;
    align-items: center;
}

.letter {
    font-size: 20px;
}

.symbol {
    display: flex;
    font-size: 40px;
    font-weight: bold;
}
</style>

<style>
@import '@/assets/base.css'
</style>