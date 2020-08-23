<template>
  <div :style="cssVars">
    <div class="position-relative">
      <!-- shape Hero -->
      <section class="background">
        <div class="flex-center">
          <!-- <h1 class="text-white">Order Page</h1> -->
        </div>
      </section>
      <!-- 1st Hero Variation -->
    </div>
    <section class="section section-lg spacer">
      <div class="container">
        <div class="row justify-content-center">
          <div class="col-lg-12">
            <h2>Under Construction...</h2>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<script>
import BG1LG from "/images/bg.jpg";
import BG1MD from "/images/bg-md.jpg";
import BG1SM from "/images/bg-sm.jpg";

import BG2 from "/images/bg-2.jpg";
import BG2MD from "/images/bg-2-md.jpg";
import BG2SM from "/images/bg-2-sm.jpg";

export default {
  name: "order",
  components: {},
  computed: {
    cssVars() {
      return {
        "--bg-url1-lg": `url(${BG1LG})`,
        "--bg-url1-md": `url(${BG1MD})`,
        "--bg-url1-sm": `url(${BG1SM})`,
        "--bg-url2-xl": `url(${BG2})`,
        "--bg-url2-md": `url(${BG2MD})`,
        "--bg-url2-sm": `url(${BG2SM})`,
      };
    },
  },
  data: function () {
    return {};
  },
};
</script>
<style scoped lang="scss">
.background {
  height: 4em;
  width: 100%;
  z-index: 1;
  position: relative;
  -webkit-background-size: cover;
  -moz-background-size: cover;
  -o-background-size: cover;
  background-size: cover;
  // background-image: linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)),
  //   var(--bg-url2-sm);
  background: black;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-wrap: wrap;
  .slogan {
    color: white;
    font-size: 1.5em;
    margin-bottom: 2.25em;
  }
  .flex-center {
    display: flex;
    justify-content: center;
    align-items: center;
    flex-wrap: wrap;

    width: 500px;
  }
}
.spacer {
  height: calc(100vh - (299px + 63px + 80px));
}
</style>
