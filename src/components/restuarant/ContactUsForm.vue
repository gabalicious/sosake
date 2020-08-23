<template>
  <section class="section bg-white">
    <div class="container">
      <div class="row justify-content-center">
        <div class="col-lg-12">
          <div class="row row-grid">
            <div class="col col-lg-6">
              <card class="border-0" shadow body-classes="py-5">
                <h6 class="text-dark text-uppercase">Contact Us</h6>
                <p
                  class="description mt-3"
                >SoSake is a great Japanese restuarant. We hope to brighten your day with our delicious food.</p>
                <form>
                  <label for="range-2">Name</label>
                  <b-form-input class placeholder="Name"></b-form-input>
                  <label for="range-2">Phone #</label>
                  <b-form-input class placeholder="Phone #"></b-form-input>
                  <label for="range-2">Email</label>
                  <b-form-input class placeholder="Email"></b-form-input>
                  <label for="range-2">Inquiry</label>

                  <textarea
                    class="form-control"
                    id="exampleFormControlTextarea1"
                    rows="3"
                    placeholder="Inquiry ..."
                  ></textarea>
                  <br />
                  <div>
                    <button class="btn btn-danger">Submit</button>
                  </div>
                </form>
              </card>
            </div>
            <div class="col col-lg-6">
              <card class="border-0" shadow body-classes="py-5">
                <h6 class="text-dark text-uppercase">Info</h6>
                <p class="description mt-3">Phone number: +1-555-123-4567</p>
                <p class="description mt-3">Address: 123 All Right DR. Brooklyn, NY 11234</p>
                <img src="/images/maps-placeholder.png" alt />
              </card>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>
<script>
import Vue from "vue";
import Card from "/components/Card.vue";

export default Vue.component("contactus-form", {
  components: {
    Card,
  },
});
</script>
<style lang="scss" scoped>
label {
  margin: 0.75rem 0rem 0rem 0.25rem;
}
img {
  max-width: 100%;
  max-width: -moz-available; /* WebKit-based browsers will ignore this. */
  max-width: -webkit-fill-available; /* Mozilla-based browsers will ignore this. */
  max-width: fill-available;
}
.row {
  display: flex;
  flex-flow: row wrap;
}
.col {
  display: flex;
  flex: 1 0 400px;
  flex-flow: column;
}
.card {
  display: flex;
  align-items: stretch;
  flex-direction: column;
  flex-grow: 1;
}
</style>
