import React, { useEffect } from "react";
import HotelCard from "./HotelCard";
import { useSelector, useDispatch } from "react-redux";
import { get } from '../../Redux/allData/action'
import HotelFilter from './HotelFilter'
import { Store } from "../../Redux/store";
import { useParams } from 'react-router-dom'


const HotelMain = () => {
  // const City=useSelector((store)=>store.CityandCountry.data)
  let {citylist} = useParams()
  let City=useSelector((store)=>store.AllData.data)
  console.log(City)
  const dispatch = useDispatch();
  useEffect(() => {
    get(dispatch);
  }, []);
if(citylist){
City=City.filter((ele)=>ele.location == citylist )
}
  return (
    <div style={{ backgroundColor: "rgb(243,244,245)" }}>
      {City.length == 0 ? (
        <>lodding</>
      ) : (
        <HotelFilter data={City} />
        // data.map((hotel) => <HotelCard hotel={hotel} key={hotel.id} />)
      )}
    </div>
  );
};

export default HotelMain;
