<template>

 <tr>
      <th scope="row">{{product.id}}</th>
       <td><input type="text" placeholder="product.name"></td>
       <td><input type="number" placeholder="product.quantity"></td>
       <td><button>save</button></td>

 </tr>
</template>


<script>
export default {
  props:['product'],
  data(){

  }
}
</script>

<style>

</style>