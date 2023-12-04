import Link from 'next/link';
import React, { useState } from 'react';


export default function Toggle ({ children }){
  const [isToggled, setIsToggled] = useState(false);

  const toggleHeader = () => {
    if (isToggled) {
      setIsToggled(false);
      document.body.style.overflow = 'auto';
    } else {
      setIsToggled(true);
      document.body.style.overflow = 'hidden';
    }
  };
  const resetOverflow = () => {
    document.body.style.overflow = 'initial';
  };

  return (
    <div>
      <header
        className={`${
          isToggled
            ? 'h-screen bg-gray-100/60 border-b border-gray-200 sticky-header dark:bg-gray-800/60 dark:border-gray-800'
            : ''
        }`}
      >
        <nav className="mx-auto max-w-4xl md:px-2 md:py-2">
          <div className="md:hidden">
            <div className="flex items-center h-12 text-gray-700 dark:text-white">
              <button
                className="px-4 h-full"
                aria-label="Toggle Mobile Menu"
                onClick={toggleHeader}
              >
                {isToggled ? (
                  // The close icon you mentioned
                  <svg
                    stroke="currentColor"
                    fill="none"
                    strokeWidth="2"
                    viewBox="0 0 24 24"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    height="16"
                    width="16"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <line x1="18" y1="6" x2="6" y2="18"></line>
                    <line x1="6" y1="6" x2="18" y2="18"></line>
                  </svg>
                ) : (
                  // The open icon you mentioned
                  <svg
                    stroke="currentColor"
                    fill="none"
                    strokeWidth="2"
                    viewBox="0 0 24 24"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    height="16"
                    width="16"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <line x1="3" y1="12" x2="21" y2="12"></line>
                    <line x1="3" y1="6" x2="21" y2="6"></line>
                    <line x1="3" y1="18" x2="21" y2="18"></line>
                  </svg>
                )}
              </button>
            </div>
          </div>
          {isToggled && (
            // Additional content when the header is toggled
            <div className="absolute z-50 bottom-0 left-0 right-0 top-12 px-16 dark:bg-black bg-white border-t border-gray-200 dark:border-gray-800">
              <ul className="">
                <li className="pt-8">
                  <Link onClick={resetOverflow} className="text-black dark:text-white font-medium tracking-widest cursor-pointer select-none uppercase" href="/">
                    Home
                  </Link>
                </li>
                {/* <li className="pt-8">
                  <Link  onClick={resetOverflow} className="text-black dark:text-white font-medium tracking-widest cursor-pointer select-none uppercase" href="/about">
                    About
                  </Link>
                </li> */}
                <li className="pt-8">
                  <Link onClick={resetOverflow} className="text-black dark:text-white font-medium tracking-widest cursor-pointer select-none uppercase" href="/blog">
                    Blog
                  </Link>
                </li>
                <li className="pt-8">
                  <Link onClick={resetOverflow} className="text-black dark:text-white font-medium tracking-widest cursor-pointer select-none uppercase" href="/projects">
                    Projects
                  </Link>
                </li>
              </ul>
              <div className="absolute bottom-8">
                <ul className="flex">
                  <li className="-ml-3">
                    <Link onClick={resetOverflow} className="inline-block px-3 text-gray-500 text-xs tracking-wider uppercase sm:text-sm" href="https://twitter.com/caelumpirata"  >
                      <svg
                        stroke="currentColor"
                        fill="none"
                        strokeWidth="2"
                        viewBox="0 0 24 24"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        className="text-xl"
                        height="1em"
                        width="1em"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path d="M23 3a10.9 10.9 0 0 1-3.14 1.53 4.48 4.48 0 0 0-7.86 3v1A10.66 10.66 0 0 1 3 4s-4 9 5 13a11.64 11.64 0 0 1-7 2c9 5 20 0 20-11.5a4.5 4.5 0 0 0-.08-.83A7.72 7.72 0 0 0 23 3z"></path>
                      </svg>
                    </Link>
                  </li>
                  <li><Link className="inline-block px-3 text-gray-500 text-xs tracking-wider uppercase sm:text-sm" href="https://www.youtube.com/@caelumpirata"  ><svg stroke="currentColor" fill="none" strokeWidth="2" viewBox="0 0 24 24" strokeLinecap="round" strokeLinejoin="round" className="text-xl" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg"><path d="M22.54 6.42a2.78 2.78 0 0 0-1.94-2C18.88 4 12 4 12 4s-6.88 0-8.6.46a2.78 2.78 0 0 0-1.94 2A29 29 0 0 0 1 11.75a29 29 0 0 0 .46 5.33A2.78 2.78 0 0 0 3.4 19c1.72.46 8.6.46 8.6.46s6.88 0 8.6-.46a2.78 2.78 0 0 0 1.94-2 29 29 0 0 0 .46-5.25 29 29 0 0 0-.46-5.33z"></path><polygon points="9.75 15.02 15.5 11.75 9.75 8.48 9.75 15.02"></polygon></svg></Link></li>
                  <li><Link className="inline-block px-3 text-gray-500 text-xs tracking-wider uppercase sm:text-sm" href="https://github.com/caelumpirata"  ><svg stroke="currentColor" fill="none" strokeWidth="2" viewBox="0 0 24 24" strokeLinecap="round" strokeLinejoin="round" className="text-xl" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg"><path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"></path></svg></Link></li>
                  <li className="-mr-3"><Link className="inline-block px-3 text-gray-500 text-xs tracking-wider uppercase sm:text-sm" href="/feed.xml"><svg stroke="currentColor" fill="none" strokeWidth="2" viewBox="0 0 24 24" strokeLinecap="round" strokeLinejoin="round" className="text-xl" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg"><path d="M4 11a9 9 0 0 1 9 9"></path><path d="M4 4a16 16 0 0 1 16 16"></path><circle cx="5" cy="19" r="1"></circle></svg></Link></li>

                  
                </ul>
              </div>
            </div>
          )}
        </nav>
      </header>
      {children}
    </div>
  );
};


