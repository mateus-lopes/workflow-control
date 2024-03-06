<template>
  <!-- <main :class="settings.darkmode ? 'dark' : 'light'"> -->
  <main>
    <section class="z-10 fixed top-0 left-0 dark:bg-black w-screen h-screen flex justify-center items-center xl:pb-16">
      <div>
        <welcome-banner />
        <select-flow />
      </div>
      <help-comp />
      <footer-comp />
    </section>
  </main>
</template>

<script lang="ts">
import WelcomeBanner from './components/WelcomeBanner.vue';
import SelectFlow from './components/SelectFlow.vue';
import FooterComp from './components/FooterComp.vue';
import HelpComp from './components/HelpComp.vue';

export default {
  components: { WelcomeBanner, SelectFlow, FooterComp, HelpComp},
  name: 'App', 
  setup() {
    // const settings = useSetting();
    // const timer = useTimer();
    // return { settings, timer };
  }
};
</script>

<style>
body {
  overflow: hidden;
}
</style>