<template>
    <main class="w-full h-full" :style="pageStyle">
        <title-timer />
        <timer-comp />
        <timer-controls />
        <info-comp />
        <btn-close />
    </main>
</template>


<script lang="ts" setup>
import { ref, watch, computed } from 'vue';
import { useSetting } from '@/store/setting';
import { useTimer } from '../store/timer';
import TimerControls from './TimerControls.vue'
import TitleTimer from './TitleTimer.vue'
import BtnClose from './BtnClose.vue'

const settingStore = useSetting();
const { state } = useTimer();

const pageStyle = computed(() => {
    return {
        color: settingStore.darkmode ? state.flow.styles.darkColor : state.flow.styles.lightColor,
        background: settingStore.darkmode ? state.flow.styles.darkBackground : state.flow.styles.lightBackground,
    }
})
</script>
