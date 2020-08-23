<template>
  <div id="app">
    <router-view name="header"></router-view>
    <main>
      <fade-transition origin="center" mode="out-in" :duration="250">
        <router-view />
      </fade-transition>
    </main>
    <router-view name="footer"></router-view>
  </div>
</template>

<script lang="ts">
import Vue from "vue";

import AppMain from "./components/AppMain.vue";
import { FadeTransition } from "vue2-transitions";

export default Vue.extend({
  components: {
    AppMain,
    FadeTransition,
  },
});
</script>

<style lang="scss" scoped>
</style>