<script setup lang="ts">
import { ref, type Ref } from 'vue'

const emit = defineEmits(['onCompleted']);

const props = defineProps<{
    spelling: string
}>();

function isAlpha (char: string): boolean {
    return /^[A-Z]$/i.test(char);
}

const input: Ref<string[]> = ref([]);

function isCompleted(): boolean {
    if (props.spelling.length !== input.value.length)
        return false;

    for (let i: number = 0; i < props.spelling.length; i++) {
        if (props.spelling[i] !== input.value[i])
            return false;
    }

    return true;
}

function updateInput(event: KeyboardEvent): void {
    if (event.key === "Enter")
        unfocus('incorrect');

    if (event.key === "Backspace") {
        input.value.pop();
        return;
    }

    if (!isAlpha(event.key))
        return;

    if (input.value.length >= props.spelling.length)
        return;

    input.value.push(event.key);

    if (isCompleted())
        unfocus('correct');
}

function isCorrect(letter: string, index: number): string {
    if (index > input.value.length - 1)
        return 'empty';

    if (input.value[index] === letter)
        return 'correct';
    else
        return 'incorrect';
}

function unfocus(style: string): void {
    window.removeEventListener('keydown', updateInput);
    emit('onCompleted', style);
}

function focus(): void {
    window.addEventListener('keydown', updateInput);
}

defineExpose({
    focus
});
</script>

<template>
    <div class="text">
        <div
            v-for="(letter, index) in props.spelling"
            v-bind:class="isCorrect(letter, index)"
        >
            {{ letter }}
        </div>
    </div>
</template>

<style scoped>
.text {
    display: flex;
    flex-direction: row;
}
</style>

<style>
@import '@/assets/base.css'
</style>