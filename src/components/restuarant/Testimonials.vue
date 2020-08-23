<template>
  <section class="section section-position">
    <div class="container">
      <h1>Testimonials</h1>
      <div class="row justify-content-center">
        <div class="col-lg-4">
          <div class="row row-grid">
            <card class="border-0" shadow body-classes="py-5">
              <p>This place is beautiful, clean, and modern. I love the how it reminds me of Japan...</p>
            </card>
            <div class="row review">
              <div class="col-lg-4 col-6 col-md-2">
                <img src="/images/profiles/profile1.jpg" alt />
              </div>
              <div class="col-6 col-sm-5 col-md-4 col-lg-8">
                <p>
                  <span class="review-body">SOL C.</span>
                  <br />
                  <span class="review-body">10/11/2019</span>
                  <br />
                  <b-form-rating
                    :no-border="true"
                    :v-model="rating"
                    :value="rating"
                    color="gold"
                    class="mb-2"
                    inline
                    readonly
                  ></b-form-rating>
                </p>
              </div>
            </div>
          </div>
        </div>
        <div class="col-lg-4">
          <div class="row row-grid">
            <card class="border-0" shadow body-classes="py-5">
              <p>Great Japanse food. The love is REAL. The staff is nice. I order from SaSake everyday...</p>
            </card>
            <div class="row review">
              <div class="col-lg-4 col-6 col-md-2">
                <img src="/images/profiles/profile4.jpg" alt />
              </div>
              <div class="col-6 col-sm-5 col-md-4 col-lg-8">
                <p>
                  <span class="review-body">SOL C.</span>
                  <br />
                  <span class="review-body">10/11/2019</span>
                  <br />
                  <b-form-rating
                    :no-border="true"
                    :v-model="rating"
                    :value="rating"
                    color="gold"
                    class="mb-2"
                    inline
                    readonly
                  ></b-form-rating>
                </p>
              </div>
            </div>
          </div>
        </div>
        <div class="col-lg-4">
          <div class="row row-grid">
            <card class="border-0" shadow body-classes="py-5">
              <p>Food here is amazing. The Grilled Shrimp Special, Pow Salad, and Pow Sushi...</p>
            </card>
            <div class="row review">
              <div class="col-lg-4 col-6 col-md-2">
                <img src="/images/profiles/profile3.jpg" alt />
              </div>
              <div class="col-6 col-sm-5 col-md-4 col-lg-8">
                <p>
                  <span class="review-body">SOL C.</span>
                  <br />
                  <span class="review-body">10/11/2019</span>
                  <br />
                  <b-form-rating
                    :no-border="true"
                    :v-model="rating"
                    :value="rating"
                    color="gold"
                    class="mb-2"
                    inline
                    readonly
                  ></b-form-rating>
                </p>
              </div>
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

export default Vue.component("testimonials", {
  data: function () {
    return { rating: 4.5 };
  },
  components: {
    Card,
  },
});
</script>
<style lang="scss" scoped>
section.section {
  margin: 5em 0;
}
.card {
  background: linear-gradient(rgb(233, 82, 95), rgb(210, 100, 95));

  border: 1px solid white;
  color: white;
  width: 100%;
  margin: 1em;
  padding: 0.5em;
}
.review {
  width: 100%;
  display: flex;
  justify-content: space-between;

  margin: 0 1em;
  padding: 2rem 1.5rem;
  .col-lg-2,
  .col-3,
  .col-4,
  .col-lg-4 {
    padding: 0;
  }
}
.review-body {
  padding: 10px 15.5px;
}
h1 {
  text-align: center;
}
img {
  max-width: 100%;
  border-radius: 50%;
  width: 100px;
  height: 100px;
  object-fit: cover;
}
</style>
