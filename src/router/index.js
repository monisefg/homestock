import Vue from "vue";
import VueRouter from "vue-router";
import Home from "../views/Home.vue";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "Home",
    component: Home
  },
  {
    path:"/products",
    name: "products",
    component: ()=>
      import(/*webpackChunkName:"products"*/"../views/Products.vue")
  },
  {
    path:"/categories",
    name: "categories",
    component: ()=>
      import(/*webpackChunkName:"categories"*/"../views/Categories.vue")
  }
];

const router = new VueRouter({
  routes
});

export default router;
