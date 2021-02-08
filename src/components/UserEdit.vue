<template>
    <div>
        <h3>
Child Component
        </h3>
        <p>Ben User.vue icinde bir child(UserEdit) componentim</p>
       
        <button @click="yasdegeriniDegistir">Yas degerini degistir</button>
          <p>YAS:{{age}}</p> 
    </div>  
</template> 
<script>
//import EventBus from '../main';


export default {
    props:["age"],
    

methods:{
    yasdegeriniDegistir(){
        this.age=22
        this.$emit("gonderilenYas",this.age);
    }
}
}


</script> 