import { GET_DATA,GET_ALL_LATEST_TODOS } from "./actionType"

const initstate={
    data:[]
}
export const Alldatareducers =(state=initstate,{type,payload})=>{
    switch(type){
        case GET_ALL_LATEST_TODOS:{
            return {...state,data:payload}
        }
        default :
        return state
    }
}