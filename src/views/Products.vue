<template>
  <div>
    <button type="button" data-toggle="modal" data-target="#addProductModal" @click="showModal=true">Add</button>

    <modal v-if="showModal" id="addProductModal" >
      
        <div class="modal-content">
         <div class="modal-header">
          <h5 class="modal-title" id="modalLabel">Add Product</h5>
          <button type="button" class="close" aria-label="Close" @click="showModal=false">
          <span>&times;</span>
          </button>
        </div>
        <div class="modal-body">
        <form>
          <div class="form-group">
            <label for="product-name" class="col-form-label">Product name:</label>
            <input type="text" class="form-control" id="product-name" required>
          </div>
          <div class="form-group">
            <label for="quantity" class="col-form-label">Quantity:</label>
            <input type="number" class="form-control" id="quantity"/>
          </div>
        </form>
      </div>
      <div class="modal-footer">
        <button type="button" class="btn btn-secondary" @click="showModal=false">Close</button>
        <button type="button" class="btn btn-primary">Save</button>
      </div>
    </div>
  </modal>


    <table class="table table-striped">
      <thead>
        <th scope="col">#</th>
        <th scope="col">Product</th>
        <th scope="col">Quantity</th>
        <th scope="col">Actions</th>
      </thead>
      <tbody>
     <tr v-for="product in products" :key="product.id">
       <th scope="row">{{product.id}}</th>
       <td>{{product.name}}</td>
       <td> {{product.quantity}}</td>
       <td><button>editar</button><button>excluir</button></td>
      </tr>
      </tbody>
    </table>
  </div>
</template>

<script>

import store from "@/store.js";
export default {
  name:"Products",
  components:{},

  data(){
    return{
      products: store.products,
      showModal : false
      
    } 
  }
 }


</script>

<style scoped>

  #addProductModal{
    position:absolute;
    z-index: 1;
    align-content: center;
    align-self: center;
  }
</style>