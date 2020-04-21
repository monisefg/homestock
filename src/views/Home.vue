<template>
  <div class="home">
    <div v-for="product in products" :key="product.id">{{product.name}} {{product.quantity}}</div>
    
  </div>
</template>

<script>
// @ is an alias to /src

import store from "@/store.js";
export default {
  name: "Home",
  components: {},
  data(){
    return{
     products: store.products
    };
  }
};
</script>
