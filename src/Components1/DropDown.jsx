import React from "react";
import { Link } from "react-router-dom"
import './DropDown.css';
function DropDown() {
    const [state,setState] = React.useState(false);
    const showDropDown=()=>{
        setState(true);

    }
    const showDropUp=()=>{
        setState(false);
    }
    return(
        <div className="dropdown">
            <div className="dropdown-menu" onMouseEnter={showDropDown} onMouseLeave={showDropUp}>
         <select style = {{outline:'none',border:'none'}}>
            <option>Menu</option>
         </select>
         <i class = "bx bx-chevran-down"></i>
         {state ?( <ul className = "dropdown-list" onMouseEnter={showDropDown}>
             {/* <Link to = "viewed">Recently</Link> */}
             <ul>
           <li><Link to = "BookingOverview" style = {{color:'black'}}>BookingOverview</Link></li>
           <li><Link to = "HelpandSupport" style = {{color:'black'}}>Help and Support</Link> </li>
        <li> <Link to = "Recently" style = {{color:'black'}}>Recently</Link></li>
</ul>

           
          
         
           
             </ul>) :null}
       </div>
        </div>
    )

}
export { DropDown }