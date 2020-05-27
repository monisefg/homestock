<template>
  <tr class="alignRow">
       <td class="columnWidth">{{product.id}}</td>
       <td>{{product.name}}</td>
       <td><button class="buttons">-</button> {{product.quantity}}<button class="buttons">+</button></td>

       <td v-if="showAction"><div class="editClicked"><button class="buttons editButton" title="edit" @click="edit(product.id)"></button><button @click="deleteP(product.id)" class="buttons deleteButton" title="delete"></button></div></td>
  </tr>
  
</template>

<script>
export default {
  props:['product', 'deleteP', 'edit', 'showAction' ],

  data(){
    return {};
  }
}
</script>

<style scoped>

.buttons{
    width:48px;
    height: 48px;
    background-size: contain;
    margin:0 5px;
    background-color: transparent;
    border: transparent;
    font-size: 1.4em;
    color:red;
   
  }
  .editButton{
        background-image: url("../assets/download.png");
  }

  .deleteButton{
        background-image: url("../assets/delete.png"); 
  }

  .alignRow td{
    vertical-align: middle;
  }
  .columnWidth{
    width: 20%;
  }
</style>