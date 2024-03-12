<template>
  <main :class="settings.darkmode ? 'dark' : 'light'">
    <section class="dark:bg-black w-screen h-screen flex justify-center items-center xl:pb-16">
      <div>
        <welcome-banner />
        <select-flow />
      </div>
      <help-comp />
      <footer-comp />
    </section>
    <section class="absolute top-0 left-0 w-screen h-screen" :class="settings.isThereFlow ? 'block' : 'hidden'">
      <flow-comp />
    </section>
  </main>
</template>

<script lang="ts" setup>
import WelcomeBanner from './components/WelcomeBanner.vue';
import SelectFlow from './components/SelectFlow.vue';
import FooterComp from './components/FooterComp.vue';
import HelpComp from './components/HelpComp.vue';
import FlowComp from './components/FlowComp.vue';
import { useSetting } from './store/setting';

const settings = useSetting();
</script>

<style>
body {
  overflow: hidden;
}
</style>