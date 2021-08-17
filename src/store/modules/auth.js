const state = {
datareg:{}

  };




  const getters = {

  };



  const mutations = {
    setreg(state,payload){
        this.state.datareg=payload
    }

  };




  const actions={}


  export default {
    state,
    getters,
    mutations,
    actions
  };
//  this.VueAxios.post('http://136.243.30.85:3000/api/user/register',data).then((res)=>{
  //  console.log(res)
//})