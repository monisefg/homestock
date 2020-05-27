<template>
  <div class="content">
   <button type="button" class="btn btn-primary" v-if="!showForm" @click="showForm=true">Add new Product</button>

    <div v-if="showForm">    
       
       <div class="alert alert-danger" role="alert" 
            v-if="errors.length">
       <ul>
        <li v-for="error in errors" :key="error">{{ error }}</li>
        </ul>
       </div>
       
      <form class="form-group">
          <div class="form-group">
            <label for="product-name" class="col-form-label">Product name:</label>
            <input type="text" class="form-control" id="product-name" v-model="name">
          </div>
          <div class="form-group">
            <label for="quantity" class="col-form-label">Quantity:</label>
            <input type="number" class="form-control" id="quantity" v-model="quantity"/>
          </div>
      
        <div class="form-group">
        <button type="button" class="btn btn-secondary" @click="showForm=false">Close</button>
        <button type="submit" class="btn btn-primary" @click="saveProduct">Save</button>
        </div>
      </form>
    </div>

    <table class="table table-striped tableProducts">
      <thead>
        <th scope="col">#</th>
        <th scope="col">Product</th>
        <th scope="col">Quantity</th>
        <th scope="col">Actions</th>
      </thead>
      <tbody>
       <TableRow v-for="product in products" 
                 :key="product.id" 
                 :product="product"
                 :showAction=true
                 edit="editProduct"
                 deleteP="deleteProduct"/>
      </tbody>
    </table>
     
  </div>

</template>

<script>

import store from "@/store.js";
//import TableRowEditable from "@/components/TableRowEditable.vue";
import TableRow from "@/components/TableRow.vue"

export default {
  name:"Products",
  components:{TableRow},

  data(){
    return{
      products: store.products,
      showForm : false,
      name:"",
      quantity:0,
      editId:null,
      errors:[]
    } 
  },
  methods:{
    saveProduct(){
      this.errors = [];
      if (!this.name) {
        this.errors.push('Product name is required!');
      }
      if(this.quantity < 0){
        this.errors.push('Quantity not permited');
      }
      
     if (!this.errors.length) {
             
      this.products.push({name:this.name,quantity:this.quantity, id:5})
      this.quantity=0;
      this.showForm=false;
      this.name="";
      }
    },

    deleteProduct(id){
      const newListProducts=this.products.filter((item)=> item.id!=id)
      this.products = newListProducts
    },

    editProduct(id){
      this.editId=id;
     

    }
   
  }
 }


</script>

<style scoped>

  #addProductModal{
    position: absolute;
    z-index: 1;
    align-content: center;
    align-self: center;
    left:40%;
    margin-top: 20px;;
    
  }

  .tableProducts{
     width: 100%;
    font-size: 1.2em;
    white-space: nowrap;
    min-width: fit-content;
  
  }

  .content{
    margin-top:10px;
  }
</style>