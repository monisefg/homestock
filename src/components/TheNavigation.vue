<template>
  <div id="nav">
    <div class="menuButtons"><router-link to="/">Home</router-link></div>
    <div class="menuButtons"><router-link to="/products">Products</router-link></div>
    <div class="menuButtons"><router-link to="/categories">Categories</router-link></div>
  </div> 
</template>

<style scoped>
  #nav {
  padding: 15px;
  font-size:1.2em;
  background: whitesmoke;
  box-shadow: 0px 1px 5px;
  display:flex;
  flex-direction:row;
  justify-content: space-around;
  align-content: center;
  min-width: 400px;
  max-width: 720px;
  margin:auto;
  
}

#nav a {
  font-weight: bold;
  color: black;
  padding: 0 10px;
}

#nav a.router-link-exact-active {
  
}

.menuButtons{
  background-color: rgba(72, 115, 243, 0.678);
  border-radius: 10px;
  padding:1vh;
  box-shadow: 3px 3px 1px rgba(43, 70, 150, 0.829);
}

</style>