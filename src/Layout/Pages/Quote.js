import React, { useState, useRef } from 'react'
import "react-datepicker/dist/react-datepicker.css";
import emailjs from '@emailjs/browser';
import Modal from './Modal';



export default function Quote() {
 
  //modal
  const [modalOn, setModalOn] = useState(false);
  

  const clicked = () => {
    setModalOn(true)
  }
  //emailjs
  const form = useRef();  
  const sendEmail = (e) => {
    e.preventDefault();
    
    emailjs.sendForm('service_2rjtivs', 'template_dihete8', form.current, 'VqQeqtB8uHEkx8vbj')
      .then((result) => {
          clicked();
      }, (error) => {
          console.log(error.text);
      });
  };
  
  
  return (
    
    <div className="isolate bg-slate-800 py-24 px-6 sm:py-32 lg:px-8">
      
      <div className="mx-auto max-w-2xl text-center">
        <h2 className="text-3xl font-bold tracking-tight text-white sm:text-4xl">Request a Quote</h2>
        <p className="mt-2 text-lg leading-8 text-slate-300">
          Unlock the ultimate lighting solution with over 50,000 hours of illumination lasting for more than 20 years guaranteeing to solve your lighting problems forever. Fill out the form to get your quote today.
        </p>
      </div>
      <form action="#" ref={form} onSubmit={sendEmail} className="mx-auto mt-16 max-w-xl sm:mt-20">
        <div className="grid grid-cols-1 gap-y-6 gap-x-8 sm:grid-cols-2">
          <div>
            <label htmlFor="first-name" className="block text-sm font-semibold leading-6 text-white">
              First name
            </label>
            <div className="mt-2.5">
              <input
                type="text"
                name="first_name"
                id="first-name"
                required
                autoComplete="given-name"
                className="block w-full rounded-md bg-slate-900 border-0 py-2 px-3.5 text-slate-300 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-sky-400 sm:text-sm sm:leading-6"
              />
            </div>
          </div>
          <div>
            <label htmlFor="last-name" className="block text-sm font-semibold leading-6 text-white">
              Last name
            </label>
            <div className="mt-2.5">
              <input
                type="text"
                name="last_name"
                id="last-name"
                required
                autoComplete="family-name"
                className="block w-full rounded-md border-0 py-2 px-3.5 bg-slate-900 text-slate-300 shadow-sm ring-1 ring-inset ring-gray-400 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-sky-400 sm:text-sm sm:leading-6"
              />
            </div>
          </div>
          
          <div className="sm:col-span-2">
            <label htmlFor="phone-number" className="block text-sm font-semibold leading-6 text-white">
              Phone number
            </label>
            <div className="relative mt-2.5">
              
              <input
                type="tel"
                name="phone_number"
                id="phone-number"
                autoComplete="tel"
                required
                className="block w-full rounded-md border-0 py-2 px-3.5 text-slate-300 bg-slate-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-sky-400 sm:text-sm sm:leading-6"
              />
            </div>
          </div>
          <div className="sm:col-span-2">
            <label htmlFor="address" className="block text-sm font-semibold leading-6 text-white">
              Address
            </label>
            <div className="relative mt-2.5">
              
              <input
                type="address"
                name="address"
                id="address"
                autoComplete="address"
                required
                className="block w-full rounded-md border-0 py-2 px-3.5 text-slate-300 bg-slate-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-sky-400 sm:text-sm sm:leading-6"
                />
            </div>
          </div>
          <div>
            <label htmlFor="first-name" className="block text-sm font-semibold leading-6 text-white">
              City
            </label>
            <div className="mt-2.5">
              <input
                type="text"
                name="city"
                id="city"
                required
                autoComplete="home city"
                className="block w-full rounded-md border-0 py-2 px-3.5 text-slate-300 bg-slate-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-sky-400 sm:text-sm sm:leading-6"
              />
            </div>
          </div>
          <div>
            <label htmlFor="last-name" className="block text-sm font-semibold leading-6 text-white">
              State
            </label>
            <div className="mt-2.5">
              <input
                type="text"
                name="state"
                id="state"
                required
                autoComplete="home state"
                className="block w-full rounded-md border-0 py-2 px-3.5 text-slate-300 bg-slate-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-sky-400 sm:text-sm sm:leading-6"
              />
            </div>
          </div>     
          
            
          <div className="sm:col-span-2">
            <label htmlFor="message" className="block text-sm font-semibold leading-6 text-white">
              Message
            </label>
            <div className="mt-2.5">
              <textarea
                name="message"
                id="message"
                placeholder='Optional'
                rows={4}
                className="block w-full rounded-md border-0 py-2 px-3.5 text-gray-400 bg-slate-900 shadow-sm ring-1 ring-inset ring-gray-400 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-sky-400 sm:text-sm sm:leading-6"
                defaultValue={''}
              />
            </div>
          </div>
        </div>
        <div className="mt-10">
          <button
            type="submit"
            value="Send"
            className="block w-full rounded-md bg-sky-400/10 px-3.5 py-2.5 text-center text-sm font-semibold text-sky-400 shadow-sm hover:bg-sky-400/30 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-sky-600"
            href="/"
            
          >
            Submit
          </button>
          
      {modalOn && < Modal setModalOn={setModalOn}/>}

        </div>
      </form>
    </div>
  )
}
