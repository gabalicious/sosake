<template>
  <section class="section section-lg section-position">
    <div class="container">
      <div class="row justify-content-center">
        <div class="col-lg-7">
          <div class="row row-grid">
            <img class="img-fluid" :src="IMG" alt />
          </div>
        </div>
        <div class="col-lg-5">
          <div class="row row-grid">
            <h3>
              The
              <span class="text-danger">BEST</span>
              Sushi spot
              <!-- <span class="text-secondary">SoSaku</span> -->
            </h3>
            <p>Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Vestibulum tortor quam, feugiat vitae, ultricies eget, tempor sit amet, ante. Donec eu libero sit amet quam egestas semper. Aenean ultricies mi vitae est. Mauris placerat eleifend leo. Quisque sit amet est et sapien ullamcorper pharetra. Vestibulum erat wisi, condimentum sed, commodo vitae, ornare sit amet, wisi. Aenean fermentum, elit eget tincidunt condimentum, eros ipsum rutrum orci.</p>
            <div class="button-right">
              <router-link
                to="/aboutus"
                slot="title"
                href="#"
                class="btn btn-secondary"
                role="button"
              >About Us</router-link>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>
<script>
import Vue from "vue";
import IMG from "/images/bg.jpg";
export default Vue.component("aboutus-short", {
  data: function () {
    return { IMG };
  },
});
</script>
<style lang="scss" scoped>
section.section {
  margin: 5em 0;
}
.section-position {
  // position: relative;
  // top: 5em;
  // z-index: 1;
  padding-top: 0;
}
img {
  align-self: flex-start;
}
.row-grid {
  padding: 1.2em;
}
.button-right {
  display: flex;
  width: 100%;
}
</style>
