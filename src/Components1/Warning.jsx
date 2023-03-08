import React from 'react'
import { useState,useEffect } from 'react'
import './Warning.css'

const Warning = () => {
 const[show,setShow]=useState(false)
 
 useEffect(()=>{
    let inter=setInterval(()=>{
        setShow(true)
       
    },60000)
    return(()=>{
        return clearInterval(inter)
    })
})
const do_it = ( ) =>{
    window.location.reload(); 
}
  return (
    <>
{show ? (   <div className='WarningBox'>
    <img src="https://imgcy.trivago.com/f_auto,q_auto/hardcodedimages/lightbox_heroshot.png" alt="" />
    <h2>Hey, are You still there?</h2>
    <h1 onClick={()=>setShow(false)}>X</h1>
    <p>You've been inactive for 1 minutes so your search result<br /> has been expired. Hit refresh to see the latest hotels rate.</p>
    <button  onClick={do_it}>Refresh</button>
   </div>) :''}
</>
  )
}

export default Warning