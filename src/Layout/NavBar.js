import React from 'react'
import { Disclosure} from '@headlessui/react'
import logos from "../Componets/light pictures/logoclear.png"



export default function NavBar() {
  
  return (
    <Disclosure as="nav" className="sticky relative top-0 z-40 backdrop-blur flex-none transition-colors duration-500 lg:z-50 lg:border-b border-slate-50/[0.06] border-slate-300/10 support-backdrop-blur:bg-transparent -mt-20">
      {({ open }) => (
        <>
          <div className="mx-auto max-w-7xl px-2 lg:px-8">
            <div className="relative flex h-16 items-center justify-between">
              <div className="flex flex-1 items-center sm:items-stretch sm:justify-start">
                <div className="flex items-center">
                  <button>
                    <a href='/'>

                      <img
                        className="block h-20 w-auto lg:hidden mt-2 button"
                        src={logos}
                        alt="Your Company" />
                      <img
                        className="hidden h-20 w-auto lg:block mt-2 button"
                        src={logos}
                        alt="Your Company" />
                    </a>
                  </button>
                </div>

                
              </div>

              <a
                href="/Quote"
                className="inline-block rounded-md border border-transparent bg-sky-400/10 py-2 px-5 text-center font-small font-semibold text-sky-400 hover:bg-sky-400/20"
              >
                Request Quote
              </a>
            </div>
          </div>
        </>
      )}
      
    </Disclosure>
  
  )
}
