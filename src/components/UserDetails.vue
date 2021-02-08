<template>
    <div>
        <h3>
Child Component
        </h3>
        <p>Ben User.vue icinde bir child (UserDetails)componentim</p>
    <p>Esya Adi:{{name}}</p>
<slot></slot>
    <p>YAS:{{age}}</p>
    <p>{{switchName()}}</p>
    <button @click ="ChildToParent">Parenta(User.vue) veri gonderiyorum</button>
    </div>
</template>

<script>
export default {
    props:["name","age"],
    veri:"Bilgisayar",

   
methods:
{
    switchName(){
    return this.name.split("").reverse().join("");
},
childToParent()
{     
    this.$emit("dataGonder", this.veri);
}

}}
</script>