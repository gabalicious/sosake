<template>
  <div :style="cssVars">
    <app-header></app-header>
    <div class="full-height">
      <b-container>
        <b-row>
          <b-col xl="2"></b-col>
          <b-col xl="8">
            <div class="cover-container">
              <img src="/images/logo-4/vector/default-monochrome-white.svg" alt />
              <p class="lead">Great Sushi and Japanese Cuisine.</p>
              <p class="lead">
                <b-button to="/order" size="lg" variant="danger">Order Now</b-button>
              </p>
            </div>
          </b-col>
          <b-col xl="2"></b-col>
        </b-row>
      </b-container>
    </div>
    <aboutus-short></aboutus-short>
    <testimonials></testimonials>
    <app-footer></app-footer>
  </div>
</template>

<script lang="ts">
import Vue from "vue";
import AppHeader from "../components/AppHeader.vue";
import AboutUsShort from "../components/restuarant/AboutUsShort.vue";

import Testimonials from "../components/restuarant/Testimonials.vue";

import BG1 from "/images/bg.jpg";
import BG1MD from "/images/bg-md.jpg";
import BG1SM from "/images/bg-sm.jpg";

import BG2 from "/images/bg-2.jpg";
import BG2MD from "/images/bg-2-md.jpg";
import BG2SM from "/images/bg-2-sm.jpg";
import BG3 from "/images/bg3.jpg";
import BG4 from "/images/bg4.jpg";
import BG5 from "/images/bg5.jpg";
import BG6 from "/images/bg6.jpg";

let vm = Vue.component("login-view", {
  components: {
    AppHeader,
    Testimonials,
    AboutUsShort,
  },
  computed: {
    cssVars() {
      return {
        "--bg-url1-xl": `url(${BG1})`,
        "--bg-url1-md": `url(${BG1MD})`,
        "--bg-url1-sm": `url(${BG1SM})`,
        "--bg-url2-xl": `url(${BG2})`,
        "--bg-url2-md": `url(${BG2MD})`,
        "--bg-url2-sm": `url(${BG2SM})`,
        "--bg-url3-xl": `url(${BG3})`,
        "--bg-url4-xl": `url(${BG4})`,
        "--bg-url5-xl": `url(${BG5})`,
        "--bg-url6-xl": `url(${BG6})`,
      };
    },
  },
  data: function () {
    return {};
  },
});

export default vm;
</script>

<style lang="scss" scoped>
.full-height {
  height: calc(100vh);
  justify-content: center;
  align-items: center;
  display: flex;
  flex-wrap: wrap;
  background: linear-gradient(rgba(7, 7, 7, 0.5), rgba(7, 7, 7, 0.5)),
    var(--bg-url3-xl) no-repeat center center;
  -webkit-background-size: cover;
  -moz-background-size: cover;
  -o-background-size: cover;
  background-size: cover;
}
.cover-heading {
  color: white;
  text-shadow: 2px 2px 4px #000000;
}
.lead {
  color: white;
  text-shadow: 2px 2px 4px #000000;
  display: flex;
  justify-content: center;
  margin: 2em 0;
}
.cover-container {
  // background: #dc3546d3;
  padding: 1.75rem;
  // margin-bottom: 33%;
  border-radius: 5px;
  img {
    filter: brightness(55%);
  }
}
</style>