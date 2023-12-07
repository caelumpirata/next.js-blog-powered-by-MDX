import Link from 'next/link';
import React, { useState } from 'react';
import { useRouter } from 'next/router';

export default function Toggle({ children }) {
  const router = useRouter();
  const [isToggled, setIsToggled] = useState(false);

  const toggleHeader = () => {
    const bodyOverflow = isToggled ? 'auto' : 'hidden';
    setIsToggled(!isToggled);
    document.body.style.overflow = bodyOverflow;
  };

  const navigateAndReset = (href) => {
    router.push(href); // Navigate to the link
    setIsToggled(false); // Close the sidebar
    document.body.style.overflow = 'auto'; // Reset body overflow
  };

  return (
    <div>
      <header
        className={`${
          isToggled
            ? 'h-screen bg-gray-100/60 border-b border-gray-200 sticky-header dark:bg-gray-800/60 dark:border-gray-800'
            : 'none'
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
            <div className="absolute z-50 bottom-0 left-0 right-0 top-12 px-16 dark:bg-black bg-white border-t border-gray-200 dark:border-gray-800">
              <ul className="">
                <li className="pt-8">
                  <Link
                    onClick={(e) => {
                      e.preventDefault();
                      navigateAndReset('/');
                    }}
                    className="text-black dark:text-white font-medium tracking-widest cursor-pointer select-none uppercase"
                    href="/"
                  >
                    Home
                  </Link>
                </li>
                <li className="pt-8">
                  <Link
                    onClick={(e) => {
                      e.preventDefault();
                      navigateAndReset('/blog');
                    }}
                    className="text-black dark:text-white font-medium tracking-widest cursor-pointer select-none uppercase"
                    href="/blog"
                  >
                    Blog
                  </Link>
                </li>
                <li className="pt-8">
                  <Link
                    onClick={(e) => {
                      e.preventDefault();
                      navigateAndReset('/projects');
                    }}
                    className="text-black dark:text-white font-medium tracking-widest cursor-pointer select-none uppercase"
                    href="/projects"
                  >
                    Projects
                  </Link>
                </li>
              </ul>
            </div>
          )}
        </nav>
      </header>
      {children}
    </div>
  );
}
