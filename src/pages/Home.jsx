import React, { useState } from 'react';
import "./pages.scss"
import HomeheroBG from './HomeheroBG'
import Travel from "../assets/icons/travel-luggage.png"
import World from "../assets/icons/world.png"
import FamilyIcon from "../assets/icons/family.png"
import DateSelector from '../components/DateSelector';
import C from "../assets/icons/comfort.png"
import Convenient from "../assets/icons/convenient.png"
import Reduction from "../assets/icons/reduction.png"
import Relax from "../assets/icons/relax.png"
import Comfort from "../assets/icons/comfort.png"
import Destination from "../assets/icons/destination.png"


import { FaReact } from 'react-icons/fa';
import { MdAirplanemodeActive } from "react-icons/md";
import { FaBusSimple } from "react-icons/fa6";
import { FaTrainSubway } from "react-icons/fa6";



import PopularTours from '../components/PopularTours';
import ContactForm from '../components/ContactForm';





function Home() {
   const [selectedOption, setSelectedOption] = useState('');
   const handleChange = (event) => {
      setSelectedOption(event.target.value);
    };


  return (<section className='Home'> 
  
    <section className='hero'>
       <HomeheroBG />
       <div className="contents container p-2">
        {/* <h1> Vivid </h1> */}
         <h1>Your Gateway to a World
         of Memorable Experiences. </h1>
         <form action="" className='search_form'>
          <div className='input-group row'> 
             <div className="col-md-3 px-md-5"> 
               <div className='row select-box pt-2'> 
                <div className='col-2 p-0 d-flex align-items-bottom'> 
                  <img className='icon-img' src={World} alt="" />
                </div>
                <div className='col-10 p-0 ps-2'> 
                  <p className='m-0 ps-1 text-lght'>  Where are you going? </p>
                  
                  <select className='select' value={selectedOption} onChange={handleChange}>
                  <option className='select-item' value="option1">Destination</option>
                  <option className='select-item' value="option2">sOption 2</option>
                  <option className='select-item' value="option3">ddOption 3</option>
                  </select>
                </div>
               </div>
             </div>

             <div className="col-md-3 px-md-5"> 
               <div className='row select-box pt-2'> 
                <div className='col-2 p-1 d-flex align-items-bottom'> 
                  <img className='icon-img' src={Travel} alt="" />
                </div>
                <div className='col-10 p-0 ps-2'> 
                  <p className='m-0 ps-1 text-lght'>  Date From </p>
                   <DateSelector />
                </div>
               </div>
             </div>

             <div className="col-md-3 px-md-5"> 
               <div className='row select-box pt-2'> 
                <div className='col-2 p-0 d-flex align-items-bottom'> 
                  <img className='icon-img' src={FamilyIcon} alt="" />
                </div>
                <div className='col-10 p-0 ps-2'> 
                  <p className='m-0 ps-1 text-lght'>  Guests </p>
                  
                  <select className='select' value={selectedOption} onChange={handleChange}>
                  <option className='select-item' value="option1">0</option>
                  <option className='select-item' value="option2">Adult</option>
                  <option className='select-item' value="option3"> Child</option>
                  <option className='select-item' value="option4"> 1</option>
                  <option className='select-item' value="option5"> 2</option>
                  <option className='select-item' value="option6"> 3 or more</option>

                  </select>
                </div>
               </div>
             </div>

             <div className="col-md-3"> 
               <input type="submit" className='submitbtn' value="Search"/>
             </div>
          </div>
         </form>
       </div>
    </section>
    <section className='features px-2'>
         <div className='container row m-auto p-0'> 

            <div className="col-md-4 d-flex ftre-item  py-3 row"> 
             <div className="img-div col-3"> 
              <img className='' src={Reduction} alt="" />
             </div>
             <div className="discriptn col-9"> 
             <h5> Best Price Guarantee </h5>
                <p> Your one-stop-shop for affordable travel solutions and services. </p>
             </div>
            </div>


            <div className="col-md-4 d-flex ftre-item  py-3 row"> 
             <div className="img-div col-3"> 
             <img className='' src={Relax} alt="" />
             </div>
             <div className="discriptn col-9"> 
              <h5> Easy & Quick Booking</h5>
              <p>Instant and effortless booking processes for hassle-free travel.  </p>
             </div>
            </div>



            <div className="col-md-4 d-flex ftre-item  py-3 row"> 
             <div className="img-div col-3"> 
             <img style={{width:"90%"}} className='' src={Destination} alt="" />
             </div>
             <div className="discriptn col-9"> 
             <h5> Best Tour Selection </h5>
                <p> Discover the world's most breathtaking destinations with us. </p>
             </div>
            </div>
         </div>
    </section>

    <section className="services py-5"> 
      <div className="container text-md-center">
      <h1> Top Travel Agent In Kannur for <br /> Affordable Kerala Tours </h1>
      {/* <p>
      Welcome to Vivid Travels and Tourism, your trusted travel agent in Kannur and one of the leading travel agency in Kerala. 
      </p> */}

      <div className="row mt-4"> 
        <div className="col-lg-4"> 
          <div className="card"> 
            <div className='content-servcs row'> 
              <div className="col-3"> 
                <div className='icon-div'> 
                <MdAirplanemodeActive  size={26} color="#fff"/>
                </div>
              </div>
              <div className="col-9"> 
              <h5> Flight Booking </h5>
              <p> Fly Smarter, Book Faster!  </p>
              </div>
            </div>
            <button> Check Details</button>
          </div>
        </div>

        <div className="col-lg-4"> 
          <div className="card"> 
            <div className='content-servcs row'> 
              <div className="col-3"> 
                <div className='icon-div'> 
                <FaBusSimple size={24} color='#fff'/> 
                </div>
              </div>
              <div className="col-9"> 
              <h5> Bus Booking </h5>
              <p> Your Next Stop, Made Simple!  </p>
              </div>
            </div>
            <button> Check Details</button>
          </div>
        </div>

        <div className="col-lg-4"> 
          <div className="card"> 
            <div className='content-servcs row'> 
              <div className="col-3"> 
                <div className='icon-div'> 
                <FaTrainSubway size={24} color='#fff'/>
                </div>
              </div>
              <div className="col-9"> 
              <h5> Train  Booking </h5>
              <p> Ride the Rails!  </p>
              </div>
            </div>
            <button> Check Details</button>
          </div>
        </div>

        






      </div>
      </div>
    </section>


    <section className="posts"> 
       <div className="row p-0 m-0">
        <div className="col-lg-6 p-0 m-0 post-1"> 
         <div className="overlay p-3"> 
            <div className='overlaychld'> 
            <h1> Fly with Ease </h1>
            <p> Book your air tickets with Tabeer Tours, your trusted travel partner. </p>
            <button> Book A Flight</button>
            </div>
         </div>
        </div>
        <div className="col-lg-6 p-0 m-0 post-2">
        <div className="overlay p-3"> 
           <div className='overlaychld'> 
            <h1> UAE Tourist Visa </h1>
            <p> Unveil the wonders of UAE - Discover your next adventure. </p>
            <button> Check Now</button>
            </div>
         </div>
        </div>
       </div>
    </section>

    <section className="reviews"> 
      <div className='reviewsparent'> 
        <h1 className='text-center'> TURNING TRAVEL DREAMS INTO <br /> REALITIES SINCE 2015! </h1>
      </div>
    </section>
    <section >
        <div className="reviewcard container"> 
          <div className="row container m-auto text-center"> 
            <div className="col-4"> 
              <h2> 1,200</h2>
              <p> Happy Bookings </p>  
            </div>
            <div className="col-4">
              <h2> 2000 </h2>
              <p> Destinations Explored </p>
            </div>
            <div className="col-4">
              <h2> 2000 +  </h2>
              <p> Happy Travellers </p>
            </div>
          </div>
        </div>
    </section>



    <section>
      <div className="container py-5" >
      <h1>Popular Tours</h1>
         <PopularTours />
      </div>
    </section>

    <section> 
      <div className="container my-5"> 
      <ContactForm />
      </div>
    </section>

    </section>
  )
}

export default Home