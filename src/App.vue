<template>
  <router-view></router-view>
</template>

<script lang="ts">
import Vue from "vue";

import AppMain from "./components/AppMain.vue";

export default Vue.extend({
  components: {
    child: {
      AppMain,
    },
  },
});
</script>

<style lang="scss" scoped>
</style>