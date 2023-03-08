import { GET_ALL_CITIES } from "./actionType"

export const getAllLatestCities = (payload)=>{
 return{
    type:GET_ALL_CITIES,
    payload
 }
}

export const getCity = async(dispatch)=>{
    try {
      let res=await fetch(`http://localhost:8080/Top_Cities_Detail`)
      let data=await res.json()
    //   console.log(data)
      dispatch(getAllLatestCities(data))
    } catch (error) {
      console.log(error)
    }
  }

export const getCountry = async( dispatch) =>{
  try {
    let res=await fetch(`http://localhost:8080/Top_Destination  `)
    let data=await res.json()
  //   console.log(data)
    dispatch(getAllLatestCities(data))
  } catch (error) {
    console.log(error)
  }
}