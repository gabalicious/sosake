<template>
  <header class="app-header">
    <b-container fluid :style="{padding: 0}">
      <b-navbar toggleable="lg" type="transparent" variant="transparent">
        <b-navbar-brand to="/">
          <img src="/images/logo/vector/default-monochrome.svg" alt />
        </b-navbar-brand>

        <b-navbar-toggle target="nav-collapse"></b-navbar-toggle>

        <b-collapse id="nav-collapse" is-nav>
          <b-navbar-nav>
            <b-nav-item to="/aboutus">About Us</b-nav-item>
            <b-nav-item to="/contactus">Contact Us</b-nav-item>
            <b-nav-item to="/order">Order Online</b-nav-item>
          </b-navbar-nav>

          <!-- Right aligned nav items -->
          <b-navbar-nav class="ml-auto">
            <b-nav-item>
              <b-button
                v-on:click="signIn()"
                class="my-2 my-sm-0"
                size="sm"
                variant="primary"
              >Sign In</b-button>
            </b-nav-item>
            <b-nav-item>
              <b-button
                v-on:click="register()"
                class="my-2 my-sm-0"
                size="sm"
                variant="secondary"
              >Register</b-button>
            </b-nav-item>
          </b-navbar-nav>
        </b-collapse>
      </b-navbar>
    </b-container>
  </header>
</template>

<script lang="ts">
import Vue from "vue";
let vm = Vue.component("app-header", {
  data: function () {
    return {};
  },
  methods: {
    signIn() {
      this.$router.push("/login");
    },
    register() {
      this.$router.push("/register");
    },
  },
});

export default vm;
</script>

<style lang="scss" scoped>
.app-header {
  position: absolute;
  width: 100%;
}
a {
  color: white;
}
img {
  height: 20px;
  width: fit-content;
}
</style>