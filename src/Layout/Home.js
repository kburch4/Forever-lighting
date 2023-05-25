import React from "react"
import darkblue from "../Componets/light pictures/blue.JPG"
import day from "../Componets/light pictures/day.JPG"
import './Home.css';
import { SunIcon, GiftIcon, DevicePhoneMobileIcon, LockClosedIcon } from '@heroicons/react/24/outline'
import { Disclosure } from '@headlessui/react'
import { MinusSmallIcon, PlusSmallIcon } from '@heroicons/react/24/outline'
import Quote from "./Pages/Quote"
import Splider from "./Pages/Splider"
import chris from "../Componets/light pictures/chris.jpg"
import { ReactCompareSlider, ReactCompareSliderImage } from 'react-compare-slider';
import phone from "../Componets/light pictures/phone.jpg"
import valentines from "../Componets/light pictures/valentines.JPG"
import multi2 from "../Componets/light pictures/multi2.jpg"
import vid from "../Componets/light pictures/webvid3.mp4"

const faqs = [
  {
    question: "Can they be used for other holidays besides Christmas?",
    answer:
      "Yes! Forever Lights are designed to be used all year round. Our energy-efficient LED lights are designed for holidays and events, accent lighting, and security. Investing in permanent lights will quickly pay off the more you use them.",
  },
  {
    question: "Where do my lights go?",
    answer:
    "The lights are installed underneath your roofline behind the trim piece of your house. All wiring is enclosed in a metal casing making the light’s framework unnoticeable from the street. On top of that, we can color-match the casing, making the framework virtually invisible.",
    
  },
  {
    question: "Do I have to plug them in every night?",
    answer:"Nope! A controller is installed with the lights that connect to the app for use on your phone."
  },
  {
    question: "Can I turn the lights on when I’m not home?",
    answer:
    "Yes! Using Wi-Fi, turn the lights on or off wherever you are."
  },
  {
    question: "How much do permanent lights cost?",
    answer:
    "Cost is calculated per square foot of your home. Contact us for a low-price quote that you can’t find anywhere else. We have the best rates in the Treasure Valley without compromising quality. We consistently offer referral programs and discounts for you to keep more money in your pocket!"
  },
  {
    question: "How long do permanent lights last?",
    answer: "50,000 hours! If you used them every night for 6 hours that would last 22 years!",
  }
]

