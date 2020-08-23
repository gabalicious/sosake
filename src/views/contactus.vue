<template>
  <div :style="cssVars">
    <div class="position-relative">
      <!-- shape Hero -->
      <section class="background">
        <div class="flex-center">
          <h1 class="text-white">Contact Us</h1>
        </div>
      </section>
      <!-- 1st Hero Variation -->
      <contactus-form></contactus-form>
    </div>
  </div>
</template>

<script>
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

import ContactUsForm from "/components/restuarant/ContactUsForm.vue";

export default {
  name: "contactus",
  components: { child: { ContactUsForm } },
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
};
</script>
<style scoped lang="scss">
.background {
  height: 50vh;
  width: 100%;
  z-index: 1;
  position: relative;
  -webkit-background-size: cover;
  -moz-background-size: cover;
  -o-background-size: cover;
  background-size: cover;
  background-image: linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)),
    var(--bg-url2-sm);
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
</style>
