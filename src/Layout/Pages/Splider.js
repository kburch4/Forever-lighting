import React from "react";
import { Splide, SplideSlide } from '@splidejs/react-splide';
import '@splidejs/splide/css';
import accent from "../../Componets/light pictures/accent1.PNG"
import green from "../../Componets/light pictures/green.PNG"
import purple from "../../Componets/light pictures/purplep.PNG"
import multi from "../../Componets/light pictures/laker.jpg"
import christmas from "../../Componets/light pictures/white.PNG"
import usa from "../../Componets/light pictures/usa2.jpg"

export default function Splider() {
    
    return(
        <div className="bg-sky-900/10">
        <Splide aria-label="My Favorite Images" className=" md:px-32  md:space-x-10" options={ {
          perMove : 1,
          perPage : 2,
          rewind: true,
          pagination: true,
          gap: 40,
          breakpoints: {
            740: { perPage : 1,
            gap: 0,
          },
          }
        } }>
          <SplideSlide>
            <img src={purple} alt="1" className="h-full w-full shadow-xl rounded-3xl"
            />
          </SplideSlide>
          <SplideSlide>
            <img src={accent} alt="2" className="h-full w-full shadow-xl rounded-3xl"/>
          </SplideSlide>
          <SplideSlide>
            <img src={green} alt="3" className="h-full w-full shadow-xl rounded-3xl"/>
          </SplideSlide>
          <SplideSlide>
            <img src={usa} alt="4" className="h-full w-full shadow-xl rounded-3xl"/>
          </SplideSlide>
          <SplideSlide>
            <img src={multi} alt="5" className="h-full w-full shadow-xl rounded-3xl"/>
          </SplideSlide>
          <SplideSlide>
            <img src={christmas} alt="6" className="h-full w-full shadow-xl rounded-3xl"/>
          </SplideSlide>
        </Splide>
        </div>
    )
}
