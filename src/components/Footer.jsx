import React from 'react'
import "./Components.scss"

function Footer() {
  return (
    <div className='p-2 Footer'>
      
      <div className="container pt-3"> 
        <div className="row">
          <div className="col-md-3">
            <ul className='ps-0'>
              <li className='pb-2'> <b>GET IN TOUCH</b> </li>
              <li> IRINAVE ROAD JUNCTION, <br /> Irinave, Kannur <br /> 
               Kerala 670301 <br /> 
               <a href=""> vivid@gmail.com</a>
                </li>
            </ul>
          </div>
          <div className="col-md-2">
             <ul className='ps-0'>
                <li className='pb-2'> <b>COMPANY</b> </li>
                <li> <a href=""> Home</a> </li>
                <li> <a href=""> About Us</a> </li>
                <li> <a href=""> Contact Us</a> </li>
                <li> <a href=""> Global Visa Services</a> </li>
                <li> <a href=""> Holiday Packages</a> </li>
              </ul>
          </div>
          <div className="col-md-2">
              <ul className='ps-0'>
                <li className='pb-2'> <b>LOCATIONS </b> </li>
                <li> <a href=""> Calicut</a> </li>
                <li> <a href=""> Delhi </a> </li>
                <li> <a href=""> Trivandrum</a> </li>
                <li> <a href=""> Mangalore</a> </li>
                <li> <a href=""> Chennai</a> </li>
              </ul>
          </div>
          <div className="col-md-2">
          <ul className='ps-0'>
                <li className='pb-2'> <b>LOCATIONS </b> </li>
                <li> <a href=""> Calicut</a> </li>
                <li> <a href=""> Delhi </a> </li>
                <li> <a href=""> Trivandrum</a> </li>
                <li> <a href=""> Mangalore</a> </li>
                <li> <a href=""> Chennai</a> </li>
              </ul>
          </div>
          <div className="col-md-3 d-flex flex-column justify-content-end pb-4 "> 
          <h5> SUBSCRIBE TO OUR <br /> NEWSLETTER AND DEALS</h5>
          <form action=" ">
            <label htmlFor="name"> Name *  </label> <br />
            <input className='' type="text" id='name'/>
            <br />
            <label htmlFor="email"> Email *</label> <br />
            <input className='' type="email" id='email'/>

            <input type="submit" className='btn-2'  value={"SUBSCRIBE NOW"}/>
          </form>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Footer