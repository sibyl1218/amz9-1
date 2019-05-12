let mutations={
  UPDATE_NAV:(state,payload)=>{
    state.bNav=payload
  },
  
  UPDATE_FOOT:(state,payload)=>{
    state.bFoot=payload
  },
  
  UPDATE_LOADING:(state,payload)=>{
    state.bLoading=payload
  },
  
  UPDATE_USER:(state,payload)=>{
    state.user=payload
  },
  
  UPDATE_HOME:(state,payload)=>state.home=payload,
  UPDATE_REG:(state,payload)=>state.reg=payload,
  UPDATE_DETAIL:(state,payload)=>state.detail=payload,

};

export default mutations;