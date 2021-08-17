import axios from "axios";

const state = {
  datareg: {},
  datablog:{}

  };



//* getter
const getters = {
  getdatareg (state)
  {
    return state.datareg
  },
  getblogdata ( state )
  {
    return state.datablog
  }


  };


//*setter
  const mutations = {
    setreg(state,payload){
        state.datareg=payload
    },
    setdatablog ( state, payload )
    {
      state.datablog=payload
    }

  };



//* Async
const actions = {
    
  async getblog  (context)
  {
    try
    {
      const res = await axios.get( "http://136.243.30.85:3000/api/blog", {
        headers: {
          "x-auth-token":localStorage.getItem("x-auth-token")
        }
      } )
      
      context.commit( "setdatablog", res.data )

  
    } catch ( err )
    {
      console.log(err);
  
}

  },
  async register ( _, payload )
  {
    try {
      const res = await axios.post( "http://136.243.30.85:3000/api/user/register", payload )
      console.log(res);

      localStorage.setItem("x-auth-token",res.headers["x-auth-token"])




    } catch (error) {
      console.log( error);
    } 




   }

  }


  export default {
    state,
    getters,
    mutations,
    actions
  };
//  this.VueAxios.post('http://136.243.30.85:3000/api/user/register',data).then((res)=>{
  //  console.log(res)
//})