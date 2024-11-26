import React from 'react'
import { Link } from 'react-router-dom';
import "./Components.scss"


import { IoIosMenu } from "react-icons/io";



function Navbar() {
  return (
    <div className='Navbar'> 
          <div className='d-md-none p-2'>
        {/* Offcanvas Toggle Button */}
         <div className='d-flex justify-content-between align-items-center'> 
          <h3 className='m-0'> VIVID</h3>
         <button
            className="menu-btn"
            type="button"
            data-bs-toggle="offcanvas"
            data-bs-target="#offcanvasExample"
            aria-controls="offcanvasExample"
          >
            <IoIosMenu />
          </button>
         </div>

        {/* Offcanvas Content */}
          <div
            className="offcanvas offcanvas-start"
            tabIndex="-1"
            id="offcanvasExample"
            aria-labelledby="offcanvasExampleLabel"
          >
            <div className="offcanvas-header">
              <h5 className="offcanvas-title" id="offcanvasExampleLabel">
                Offcanvas Menu
              </h5>
              <button
                type="button"
                className="btn-close"
                data-bs-dismiss="offcanvas"
                aria-label="Close"
              ></button>
            </div>
            <div className="offcanvas-body">
              <ul className="list-group">
                <li className="list-group-item"><Link   to="/home">Home</Link></li>
                <li className="list-group-item"> <Link   data-bs-dismiss="offcanvas" aria-label="Close" to="/about">About</Link></li>
                <li className="list-group-item"> <Link target='blank' data-bs-dismiss="offcanvas" aria-label="Close" to="/holidays">Holidays</Link> </li>
                <li className="list-group-item"> <Link target='blank' data-bs-dismiss="offcanvas" aria-label="Close" className='btn-1' to="/contact">Contact Us</Link> </li>
              </ul>
            </div>
          </div>
        </div>

        <div className="d-none d-md-block">
           <div className='container row m-auto'> 
            <div className="col-4 d-flex align-items-center"> 
               <h2 className='text-white'> VIVID </h2>
            </div>
            <div className="col-8 py-2"> 
              <div className='d-flex justify-content-center align-items-center'> 
              <div className='nav-items'><Link to="/home">Home</Link></div>
              <div className='nav-items'><Link to="/about">About</Link></div>
              <div className='nav-items'><Link to="/holidays">Holidays</Link></div>
              <div className='nav-items'><Link to="/visa">Visa</Link></div>
              <div className='nav-items'><Link className='btn-1' to="/contact">Contact Us</Link></div>
              </div>
            </div>
           </div>
        </div>
 


    </div>
  )
}

export default Navbar