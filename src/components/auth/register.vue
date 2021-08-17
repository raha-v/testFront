<template>
  <form @submit.prevent>
      <input type="text" v-model="username">
      <input type="email" v-model="email">
      <input type="password" v-model="password" >
      <input type="password" v-model="confirmPassword">
      <button @click="registeruser">register</button>



  </form>
   
</template>




<script>

import { mapGetters } from 'vuex';
// import { mapActions } from 'vuex';
export default {
    data(){
    return {
        username:"",
        email:"",
        password:"",
        confirmPassword:"",
    }
    }
    ,
    computed:{
        // ...mapActions(["getblog","register"]),
        ...mapGetters(["getdatareg","getblogdata"]),
        registeruser(){
            const data={
                username:this.username,
                email:this.email,
                password:this.password,
                confirmPassword:this.confirmPassword,
            }

            this.$store.dispatch("register",data)






            //  this.$store.commit('setreg',data);
            //  this.$store.dispatch('getblog')
            //  console.log(this.getblogdata)
     
           
//* to call a action we should use dispatch 
        return 0

        }




    }



}
</script>

<style>

</style>