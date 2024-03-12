<template>
    <div class="fixed top-0 right-0 p-8 cursor-pointer" @click="stopFlow()">
        <svg xmlns="http://www.w3.org/2000/svg" width="44" height="44" viewBox="0 0 44 44" fill="none">
            <path d="M35.3546 33.3951C35.6128 33.6558 35.7577 34.0079 35.7577 34.3748C35.7577 34.7417 35.6128 35.0938 35.3546 35.3545C35.0918 35.6086 34.7405 35.7507 34.3749 35.7507C34.0093 35.7507 33.658 35.6086 33.3952 35.3545L21.9999 23.942L10.6046 35.3545C10.3418 35.6086 9.99051 35.7507 9.62492 35.7507C9.25933 35.7507 8.90805 35.6086 8.64523 35.3545C8.38703 35.0938 8.24219 34.7417 8.24219 34.3748C8.24219 34.0079 8.38703 33.6558 8.64523 33.3951L20.0577 21.9998L8.64523 10.6045C8.42597 10.3374 8.31392 9.99819 8.33088 9.653C8.34783 9.3078 8.49258 8.98125 8.73696 8.73686C8.98135 8.49248 9.3079 8.34773 9.65309 8.33078C9.99829 8.31382 10.3375 8.42588 10.6046 8.64514L21.9999 20.0576L33.3952 8.64514C33.6624 8.42588 34.0015 8.31382 34.3467 8.33078C34.6919 8.34773 35.0185 8.49248 35.2629 8.73686C35.5073 8.98125 35.652 9.3078 35.669 9.653C35.6859 9.99819 35.5739 10.3374 35.3546 10.6045L23.9421 21.9998L35.3546 33.3951Z" :fill="settingStore.darkmode ? state.flow.styles.darkColor : state.flow.styles.lightColor" />
        </svg>
    </div>
</template>
<script lang="ts" setup>
import { useSetting } from "@/store/setting";
import { useTimer } from "@/store/timer";
import { ref } from "vue";

const settingStore = useSetting();
const { state } = useTimer();
const animateClose = ref(false)

const stopFlow = () => {
    animateClose.value = true
    settingStore.stopFlow()
}

</script>