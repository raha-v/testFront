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
        registeruser(){
            const data={
                username:this.username,
                email:this.email,
                password:this.password,
                confirmPassword:this.confirmPassword,
            }
             this.$store.commit('setreg',data);
        return 

        }




    }



}
</script>

<style>

</style>