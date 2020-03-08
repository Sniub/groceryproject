<template>
    <div>
        <button v-on:click="incrementCounter()">+</button>
        <button v-on:click="decrementCounter()">-</button>
        <label>&nbsp;{{counter}}&nbsp;</label>
    </div>
</template>

<script>
export default {
    data(){
        return{
            counter : 0
        }
    },
    methods:{
        incrementCounter(){
            this.counter=this.counter+1
        },
        decrementCounter(){
            this.counter=this.counter-1
        }
    }
}
</script>

<style scoped>
button{
    font-family: Avenir, Helvetica, Arial, sans-serif;
    text-align: center;
    color: #2c3e50;
}
</style>