<template>
<div>
    <h1>Parent Component(User componenti)</h1>
    <p> Parent herseyin import edildigi Component </p>
  
    <button @click="changeName()">Adimi Degistir</button>
    <p>UserDetails(child) uzerinden gelen veri=>{{ childData }}</p>
    <p>YAS (Parent){{age}}</p>
    <div>
      
          <hr>
        <UserDetails :age="age" @dataGonder ="childData = $event" :name = "title" >
            <p>XXXXXXXXXXXXXXXXXXXXXXXXXXXXXX</p>
        </UserDetails>
          <hr>
        <UserEdit @gonderilenYas ="age = $event" :age="age"/>
    </div>
    </div>
</template>
<script>
import UserDetails from "../components/UserDetails.vue";
import UserEdit from "../components/UserEdit.vue";
export default {

    components:{
        UserEdit:UserEdit,
        UserDetails :UserDetails,

    },
       data :function(){
           return{
            title:"MasaMasaMasaMasa",
            childData: "",
            age:33  
                  }

   },
   methods:{
       changeName(){
           this.title="Masa"
       }
   }
}
</script>