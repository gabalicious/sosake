import Vue from "vue";
import Router from "vue-router";
import AppHeader from "/components/AppHeader";
import AppFooter from "/components/AppFooter";

import Home from "/views/cover.vue";
import AboutUs from "/views/aboutus.vue";
import ContactUs from "/views/contactus.vue";
import Order from "/views/order.vue";
import Register from "/views/register.vue";
import Login from "/views/login.vue";

Vue.use(Router);

export default new Router({
  linkExactActiveClass: "active",
  routes: [
    {
      path: "/",
      name: "home",
      components: {
        header: AppHeader,
        default: Home,
        footer: AppFooter,
      },
    },
    {
      path: "/aboutus",
      name: "About Us",
      components: {
        header: AppHeader,
        default: AboutUs,
        footer: AppFooter,
      },
    },
    {
      path: "/contactus",
      name: "Contact Us",
      components: {
        header: AppHeader,
        default: ContactUs,
        footer: AppFooter,
      },
    },
    {
      path: "/order",
      name: "Order",
      components: {
        header: AppHeader,
        default: Order,
        footer: AppFooter,
      },
    },
    {
      path: "/login",
      name: "Login",
      components: {
        header: AppHeader,
        default: Login,
        footer: AppFooter,
      },
    }, {
      path: "/register",
      name: "Register",
      components: {
        header: AppHeader,
        default: Register,
        footer: AppFooter,
      },
    },
  ],
  scrollBehavior: (to) => {
    if (to.hash) {
      return { selector: to.hash };
    } else {
      return { x: 0, y: 0 };
    }
  },
});
