<template>
    <div :style="{
        background: styles?.btnBackground ?? '#e3e3e3',
        color: styles?.btnColor ?? '#000'
    }" class="dark:text cursor-pointer w-44 h-16 md:w-44 md:h-44 rounded-3xl flex items-center justify-center uppercase text-xl font-medium option hover:border-2 border-black duration-0 transition-all">
        {{ title }}
    </div>
</template>
<script lang="ts">
export default {
    props: {
        title: String,
        styles: Object
    }
}
</script>