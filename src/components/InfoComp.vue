<template>
    <div>
        {{ settingStore }} 
        <br />
        <br />
        {{ timerStore.state.flow }}
        <br />
        <br />
    </div>
</template>

<script setup>
import { useSetting } from '../store/setting';
import { useTimer } from '../store/timer';

const settingStore = useSetting();
const timerStore = useTimer();

// console.log(settingStore)
console.log(timerStore)
</script>