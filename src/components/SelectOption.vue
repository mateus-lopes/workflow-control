<template>
    <div :style="{ background: background, color: color }" class="cursor-pointer w-44 h-16 md:w-44 md:h-44 rounded-3xl flex items-center justify-center uppercase text-xl font-medium option hover:border-2 border-black duration-0 transition-all">
        {{ title }}
    </div>
</template>
<script lang="ts">
export default {
    props: {
        title: String,
        background: {
            type: String,
            default: '#e3e3e3', 
        },
        color: String
    }
}
</script>