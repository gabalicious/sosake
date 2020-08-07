<template>
  <footer :style="cssVars" class="footer has-cards">
    <div class="container">
      <div class="row row-grid align-items-center my-md">
        <div class="col-lg-6 footer-reposition">
          <h5 class="text-dark mb-2">Thank you for supporting us during these tough times!</h5>
          <h6
            class="text-white mb-0 font-weight-light"
          >Always receive 10% off when ordering on our website.</h6>
        </div>
        <div class="col-lg-6 text-lg-center btn-wrapper">
          <a
            target="_blank"
            rel="noopener"
            href="#"
            class="btn btn-neutral btn-icon-only btn-twitter btn-round btn-lg"
            data-toggle="tooltip"
            data-original-title="Follow us"
          >
            <i class="fab fa-twitter"></i>
          </a>
          <a
            target="_blank"
            rel="noopener"
            href="#"
            class="btn btn-neutral btn-icon-only btn-facebook btn-round btn-lg"
            data-toggle="tooltip"
            data-original-title="Like us"
          >
            <i class="fab fa-facebook-square"></i>
          </a>
          <!-- <a
            target="_blank"
            rel="noopener"
            href="#"
            class="btn btn-neutral btn-icon-only btn-dribbble btn-lg btn-round"
            data-toggle="tooltip"
            data-original-title="Follow us"
          >
            <i class="fa fa-dribbble"></i>
          </a>
          <a
            target="_blank"
            rel="noopener"
            href="#"
            class="btn btn-neutral btn-icon-only btn-github btn-round btn-lg"
            data-toggle="tooltip"
            data-original-title="Star on Github"
          >
            <i class="fa fa-github"></i>
          </a>-->
        </div>
      </div>
      <hr />
      <div class="row align-items-center justify-content-md-between">
        <div class="col-md-3">
          <div class="copyright">
            <a href="#" target="_blank" rel="noopener">
              <img src="/images/logo-4/vector/default-monochrome-white.svg" />
            </a>
            <span class="text-white">All Rights Reserved &copy; {{year}}</span>
            <br />
            <span class="text-white">Powered by Gaba Digital</span>
          </div>
        </div>
        <div class="col-md-9">
          <ul class="nav nav-footer justify-content-end">
            <li class="nav-item">
              <router-link to="/" slot="title" href="#" class="nav-link" role="button">
                <span class="nav-link-inner--text">Home</span>
              </router-link>
            </li>
            <li class="nav-item">
              <router-link to="/aboutus" slot="title" href="#" class="nav-link" role="button">
                <span class="nav-link-inner--text">About Us</span>
              </router-link>
            </li>
            <li class="nav-item">
              <router-link to="/contactus" slot="title" href="#" class="nav-link" role="button">
                <span class="nav-link-inner--text">Contact Us</span>
              </router-link>
            </li>
            <li class="nav-item">
              <router-link to="/order" slot="title" href="#" class="nav-link" role="button">
                <span class="nav-link-inner--text">Order Online</span>
              </router-link>
            </li>
          </ul>
        </div>
      </div>
    </div>
  </footer>
</template>

<script lang="ts">
import Vue from "vue";
let vm = Vue.component("app-footer", {
  data: function () {
    return { year: new Date().getFullYear() };
  },
  computed: {
    cssVars() {
      return {};
    },
  },
});

export default vm;
</script>

<style lang="scss" scoped>
footer {
  padding: 2.5em 0;
  background: rgb(233, 109, 119)
    linear-gradient(rgb(203, 60, 97), rgb(48, 9, 42));
  a {
    color: white;
  }
  i {
    color: white;
  }
  .btn-twitter {
    color: #fff;
    background-color: #1da1f2;
    border-color: #1da1f2;
  }
  .btn-facebook {
    color: #fff;
    background-color: #3b5999;
    border-color: #3b5999;
  }
  .btn-icon-only {
    width: 2.375rem;
    height: 2.375rem;
    padding: 0;
  }
  .btn-facebook,
  .btn-twitter {
    -webkit-box-shadow: 0 4px 6px rgba(50, 50, 93, 0.11),
      0 1px 3px rgba(0, 0, 0, 0.08);
    box-shadow: 0 4px 6px rgba(50, 50, 93, 0.11), 0 1px 3px rgba(0, 0, 0, 0.08);
    display: inline-flex;
    justify-content: center;
    align-items: center;
  }
  a.btn-icon-only {
    line-height: 2.5;
  }
}

.footer-reposition {
  // position: relative;
  // bottom: 75px;
}

.copyright {
  display: flex;
  justify-content: center;
  flex-wrap: wrap;

  a {
    margin-bottom: 1em;
  }

  img {
    width: 100%;
  }
}
</style>
