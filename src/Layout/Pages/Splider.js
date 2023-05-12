import React from "react";
import { Splide, SplideSlide } from '@splidejs/react-splide';
import '@splidejs/splide/css';
import accent from "../../Componets/light pictures/accent.JPG"
import green from "../../Componets/light pictures/green.JPG"
import usa from "../../Componets/light pictures/usa.JPG"
import easter from "../../Componets/light pictures/easter.JPG"
import christmas from "../../Componets/light pictures/christmas.JPG"
import valentines from "../../Componets/light pictures/valentines.JPG"

export default function Splider() {
    
    return(
        <div>
        <Splide aria-label="My Favorite Images" className=" md:px-32  md:space-x-10" options={ {
          perMove : 1,
          perPage : 1,
          rewind: true,
          pagination: false,
          
        } }>
          <SplideSlide>
            <img src={usa} alt="Image 1" className="h-auto w-auto shadow-xl rounded-3xl"
            />
          </SplideSlide>
          <SplideSlide>
            <img src={accent} alt="Image 2" className="h-auto w-auto shadow-xl rounded-3xl"/>
          </SplideSlide>
          <SplideSlide>
            <img src={green} alt="Image 2" className="h-auto w-auto shadow-xl rounded-3xl"/>
          </SplideSlide>
          <SplideSlide>
            <img src={valentines} alt="Image 2" className="h-auto w-auto shadow-xl rounded-3xl"/>
          </SplideSlide>
          <SplideSlide>
            <img src={easter} alt="Image 2" className="h-auto w-auto shadow-xl rounded-3xl"/>
          </SplideSlide>
          <SplideSlide>
            <img src={christmas} alt="Image 2" className="h-auto w-auto shadow-xl rounded-3xl"/>
          </SplideSlide>
        </Splide>
        </div>
    )
}