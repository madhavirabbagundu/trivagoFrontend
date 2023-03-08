import React from 'react'
function Footer(){



          let image =  <img src = "https://seeklogo.com/images/I/Indian_Flag-logo-19B702FA68-seeklogo.com.png"/>
           
    return(
        <>
        <div className='Footer'>
       <p style = {{marginLeft:-790,marginBottom:-10,fontSize:13}}>trivago N.V., KesselstraBe 5-7,40221Dusseldorf</p>
       <a href = "#" style={{marginLeft:-15}}>germany</a>
       {/* <span> */}

        <select className='SelectData'>
           <option>{image}India</option>
           <option>India</option>
            <option>India</option>
            <option>Australia</option>
            <option>Brazil</option>
            <option>Arab</option>
            <option>Chill</option>
            <option>china</option>
            <option>maharastra</option>
            <option>Mumbai</option>
            <option>Delhi</option>
            <option>bihar</option>
            <option>maharastra</option>
            <option>AUstrali</option>
            <option>Japan</option>
            <option>Germany</option>
            <option>Hang kong</option>
            <option>Greece</option>
            

        </select>
       {/* </span> */}
       
       <div className='Image'>
        <div className='Image1'>
       <img  className = "Image" src = "https://image.similarpng.com/very-thumbnail/2020/06/Black-icon-Twitter-logo-transparent-PNG.png"/>
       <img className = "Image"  src = "https://i.pinimg.com/originals/41/e4/57/41e457e8599833299d563976b7d3c59a.jpg"/>
       <img className = "Image"  src = "https://i.pinimg.com/originals/ee/93/32/ee933267f1290803739dd38bca4a9b25.jpg"/>
       <img  className = "Image" src = "https://i.pinimg.com/originals/20/9b/d8/209bd859c265e7ffc4bfeb75877b23f7.png"/>
      <img  className = "Image" src = "https://toppng.com/uploads/preview/linkedin-square-logo-comments-linkedin-icon-black-11563087424lpctodfamj.png"/>
    
      </div>
      </div>
      
    <div className='footer'>
        <div className='footer1'>
      <a href = "#">Company</a>
      <a href = "#">Jobs</a>
      <a href = "#">Press</a>
      <a href = "#">Investor relation</a>
      </div>
      <div className='footer2'>
      <a href = "#">Mobile apps-searching on the go</a>
      <a href = "#" style = {{marginBottom:90}}>trivago Business Studio</a>
      </div>

      <div className='footer3'>
      <a href="#">Help</a>
        <a href = "#">Learn how trivago works</a>
        <a href = "#">Terms and conditions</a>
        <a href = "#">Legal information Do Not Sell My Personal Information</a>
        <a href = "#">Private notice</a>
        <a href = "#">Cyber Security</a>
        <a href = "">Advice</a>

      </div>
     </div>
      <div><h1>trivago</h1>
      <p style = {{fontSize:12,marginTop:-10}}>Copyright 2022 trivago | All right reserved</p>
        </div>
        </div>
        </>
    )
}
export { Footer }