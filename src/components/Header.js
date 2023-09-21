import React from 'react'

export default function Header() {
  return (
    <div>
        <div class="bg-[#DBC4FA] w-full">


        <div className="px-4 mx-auto max-w-7xl sm:px-6 lg:px-8">
            <div className="flex justify-between h-16">
                <div className="flex">
                    <div className="flex items-center flex-shrink-0">
                        <svg width={32} height={32} viewBox="0 0 32 32" fill="none" className="text-gray-100" xmlns="http://www.w3.org/2000/svg">
                            <rect width="100%" height="100%" rx={16} fill="currentColor" />
                            <path fillRule="evenodd" clipRule="evenodd" d="M17.6482 10.1305L15.8785 7.02583L7.02979 22.5499H10.5278L17.6482 10.1305ZM19.8798 14.0457L18.11 17.1983L19.394 19.4511H16.8453L15.1056 22.5499H24.7272L19.8798 14.0457Z" fill="black" />
                        </svg>
                    </div>
                </div>
                <div class="flex items-center">
                    <div class="flex items-center">
                        <div class="px-2 py-2 bg-white rounded-full mr-1">
                            <svg xmlns="http://www.w3.org/2000/svg" width="25" height="25" viewBox="0 0 24 24" fill="none"><path d="M12.02 2.91c-3.31 0-6 2.69-6 6v2.89c0 .61-.26 1.54-.57 2.06L4.3 15.77c-.71 1.18-.22 2.49 1.08 2.93 4.31 1.44 8.96 1.44 13.27 0 1.21-.4 1.74-1.83 1.08-2.93l-1.15-1.91c-.3-.52-.56-1.45-.56-2.06V8.91c0-3.3-2.7-6-6-6Z" stroke="#000" stroke-width="1.5" stroke-miterlimit="10" stroke-linecap="round"></path><path d="M13.87 3.2a6.754 6.754 0 0 0-3.7 0c.29-.74 1.01-1.26 1.85-1.26.84 0 1.56.52 1.85 1.26Z" stroke="#000" stroke-width="1.5" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round"></path><path d="M15.02 19.06c0 1.65-1.35 3-3 3-.82 0-1.58-.34-2.12-.88a3.01 3.01 0 0 1-.88-2.12" stroke="#000" stroke-width="1.5" stroke-miterlimit="10"></path></svg>
                    
                        </div>
                        <span class="ml-3 text-gray-800 border-l border-gray-800/70 border-opacity-40 pl-4">Wendy F.</span>
                    </div>
                </div>
            </div>
        </div>
        
        </div>
        <nav className="bg-white shadow-sm" data-headlessui-state>
          <div className="px-4 mx-auto max-w-7xl sm:px-6 lg:px-8">
            <div className="flex justify-between h-16">
              <div className="flex">
                
                <div className="hidden sm:-my-px sm:ml-6 sm:flex sm:space-x-8">
                  <a href="/" className="inline-flex items-center px-1 pt-1 text-sm font-medium text-gray-900 border-b-2 border-slate-500" aria-current="page">Dashboard</a>
                  <a href="/playground" className="inline-flex items-center px-1 pt-1 text-sm font-medium text-gray-500 border-b-2 border-transparent hover:text-gray-700 hover:border-gray-300">Playground</a>
                </div>
              </div>
              <div className="hidden sm:ml-6 sm:flex sm:items-center">
                <div className="relative ml-3" data-headlessui-state>
                  <div>
                    <button className="flex text-sm bg-white rounded-full focus:outline-none focus:ring-2 focus:ring-slate-500 focus:ring-offset-2" id="headlessui-menu-button-:R1ida:" type="button" aria-haspopup="menu" aria-expanded="false" data-headlessui-state>
                      <span className="sr-only">Open user menu</span>
                      <img alt="placeholder avatar" loading="lazy" width={32} height={32} decoding="async" data-nimg={1} className="w-8 h-8 rounded-full" style={{color: 'transparent'}} srcSet="/_next/image?url=https%3A%2F%2Favatar.vercel.sh%2Fleerob&w=32&q=75 1x, /_next/image?url=https%3A%2F%2Favatar.vercel.sh%2Fleerob&w=64&q=75 2x" src="/_next/image?url=https%3A%2F%2Favatar.vercel.sh%2Fleerob&w=64&q=75" />
                    </button>
                  </div>
                </div>
              </div>
              <div className="flex items-center -mr-2 sm:hidden">
                <button className="inline-flex items-center justify-center p-2 text-gray-400 bg-white rounded-md hover:bg-gray-100 hover:text-gray-500 focus:outline-none focus:ring-2 focus:ring-slate-500 focus:ring-offset-2" id="headlessui-disclosure-button-:Rqda:" type="button" aria-expanded="false" data-headlessui-state>
                  <span className="sr-only">Open main menu</span>
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" aria-hidden="true" className="block w-6 h-6">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
                  </svg>
                </button>
              </div>
            </div>
            
          </div>
        </nav>
    </div>
  )
}
