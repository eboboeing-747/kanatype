<script setup lang="ts">
import { ref, useTemplateRef, type Ref } from 'vue';
import type { ISyllable } from '@/common/types';
import Inscription from '@/components/Inscription.vue';

const emit = defineEmits(['onCompleted']);

const props = defineProps<{
    syllable: ISyllable
}>();

let status: Ref<string> = ref('empty');

const ins: any = ref(null);

function focus() {
    console.log('[Syllable] focused');
    if (ins.value)
        ins.value.focus();
    else
        console.log('[Syllable] ins.value is null');
}

defineExpose({
    focus
});

focus();
</script>

<template>
    <div class="syllable">
        <Inscription
            ref="ins"
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