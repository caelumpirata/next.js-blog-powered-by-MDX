import Link from 'next/link';
import { useEffect, useState } from 'react';


const Footer = () => {
  // total website count
  const  slug = "totalcount"

  const [viewCount, setViewCount] = useState(null);

  useEffect(() => {
    if (slug) {
      fetch(`/api/redis?id=${slug}`) // Pass the slug as an identifier to the API
        .then((res) => res.text())
        .then((data) => {
          setViewCount(data);
        })
        .catch((error) => {
          console.error('Error fetching data:', error);
        });
    }
  }, [slug]);

  return (
    <footer className="mt-16 sm:mt-18 border-t border-gray-300 dark:border-gray-700 ">
      <div className="mx-auto max-w-2xl px-4 md:px-0 ">
        <div className="flex items-end justify-between py-8  sm:py-8">
          <div className="mr-16 xs:mr-32">
            <p className="inline-block py-2 text-gray-500 text-xs tracking-wider  sm:text-sm">Original articles on this site are <Link className="inline-block text-gray-500 text-xs  underline uppercase sm:text-sm" href="https://creativecommons.org/licenses/by-nc-sa/4.0/legalcode">
              CC BY-NC-SA </Link> licensed unless otherwise stated.</p>
         
          </div>

          <ul className="flex">
            <p className="inline-block px-3 text-gray-500 text-xs tracking-wider uppercase sm:text-sm">{viewCount}</p>
            <li ><Link className="inline-block px-3 text-gray-500 text-xs tracking-wider uppercase sm:text-sm" href="https://twitter.com/caelumpirata"  ><svg stroke="currentColor" fill="none" strokeWidth="2" viewBox="0 0 24 24" strokeLinecap="round" strokeLinejoin="round" className="text-xl" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg"><path d="M23 3a10.9 10.9 0 0 1-3.14 1.53 4.48 4.48 0 0 0-7.86 3v1A10.66 10.66 0 0 1 3 4s-4 9 5 13a11.64 11.64 0 0 1-7 2c9 5 20 0 20-11.5a4.5 4.5 0 0 0-.08-.83A7.72 7.72 0 0 0 23 3z"></path></svg></Link></li>
            <li><Link className="inline-block px-3 text-gray-500 text-xs tracking-wider uppercase sm:text-sm" href="https://github.com/caelumpirata"  ><svg stroke="currentColor" fill="none" strokeWidth="2" viewBox="0 0 24 24" strokeLinecap="round" strokeLinejoin="round" className="text-xl" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg"><path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"></path></svg></Link></li>
            <li className="-mr-3"><Link className="inline-block px-3 text-gray-500 text-xs tracking-wider uppercase sm:text-sm" href="/feed.xml"><svg stroke="currentColor" fill="none" strokeWidth="2" viewBox="0 0 24 24" strokeLinecap="round" strokeLinejoin="round" className="text-xl" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg"><path d="M4 11a9 9 0 0 1 9 9"></path><path d="M4 4a16 16 0 0 1 16 16"></path><circle cx="5" cy="19" r="1"></circle></svg></Link></li>
          
          
          </ul>
        </div>
        {/* <p className="dark:text-gray-400 text-gray-500 hover:text-indigo-500 text-xs tracking-wide">
                        {viewCount} views
                    </p> */}
      </div>
    </footer>
  );
};

export default Footer;
