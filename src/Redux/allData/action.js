import { GET_ALL_LATEST_TODOS, GET_DATA } from "./actionType"

export const getAllLatestTodos = (payload)=>{
 return{
    type:GET_ALL_LATEST_TODOS,
    payload
 }
}

export const get = async(dispatch)=>{
    try {
      let res=await fetch(`http://localhost:8080/hotels`)
      let data=await res.json()
    //   console.log(data)
      dispatch(getAllLatestTodos(data))
    } catch (error) {
      console.log(error)
    }
  }