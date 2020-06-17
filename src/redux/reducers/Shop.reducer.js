const INITIAL_STATE = {
    items:[],
    counts:{},
    totalPrice:0,
    totalItems:0
};

const shopReducer = (state = INITIAL_STATE, action)=>{
    switch(action.type){
        case "ADD" :
          if(state.items.some(el=>el.name === action.payload.name)){
            return {
                        totalItems: state.totalItems + 1,
                        totalPrice:state.totalPrice + parseInt(action.payload.price),
                        items:[...state.items],
                        counts:{
                            ...state.counts,
                            [action.payload.name] : state.counts[action.payload.name] + 1
                        }
                    }
          }
          else{
            return{
                totalItems: state.totalItems + 1,
                totalPrice:state.totalPrice + parseInt(action.payload.price),
                        items:[...state.items, action.payload],
                        counts:{
                            ...state.counts,
                            [action.payload.name] : 1
                        }
                    }
          }
        
        case "REMOVE":{
            return{
                totalItems: state.totalItems - state.counts[action.payload.name],
                items:[...state.items.filter(el=> el !== action.payload)],
                counts:{
                    ...state.counts,
                    [action.payload.name] : 0
                },
                totalPrice:state.totalPrice - (state.counts[action.payload.name] * action.payload.price)
            }
        }

        case "DESCREASE":{
            return{
                totalItems: state.totalItems - 1,
                counts:{
                    ...state.counts,
                    [action.payload.name] : state.counts[action.payload.name] - 1
                },
                items:[...state.items],
                totalPrice: state.totalPrice - action.payload.price
            }
        }
        default:
            return state;
    }
        
}

export default shopReducer;