<template>
  <span class="main-container">
    <main class="main-inner-container">
      <app-header></app-header>

      <resume-footer></resume-footer>
    </main>
  </span>
</template>

<script lang="ts">
import Vue from "vue";
import AppHeader from "./AppHeader.vue";
import AppFooter from "./AppFooter.vue";

let vm = Vue.component("app-main", {
  computed: {},

  components: {
    child: {
      AppHeader,
      AppFooter,
    },
  },
  props: {
    resumeId: String,
  },
});

export default vm;
</script>

<style lang="scss" scoped>
main {
  margin-top: 25px;
}
.main-container {
  height: 100vh;
}
@media only screen {
  .main-inner-container::-webkit-scrollbar-thumb {
    background: linear-gradient(
      135deg,
      rgba(39, 55, 105, 0.5) 0%,
      rgba(223, 104, 25, 0.5) 65%,
      rgba(58, 142, 145, 0.5) 100%
    );
    border: 4px solid transparent;
    border-radius: 8px;
    background-clip: padding-box;
  }

  .main-inner-container::-webkit-scrollbar {
    width: 16px;
  }
  .main-inner-container {
    /* #4 AND INFINITY!!! (CSS3 only) */
    box-shadow: 0 0 0 3px rgba(206, 214, 238, 0.9),
      0 0 0 7px rgba(124, 124, 124, 0.9);
    background: white;
    width: 100%;
    padding-top: 30px;
    padding-right: 30px;
    padding-bottom: 30px;
    padding-left: 30px;

    max-height: calc(100vh - 15vh);
    overflow: overlay;
    border-radius: 20px;
    // -webkit-transform: scale(0.65);
    // transform: scale(0.65);
    // -webkit-transform-origin: 0 0;
    // transform-origin: 0 0;
  }
}
</style>