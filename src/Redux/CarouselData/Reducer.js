import { GET_ALL_CITIES } from "./actionType"

const initstate={
    data:[]
}
export const AllCitiesreducers =(state=initstate,{type,payload})=>{
    switch(type){
        case GET_ALL_CITIES:{
            return {...state,data:payload}
        }
        default :
        return state
    }
}