const features = [
  {
    name: 'Celebrate Every Holiday',
    description:
      'Our LED lights are designed for every season. Show your holiday spirit, cheer on your favorite sports team, or celebrate a birthday with any combination of colors, patterns, and blinking lights.',
    icon: GiftIcon,
    image: {chris},
  },
  {
    name: 'Accent your House',
    description:
      'Whether you’re looking to accent your home or add additional security, our energy-efficient LED white lights can do both! Adjust the brightness and hue of white to increase your home’s security and add a touch of elegance.',
    icon: LockClosedIcon,
  },
  {
    name: 'Day or Night',
    description:
      "Forever Lights are installed underneath your house’s trim with enclosed wires. And with our color-matching system, your light's enclosure is completely invisible during the day, adding security and illuminating your home at night.",
    icon: SunIcon,
  },
  {
    name: 'Control From Your Phone',
    description:
      'Using the app, turn the lights on and off, add timers, and choose from +1,000,000 color combinations. You can change even a single lightbulb with a push of a button. Your creativity is limitless!',
    icon: DevicePhoneMobileIcon,
  },
]
const stats = [
    { id: 1, name: 'Color combinations', value: '+1,000,000' },
    { id: 2, name: 'Light Effects', value: '+100' },
    { id: 3, name: 'Designs', value: 'Unlimited' },
  ]
   
  
  export default function Home() {
    
    return (
        <>
        <div className="bg-slate-900">
        <div className="relative isolate overflow-hidden pt-14">
        <video 
          autoplay
          controls
          muted 
          loop
          playsinline
          className="absolute inset-0 -z-10 h-full w-full object-cover mix-blend-multiply">
          <source 
          src={vid}
          
          />
        </video>
        
        <div
          className="absolute inset-x-0 -top-40 -z-10 transform-gpu overflow-hidden blur-3xl sm:-top-80"
          aria-hidden="true"
        >
        </div>
        <div className="mx-auto max-w-2xl py-24 sm:py-48 lg:py-32">
          <div className="hidden sm:mb-8 sm:flex sm:justify-center">
            <div className="relative rounded-full px-3 py-1 text-sm leading-6 text-sky-400 ring-1 bg-sky-400/10 ring-sky-400/10 hover:ring-sky-400/20 hover:bg-sky-400/20">
              Learn more about our LED Smart Lights {' '}
              <a href="/Quote" className="font-semibold text-sky-400">
                <span className="absolute inset-0" aria-hidden="true" />
                Read more <span aria-hidden="true">&rarr;</span>
              </a>
            </div>
          </div>
          <div className="text-center -mt-28 md:pb-36 md:mt-0">
          <h1 className="pt-10 pb-15 text-5xl md:text-7xl text-white font-extrabold font-teko">Forever <span className="text-sky-600">Lighting</span></h1>
            <div className="mt-48 pb-44 md:mt-0 md:pb-0">        
            <p className="mt-6 text-lg leading-8 text-gray-300"> 
            Never put holiday lights on again. <span className="font-bold">Ever.</span> 
            </p>
            <div className="mt-6 flex items-center justify-center gap-x-6">
              <a
                href="/Quote"
                className="rounded-md bg-sky-400/10 px-3.5 py-2.5 text-sm font-semibold text-sky-400 shadow-sm hover:bg-sky-400/20 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-400"
              >
                Request Quote
              </a>
            </div>
            </div>
          </div>
        </div>
        <div
          className="absolute inset-x-0 top-[calc(100%-13rem)] -z-10 transform-gpu overflow-hidden blur-3xl sm:top-[calc(100%-30rem)]"
          aria-hidden="true"
        >
          
        </div>
      </div>
    </div>
    <div className="bg-slate-700 py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto grid max-w-2xl grid-cols-1 items-start gap-x-8 gap-y-16 sm:gap-y-24 lg:mx-0 lg:max-w-none lg:grid-cols-2">
          <div className="lg:pr-4 rounded-lg">
            
            <ReactCompareSlider
              itemOne={<ReactCompareSliderImage src={day} alt="Image one" className="rounded-3xl" />}
              itemTwo={<ReactCompareSliderImage src={darkblue} alt="Image two" className="rounded-3xl"/>}
              
            />
      
            </div>
          
        <div>
            <div className="text-base leading-7 text-gray-700 lg:max-w-lg">
              
              <h1 className="text-3xl font-bold tracking-tight text-white sm:text-4xl">
                Bright at Night and Invisible by Day
              </h1>
              <div className="max-w-xl">
                <p className="mt-6 text-slate-400">
                The lights are installed underneath the house’s roofline, making them unnoticeable from the street during the day. To make them even more invisible, we offer color matching so the light’s casing will match the trim piece of your house, giving them the ultimate disguise.
                </p>
              </div>
              <div className="mt-12 hidden sm:mb-8 sm:flex sm:justify-center">
            <div className="relative rounded-full px-3 py-1 text-sm leading-6 text-sky-400 ring-1 bg-sky-400/10 ring-sky-400/10 hover:ring-sky-400/20 hover:bg-sky-400/20">
              Learn more about our LED Smart Lights {' '}
              <a href="/Quote" className="font-semibold text-sky-400">
                <span className="absolute inset-0" aria-hidden="true" />
                <span aria-hidden="true">&rarr;</span>
              </a>
            </div>
          </div>
            
            </div>
            </div>
           </div>
          </div>
         </div>
         <div className="relative isolate pt-14 overflow-hidden bg-slate-400 md:bg-slate-700">
        <img
          src={valentines}
          alt=""
          className="absolute inset-0 mix-blend-multiply -z-10 h-full w-full object-cover"
        />
       <div className="mx-auto max-w-7xl px-6 py-24 sm:py-32 lg:flex lg:items-center lg:gap-x-10 lg:px-8 lg:py-40">
        <div className="mx-auto max-w-2xl lg:mx-0 lg:flex-auto">
      <div className="relative mx-auto max-w-7xl px-6 lg:px-8">          
        <div className="mx-auto max-w-2xl lg:mx-0 lg:max-w-xl">
          <h1 className="mt-2 text-3xl font-bold tracking-tight text-white sm:text-4xl">
            Touch of a Button
          </h1>
          <p className="mt-6 text-lg leading-8 text-slate-400">
          Use our app to change to any colors, set timers, and even create a new sequence.
          </p>
        </div>
        <dl className="mx-auto mt-16 grid max-w-2xl grid-cols-1 gap-x-8 gap-y-10 text-white sm:mt-20 sm:grid-cols-2 sm:gap-y-16 lg:mx-0 lg:max-w-none lg:grid-cols-4">
          {stats.map((stat) => (
            <div key={stat.id} className="flex flex-col gap-y-3 border-l border-white/10 pl-3">
              <dt className="text-sm leading-6 text-slate-400">{stat.name}</dt>
              <dd className="order-first text-3xl font-semibold tracking-tight">{stat.value}</dd>
            </div>
          ))}
        </dl>
        </div> 
      
      </div>
      <div className="mt-16 sm:mt-24 lg:mt-0 lg:flex-shrink-0 lg:flex-grow">
            <svg viewBox="0 0 366 729" role="img" className="mx-auto w-[22.875rem] max-w-full drop-shadow-xl">
              <title>App screenshot</title>
              <defs>
                <clipPath id="2ade4387-9c63-4fc4-b754-10e687a0d332">
                  <rect width={316} height={684} rx={36} />
                </clipPath>
              </defs>
              <path
                fill="#4B5563"
                d="M363.315 64.213C363.315 22.99 341.312 1 300.092 1H66.751C25.53 1 3.528 22.99 3.528 64.213v44.68l-.857.143A2 2 0 0 0 1 111.009v24.611a2 2 0 0 0 1.671 1.973l.95.158a2.26 2.26 0 0 1-.093.236v26.173c.212.1.398.296.541.643l-1.398.233A2 2 0 0 0 1 167.009v47.611a2 2 0 0 0 1.671 1.973l1.368.228c-.139.319-.314.533-.511.653v16.637c.221.104.414.313.56.689l-1.417.236A2 2 0 0 0 1 237.009v47.611a2 2 0 0 0 1.671 1.973l1.347.225c-.135.294-.302.493-.49.607v377.681c0 41.213 22 63.208 63.223 63.208h95.074c.947-.504 2.717-.843 4.745-.843l.141.001h.194l.086-.001 33.704.005c1.849.043 3.442.37 4.323.838h95.074c41.222 0 63.223-21.999 63.223-63.212v-394.63c-.259-.275-.48-.796-.63-1.47l-.011-.133 1.655-.276A2 2 0 0 0 366 266.62v-77.611a2 2 0 0 0-1.671-1.973l-1.712-.285c.148-.839.396-1.491.698-1.811V64.213Z"
              />
              <path
                fill="#343E4E"
                d="M16 59c0-23.748 19.252-43 43-43h246c23.748 0 43 19.252 43 43v615c0 23.196-18.804 42-42 42H58c-23.196 0-42-18.804-42-42V59Z"
              />
              <foreignObject
                width={316}
                height={684}
                transform="translate(24 24)"
                clipPath="url(#2ade4387-9c63-4fc4-b754-10e687a0d332)"
              >
              <img src={phone} alt="" />
              </foreignObject>
            </svg>
        </div>
     </div> 
    </div>
          <div className="relative isolate overflow-hidden bg-slate-500 md:bg-slate-700 py-24 sm:py-32">
            <img
              src={multi2}
              alt=""
              className="absolute mix-blend-multiply inset-0 -z-10 h-full w-full object-cover object-right md:object-center"
            />
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-2xl lg:text-center">
          <p className="mt-2 text-3xl font-bold tracking-tight text-white sm:text-4xl">
            Every feature for any of your needs
          </p>
          <p className="mt-6 text-lg leading-8 text-gray-400">
            Design your house for every Holdiay, Game, or just for the everyday. Use our easy to use app to
            make your lights any way you want them.
          </p>
        </div>
        <div className="mx-auto mt-16 max-w-2xl sm:mt-20 lg:mt-24 lg:max-w-4xl">
          <dl className="grid max-w-xl grid-cols-1 gap-y-10 gap-x-8 lg:max-w-none lg:grid-cols-2 lg:gap-y-16">
            {features.map((feature) => (
              <div key={feature.name} className="relative pl-16">
                <dt className="text-base font-semibold leading-7 text-white">
                  <div className="absolute top-0 left-0 flex h-10 w-10 items-center justify-center rounded-lg bg-sky-400/20">
                    <feature.icon className="h-6 w-6 text-sky-400" aria-hidden="true" />
                  </div>
                  {feature.name}
                </dt>
                <dd className="mt-2 text-base leading-7 text-gray-400">{feature.description}</dd>
                
              </div>
               
            
            ))}
          </dl>
        </div>
      </div>
    </div>
    
    <div className="bg-slate-900">
      <div className="mx-auto max-w-7xl px-6 py-24 sm:py-32 lg:py-40 lg:px-8">
        <div className="mx-auto max-w-4xl divide-y divide-gray-100/50">
          <h1 className="text-4xl font-bold leading-10 tracking-tight text-white">Frequently asked questions</h1>
          <dl className="mt-10 space-y-6 divide-y divide-slate-100/10">
            {faqs.map((faq) => (
              <Disclosure as="div" key={faq.question} className="pt-6">
                {({ open }) => (
                  <>
                    <dt>
                      <Disclosure.Button className="flex w-full items-start justify-between text-left text-white">
                        <span className="text-base font-semibold leading-7">{faq.question}</span>
                        <span className="ml-6 flex h-7 items-center">
                          {open ? (
                            <MinusSmallIcon className="h-6 w-6 text-sky-400" aria-hidden="true" />
                          ) : (
                            <PlusSmallIcon className="h-6 w-6 text-sky-400" aria-hidden="true" />
                          )}
                        </span>
                      </Disclosure.Button>
                    </dt>
                    <Disclosure.Panel as="dd" className="mt-2 pr-12">
                      <p className="text-base leading-7 text-slate-400">{faq.answer}</p>
                    </Disclosure.Panel>
                  </>
                )}
              </Disclosure>
            ))}
          </dl>
        </div>
      </div>
    </div>
    <div>
      <Splider />
    </div>
    <div>
      <Quote />
    </div>    
    </>
    )
  }
  
