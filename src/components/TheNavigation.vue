<template>
  <div id="nav">
    <router-link to="/">Home</router-link> |
    <router-link to="/products">Products</router-link> |
    <router-link to="/categories">Categories</router-link>
  </div> 
</template>

<style scoped>
  #nav {
  padding: 30px;
}

#nav a {
  font-weight: bold;
  color: #2c3e50;
  padding: 0 10px;
}

#nav a.router-link-exact-active {
  color: #42b983;
}
</style>