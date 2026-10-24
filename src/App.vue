<script setup lang="ts">
import Typearea from '@/components/Typearea.vue';
import { ref, type Ref } from 'vue';

/*
 * why is there this iter?
 * vue will not create new instances of components (Syllables)
 * when passFocus is called, because it keeps same v-bind:key
 * and due to how vue handles component updates it will not
 * re-generate
 * the purpose of this iter is to make typearea re-instantiate
 * and re-generate quiz array
*/
const iter: Ref<number> = ref(0);
</script>

<template>
    <Typearea ref="typearea" :key="iter" v-on:on-completed="iter++"/>
</template>

<style scoped>
</style>
