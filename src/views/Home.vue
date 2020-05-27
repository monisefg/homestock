<template>
  <div>
    <div class="content">
  
    <table class="table table-striped tableProducts">
      <thead>
        <th scope="col">#</th>
        <th scope="col">Product</th>
        <th scope="col">Quantity</th>
      </thead>
      <tbody>
       <TableRow v-for="product in products" 
                 :key="product.id" 
                 :product="product"
                 :showAction=false
                 edit="editProduct"
                 deleteP="deleteProduct"/>
      </tbody>
    </table>
    
  </div>
  </div>
</template>

<script>
import store from "@/store.js";
//import TableRowEditable from "@/components/TableRowEditable.vue";
import TableRow from "@/components/TableRow.vue"

export default {
  name:"Home",
  components:{TableRow},

  data(){
    return{
      products: store.products,
      showModal : false,
      name:"",
      quantity:null,
      editId:null
    } 
  },
  methods:{
    saveProduct(){
    this.products.push({name:this.name,quantity:this.quantity, id:5})  
    this.name=""
    this.quantity=null
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

  .tableProducts{
    width: 100%;
    font-size: 1.2em;
    white-space: nowrap;
    min-width: 400px;
  }

  @media (min-width: 650px) {
    .content{
    margin:2% 20%;
  }
  
  }
</style>