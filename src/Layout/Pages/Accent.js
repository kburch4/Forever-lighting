import React from "react";
import accent from "../../Componets/light pictures/accent.JPG"
import accent2 from "../../Componets/light pictures/accent2.jpg"
import greens from "../../Componets/light pictures/green.JPG"
import { BoltIcon, LockClosedIcon, PaintBrushIcon } from '@heroicons/react/20/solid'
import Splider from "./Splider";

export default function Accent() {
    return (
      <div>
      <div className="relative isolate overflow-hidden bg-slate-700 py-24">
            <img
              src={accent}
              alt=""
              className="absolute mix-blend-multiply inset-0 -z-10 h-full w-full object-cover object-right md:object-center"
            />
            <div
          className="absolute inset-x-0 -top-40 -z-10 transform-gpu overflow-hidden blur-3xl sm:-top-80"
          aria-hidden="true"
        ></div>
      <div className="mx-auto max-w-2xl text-center">
        <h2 className="text-4xl font-extrabold tracking-tight text-white sm:text-6xl">Accent <span className="text-sky-400">Lighting</span></h2>
        <p className="mt-6 text-lg leading-8 text-gray-300">
        Our lights are designed for every season. Showcase and brighten your home with white lights that can be
        brightened or dimmed in different hues and tones.
        </p>
      </div>
    </div>
<div className="bg-slate-900 py-24 px-10 sm:py-32">
      <div className="mx-auto max-w-7xl lg:px-8">
        <div className="mx-auto grid max-w-2xl grid-cols-1 items-start gap-x-8 gap-y-16 sm:gap-y-24 lg:mx-0 lg:max-w-none lg:grid-cols-2">
          <div className="lg:pr-4">
            <div className="relative overflow-hidden rounded-3xl bg-gray-900 px-6 pb-9 pt-64 shadow-2xl sm:px-12 lg:max-w-lg lg:px-8 lg:pb-8 xl:px-10 xl:pb-10">
              <img
                className="absolute inset-0 h-full w-full object-cover"
                src={accent2}
                alt="accent photo"
              />
              
              
            </div>
          </div>
          <div>
            <div className="text-base leading-7 text-gray-700 lg:max-w-lg">
              
              <h1 className="text-3xl font-bold tracking-tight text-white sm:text-4xl">
                Design your Lights
              </h1>
              <div className="max-w-xl">
                <p className="mt-6 text-slate-400">
                Forever lights are for far more than just Christmas. Showcase and brighten your home with white lights that can be brightened or dimmed in different hues and tones. For starters, choose from cold, warm, soft, or neutral. Make the lights as subtle or as prominent as you want.
                </p>
              </div>
            </div>
            
            <div className="hidden sm:mb-8 sm:flex sm:justify-center py-10">
            <div className="relative rounded-full px-3 py-1 text-sm leading-6 text-sky-400 ring-1 bg-sky-400/10 ring-sky-400/10 hover:ring-sky-400/20 hover:bg-sky-400/20">
              Request a free consultation {' '}
              <a href="#" className="font-semibold text-sky-400">
                <span className="absolute inset-0" aria-hidden="true" />
                <span aria-hidden="true">&rarr;</span>
              </a>
            </div>
          </div>
          </div>
        </div>
      </div>
      <div className="my-36">
        <Splider />
      </div>
      <div className="mt-20 lg:ml-10 mx-auto grid max-w-2xl grid-cols-1 items-start gap-x-8 gap-y-16 sm:gap-y-24 lg:mx-0 lg:max-w-none lg:grid-cols-2">
      <div>
            <div className="text-base leading-7 text-gray-700 lg:max-w-lg">
              
              <h1 className="text-3xl font-bold tracking-tight text-white sm:text-4xl">
                Lights for every Occasion
              </h1>
              <div className="max-w-xl">
                <p className="mt-6 text-slate-400">
                Customize your lights by only turning on however many you’d like. You have the ability to turn off any light. Preset combinations also help to space out the lights every few feet. You can even turn off all the lights except for what is on peaks and corners to accent your home’s beautiful features. Use as few or as many lights as you wish! For this reason, accent lighting is optimal in the summertime. Light up your patio for those evening backyard parties without turning on the backyard lights all year round.
                </p>
              </div>
            </div>
            
            <div className="hidden sm:mb-8 sm:flex sm:justify-center py-10">
            <div className="relative rounded-full px-3 py-1 text-sm leading-6 text-sky-400 ring-1 bg-sky-400/10 ring-sky-400/10 hover:ring-sky-400/20 hover:bg-sky-400/20">
              Request a free consultation {' '}
              <a href="#" className="font-semibold text-sky-400">
                <span className="absolute inset-0" aria-hidden="true" />
                <span aria-hidden="true">&rarr;</span>
              </a>
            </div>
          </div>
          </div>
          <div className="lg:pr-4">
            <div className="relative overflow-hidden rounded-3xl bg-gray-900 px-6 pb-9 pt-64 shadow-2xl sm:px-12 lg:max-w-lg lg:px-8 lg:pb-8 xl:px-10 xl:pb-10">
              <img
                className="absolute inset-0 h-full w-full object-cover"
                src={greens}
                alt="christmas photo"
              />
              
              
            </div>
          </div>
          
        </div>
      </div>
      </div>
    )
  }
