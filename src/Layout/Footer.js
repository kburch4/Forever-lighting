import footerlogo from "../Componets/light pictures/footerlogo.png"

const navigation = {
  solutions: [
    { name: 'Holiday', href: '/Holiday' },
    { name: 'Security', href: '/Security' },
    { name: 'Accent', href: '/Accent' },
    { name: 'Gameday', href: '/Gameday' },
  ],
  support: [
    { name: 'Request Quote', href: '/Quote' },
    { name: 'Contact Us', href: '/Contact' },
    
  ],
  locations: [
    { name: 'ID: Boise, Meridian,' },
    { name: 'Eagle, Kuna, Nampa,' },
    { name: 'Idaho Falls, Rexburg,'},
    { name: 'Pocotello, Twin Falls'},
        
  ],
  legal: [
    { name: 'Claim', href: '#' },
    { name: 'Privacy', href: '#' },
    { name: 'Terms', href: '#' },
  ],
  social: [
    {
      name: 'Facebook',
      href: 'https://www.facebook.com/profile.php?id=100092350973838',
      icon: (props) => (
        <svg fill="currentColor" viewBox="0 0 24 24" {...props}>
          <path
            fillRule="evenodd"
            d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z"
            clipRule="evenodd"
          />
        </svg>
      ),
    },
  ],
}

export default function Footer() {
  return (
    <footer className="bg-slate-900" aria-labelledby="footer-heading">
      <h2 id="footer-heading" className="sr-only">
        Footer
      </h2>
      <div className="border-t border-white/10">

      </div>
      <div className="mx-auto max-w-7xl px-6 pb-8 pt-16 sm:pt-24 lg:px-8 lg:pt-32">
        <div className="xl:grid xl:grid-cols-3 xl:gap-8">
          <div className="space-y-8">
            <img
              className="h-20"
              src={footerlogo}
              alt="Company name"
            />
           
            <div className="flex space-x-6 pl-2">
              {navigation.social.map((item) => (
                <a key={item.name} href={item.href} className="text-gray-500 hover:text-sky-400">
                  <span className="sr-only">{item.name}</span>
                  <item.icon className="h-6 w-6" aria-hidden="true" />
                </a>
              ))}
            </div>
          </div>
          <div className="mt-16 grid grid-cols-2 gap-8 xl:col-span-2 xl:mt-0">
            <div className="md:grid md:grid-cols-2 md:gap-8">
              <div className="mt-10 md:mt-0">
                <h3 className="text-sm font-semibold leading-6 text-white">Support</h3>
                <ul role="list" className="mt-6 space-y-4">
                  {navigation.support.map((item) => (
                    <li key={item.name}>
                      <a href={item.href} className="text-sm leading-6 text-gray-300 hover:text-white">
                        {item.name}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
            <div className="md:grid md:grid-cols-2 md:gap-8">
              <div>
                <h3 className="text-sm font-semibold leading-6 text-white">Locations</h3>
                <ul role="list" className="mt-6 space-y-4">
                  {navigation.locations.map((item) => (
                    <li key={item.name} className="text-sm leading-6 text-gray-300">
                      
                        {item.name}
                      
                    </li>
                  ))}
                </ul>
              </div>
              
            </div>
          </div>
        </div>
        <div className="mt-16 border-t border-white/10 pt-8 sm:mt-20 lg:mt-24">
          <p className="text-xs leading-5 text-gray-400">&copy; 2023 Forever Lighting, Inc. All rights reserved.</p>
        </div>
      </div>
    </footer>
  )
}

