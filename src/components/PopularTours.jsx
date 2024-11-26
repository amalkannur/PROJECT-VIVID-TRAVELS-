import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import "./Components.scss"
import Dubaiimg1 from "../assets/images/dubai-img1.jpg"
import CardComponent from "./CardComponent";

function PopularTours() {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 1,
    autoplay: true,
    arrows: false, 
    responsive: [
        {
          breakpoint: 768, // Tablet and mobile screens
          settings: {
            slidesToShow: 1, // Show 1 slide on mobile
            slidesToScroll: 1,
          },
        },
        {
            breakpoint: 1080, // Tablet and mobile screens
            settings: {
              slidesToShow: 2, // Show 1 slide on mobile
              slidesToScroll: 1,
            },
          },

          {
            breakpoint: 1400, // Tablet and mobile screens
            settings: {
              slidesToShow: 3, // Show 1 slide on mobile
              slidesToScroll: 1,
            },
          },
      ],
  };

  return (
    <div className="Popular-tours" style={{ width: "100%", margin: "0 auto" }}>
      <Slider {...settings}>

        <div className="pe-md-4 ps-md-2 py-4"> 
        <CardComponent
        image={Dubaiimg1}
        title="Beautiful Design"
        description="This is a description of the card content. It gives an overview of what the card is about."
      />
        </div>

        <div className="pe-md-4 ps-md-2 py-4"> 
        <CardComponent
        image={Dubaiimg1}
        title="Beautiful Design"
        description="This is a description of the card content. It gives an overview of what the card is about."
      />
        </div>

        <div className="pe-md-4 ps-md-2 py-4"> 
        <CardComponent
        image={Dubaiimg1}
        title="Beautiful Design"
        description="This is a description of the card content. It gives an overview of what the card is about."
      />
        </div>

        <div className="pe-md-4 ps-md-2 py-md-5"> 
        <CardComponent
        image={Dubaiimg1}
        title="Beautiful Design"
        description="This is a description of the card content. It gives an overview of what the card is about."
      />
        </div>

        <div className="pe-md-4 ps-md-2 py-md-5"> 
        <CardComponent
        image={Dubaiimg1}
        title="Beautiful Design"
        description="This is a description of the card content. It gives an overview of what the card is about."
      />
        </div>

      </Slider>
    </div>
  );
}

export default PopularTours;