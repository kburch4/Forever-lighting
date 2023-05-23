import React from 'react'
import { Disclosure} from '@headlessui/react'
import { Bars3Icon, XMarkIcon } from '@heroicons/react/24/outline'
import logos from "../Componets/light pictures/logoclear.png"


const navigation = [
  { name: 'Accent', href: '/Accent', current: false },
  { name: 'Holiday', href: 'Holiday', current: false },
  { name: 'Gameday', href: '/Gameday', current: false },
  { name: 'Security', href: '/Security', current: false},
  { name: 'Contact ', href: '/Contact', current: false },
]

function classNames(...classes) {
  return classes.filter(Boolean).join(' ')
}

export default function NavBar() {
  
  return (
    <Disclosure as="nav" className="sticky top-0 z-40 backdrop-blur flex-none transition-colors duration-500 lg:z-50 lg:border-b border-slate-50/[0.06] border-slate-300/10 support-backdrop-blur:bg-transparent -mt-20">
      {({ open }) => (
        <>
          <div className="mx-auto max-w-7xl px-2 sm:px-6 lg:px-8">
            <div className="relative flex h-16 items-center justify-between">
              <div className="absolute inset-y-0 left-0 flex items-center sm:hidden">
                {/* Mobile menu button*/}
                <Disclosure.Button className="inline-flex items-center justify-center rounded-md p-2 text-sky-400 hover:bg-sky-400/20 hover:text-400 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-sky-400/10">
                  <span className="sr-only">Open main menu</span>
                  {open ? (
                    <XMarkIcon className="block h-6 w-6" aria-hidden="true" />
                  ) : (
                    <Bars3Icon className="block h-6 w-6" aria-hidden="true" />
                  )}
                </Disclosure.Button>
              </div>
              <div className="flex flex-1 items-center justify-center sm:items-stretch sm:justify-start">
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

                <div className="hidden sm:ml-6 sm:block">
                  <div className="flex space-x-4">

                    {navigation.map((item) => (
                      <a
                        key={item.name}
                        href={item.href}
                        className={classNames(
                          item.current ? 'bg-gray-900 text-sky-400' : 'text-sky-400 hover:bg-sky-400/10 hover:text-sky-400',
                          'rounded-md px-3 py-2 mt-6 text-sm font-medium font-semibold'
                        )}
                        aria-current={item.current ? 'page' : undefined}
                      >
                        {item.name}
                      </a>
                    ))}
                  </div>
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

          <Disclosure.Panel className="sm:hidden">
            <div className="space-y-1 px-2 pt-2 pb-3">
              {navigation.map((item) => (
                <Disclosure.Button
                  key={item.name}
                  as="a"
                  href={item.href}
                  className={classNames(
                    item.current ? 'bg-gray-900 text-white' : 'text-sky-400 hover:bg-sky-400/20 hover:text-sky-400',
                    'block rounded-md px-3 py-2 text-base font-medium font-semibold'
                  )}
                  aria-current={item.current ? 'page' : undefined}
                >
                  {item.name}
                </Disclosure.Button>
              ))}
            </div>
          </Disclosure.Panel>
        </>
      )}
      
    </Disclosure>
  
  )
}
