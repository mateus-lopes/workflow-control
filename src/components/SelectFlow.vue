<template>
    <div class="text-center">
        <h3 class="text-gray-300 text-2xl mt-11 mb-6 font-semibold">Select the flow</h3>
        <div class="flex flex-col md:flex-row justify-center items-center gap-8">
            <select-option @click="initNewTimer('fast')" title="fast" background="#8CE8A1" color="0F2C15" />
            <select-option @click="initNewTimer('regular')" title="regular" background="#FFD88B" color="2C260F" />
            <select-option @click="initNewTimer('intense')" title="intense" background="#FF7C7C" color="310E0E" />
        </div>
    </div>
</template>
<script lang="ts">
import SelectOption from './SelectOption.vue'
import { useSetting } from '../store/setting';
import { useTimer } from '../store/timer';

export default {
    components: { SelectOption },
    setup() {
        const settingStore = useSetting();
        const timerStore = useTimer();

        const initNewTimer = (flow: string) => {
            if(timerStore.timerType === flow) return
            settingStore.startFlow()
            timerStore.changeTimerType(flow)
        }

        return { settingStore, initNewTimer };
    },
}
</script>