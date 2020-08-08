<template>
  <div>
    <app-header></app-header>
    <div class="full-height">
      <b-container>
        <b-row>
          <b-col xl="4"></b-col>
          <b-col class="login-container" xl="4">
            <h3 class="text-dark">Login</h3>
            <div class="center-buttons">
              <b-button variant="primary" v-on:click="makeToast()">
                <i class="fab fa-facebook"></i> Facebook
              </b-button>
              <b-button v-on:click="makeToast()" variant="danger">
                <i class="fab fa-google"></i> Google
              </b-button>
              <b-button v-on:click="makeToast()" variant="dark">
                <i class="fab fa-apple"></i> Apple
              </b-button>
            </div>
            <div class="division">
              <div class="line"></div>
              <div class="text-dark">or</div>
              <div class="line"></div>
            </div>
            <div>
              <b-form>
                <b-form-group id="input-group-1" label="Email address:" label-for="input-1">
                  <b-form-input disabled type="email" required placeholder="Email"></b-form-input>
                </b-form-group>

                <b-form-group id="input-group-2" label="Password" label-for="input-2">
                  <b-form-input disabled id="input-2" required placeholder="Enter name"></b-form-input>
                </b-form-group>
                <div class="center-buttons no-wrap">
                  <b-button v-on:click="makeToast()" variant="primary">Submit</b-button>

                  <b-button to="resumedemo" variant="warning">
                    <i class="fas fa-user-circle shadow"></i>
                    <span class="text-white shadow">Try Test Account</span>
                  </b-button>
                </div>
              </b-form>
            </div>
          </b-col>
          <b-col xl="4"></b-col>
        </b-row>
      </b-container>
    </div>
  </div>
</template>

<script lang="ts">
import Vue from "vue";
import AppHeader from "../components/AppHeader.vue";

let vm = Vue.component("login-view", {
  components: {
    child: { AppHeader },
  },
  data: function () {
    return {};
  },
  methods: {
    makeToast(append = false) {
      this.toastCount++;
      this.$bvToast.toast(`Feature Coming Soon`, {
        title: "Notification",
        autoHideDelay: 5000,
        appendToast: append,
      });
    },
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
  background: black;
}
.login-container {
  border-radius: 7px;
  padding: 20px;
  background: #ffffff99;
  margin-bottom: 100px;
}
i {
  color: #ffffff;
}
.division {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin: 15px 0;
  .line {
    border-top: 1px solid #ffffff90;
    height: 1px;
    flex-basis: 33%;
  }
}
.shadow {
  text-shadow: 1px 1px 2px #000000;
}

button,
a.btn {
  margin-top: 15px;
}
button {
  width: 50%;
}
.center-buttons {
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;
  a,
  button {
    width: 100%;
  }
}
.center-buttons.no-wrap {
  flex-wrap: nowrap;

  .btn {
    width: 50%;
  }
  .btn + .btn {
    margin-left: 5px;
  }
}
</style>