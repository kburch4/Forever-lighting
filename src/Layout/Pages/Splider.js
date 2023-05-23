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
        <div className="bg-slate-900">
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
            <img src={usa} alt="1" className="h-auto w-auto shadow-xl rounded-3xl"
            />
          </SplideSlide>
          <SplideSlide>
            <img src={accent} alt="2" className="h-auto w-auto shadow-xl rounded-3xl"/>
          </SplideSlide>
          <SplideSlide>
            <img src={green} alt="3" className="h-auto w-auto shadow-xl rounded-3xl"/>
          </SplideSlide>
          <SplideSlide>
            <img src={valentines} alt="4" className="h-auto w-auto shadow-xl rounded-3xl"/>
          </SplideSlide>
          <SplideSlide>
            <img src={easter} alt="5" className="h-auto w-auto shadow-xl rounded-3xl"/>
          </SplideSlide>
          <SplideSlide>
            <img src={christmas} alt="6" className="h-auto w-auto shadow-xl rounded-3xl"/>
          </SplideSlide>
        </Splide>
        </div>
    )
}
