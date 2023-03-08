import React from 'react'
function Deal(){
    const [viewData,setViewData] = React.useState([]);
    console.log(viewData)
    // const viewData1 = viewData[0];
    React.useEffect(()=>{
   getdata()
    },[])


    const getdata=()=>{
        fetch('https://trivagoserver.onrender.com/hotels')
        .then((res) => res.json())
        .then((json) => setViewData(json))
      
       }
    return(
        <>
        {/* <div>hello world</div> */}
        <div className='viewData'>
            {
            viewData.map((item)=>(
                <div className='deal' key = {item.id}>
                <div className='deal1'> 
                {item.deals.map((e)=>(
                    <div className='deal2'><p>{e.title}</p>
                     <div className='site'> {e.site}</div>
                    <img src = {e.logo}/>
                    <p>FreeCancellation:{e.freeCancellation}</p>
                    <h6>Free Breakfast:{e.freeBreakfast}</h6>
                    <h3>Price:{e.price}</h3>
                    </div>
                ))}
               
                </div>
                  </div> 
            ))
            } 

        </div>
        </>
    )

}
export { Deal }