import React from 'react'
import './Home.css'

const Popup = ({adult,ChangeAdultAge,ChangeChildren,Children,Room,ChangeRoom}) => {
  // console.log(IncreaseAdultage)
  return (
  <div className="popUpBox">
   <div>
    <div><b>Adults</b> </div>
    <div>
      { adult == 1 ? <div ><span class="material-symbols-outlined">do_not_disturb_on</span></div> :<div onClick={()=>ChangeAdultAge(-1)}><span class="material-symbols-outlined">do_not_disturb_on</span></div>}
      <div><input type="text" value={adult} /></div>
      <div onClick={()=>ChangeAdultAge(1)}><span class="material-symbols-outlined">add_circle</span></div>
    </div>
   </div>
   <div>
   <div><b>Children</b> </div>
   <div>
   { Children == 0 ? <div ><span class="material-symbols-outlined">do_not_disturb_on</span></div> :<div onClick={()=>ChangeChildren(-1)}><span class="material-symbols-outlined">do_not_disturb_on</span></div>}
      {/* <div><span class="material-symbols-outlined">do_not_disturb_on</span></div> */}
      <div><input type="text"  value={Children}/></div>
      <div onClick={()=>ChangeChildren(1)}><span class="material-symbols-outlined">add_circle</span></div>
    </div>
   </div>
   <div>
   <div><b>Room</b> </div>
   <div>
      {/* <div><span class="material-symbols-outlined">do_not_disturb_on</span></div> */}
      { Children == 1 ? <div ><span class="material-symbols-outlined">do_not_disturb_on</span></div> :<div onClick={()=>ChangeRoom(-1)}><span class="material-symbols-outlined">do_not_disturb_on</span></div>}
      <div><input type="text" value={Room}/></div>
      <div onClick={()=>ChangeRoom(1)}><span class="material-symbols-outlined">add_circle</span></div>
    </div>
   </div>
  </div>
  )
}

export default Popup