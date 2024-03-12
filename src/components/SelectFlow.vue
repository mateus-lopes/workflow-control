<template>
    <div class="text-center">
      <h3 class="text-gray-300 text-2xl mt-11 mb-6 font-semibold">Select the flow</h3>
      <info-comp />
      <div class="flex flex-col md:flex-row justify-center items-center gap-8">
        <select-option
          v-for="(option, index) in flowOptions"
          :key="index"
          @click="addNewFlow(option as Flow)"
          :title="option.title"
          :styles="option.styles"
        />
      </div>
    </div>
</template>
  
<script lang="ts" setup>
import SelectOption from './SelectOption.vue'
import { flowOptions } from '../utils/options'
import { useSetting } from '../store/setting';
import { useTimer } from '../store/timer';
import { Flow } from '@/types/Flow';

const settingStore = useSetting();
const timerStore = useTimer();

const addNewFlow = (option: Flow) => {
  settingStore.startFlow()
  console.log(option)
  timerStore.setFlow(option)
}
</script>