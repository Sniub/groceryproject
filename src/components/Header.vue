<template>
  <div class="headerStyle">
    <nav>
        <h1>{{ msg }}</h1>
        <ul>
          <li><router-link to='/' exact>List</router-link></li>
          <li><router-link to='/add' exact>Add Item</router-link></li>
        </ul>
        </nav>
  </div>
</template>

<script>
export default {
  
  data(){
    return{
        msg: 'Grocery List'
        }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
nav{
    background:rgb(122, 63, 100);
    padding:10px;
    border-style: solid;
    border-color:black;
    border-width: 2px;
}
h1{
    color:ivory;
    background:rgb(122, 63, 100);
    padding:10px;
    border-color:black;
    border-width: 2px;
}
ul{
  display:inline;
  text-align:left;
  color:ivory;
}
</style>