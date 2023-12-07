import Link from "next/link";
import Toggle from "./Toggle";

export default function Header({ children }) {
  return (
    <header className="bg-gray-100/60 border-b border-gray-200 sticky-header dark:bg-gray-800/60 dark:border-gray-800">
      <nav className="mx-auto max-w-4xl md:px-2 md:py-2">
        <div className="md:hidden">
          {/* <div className="flex items-center h-12 text-gray-700 dark:text-white"> */}
          <Toggle className="flex items-center h-12 text-gray-700 dark:text-white" />
          {/* <button className="px-4 h-full" aria-label="Toggle Mobile Menu"><svg stroke="currentColor" fill="none" strokeWidth="2" viewBox="0 0 24 24" strokeLinecap="round" strokeLinejoin="round" height="16" width="16" xmlns="http://www.w3.org/2000/svg"><line x1="3" y1="12" x2="21" y2="12"></line><line x1="3" y1="6" x2="21" y2="6"></line><line x1="3" y1="18" x2="21" y2="18"></line></svg></button> */}
          {/* </div> */}
        </div>
        <ul className="hidden justify-between w-full md:flex">
          <li className="mx-1 w-1/4">
            <Link
              className="dark:text-gray-400 bg-transparent text-gray-500 w-full px-6 py-2 inline-block text-center dark:hover:text-white hover:text-gray-700 hover:bg-black hover:bg-opacity-5 text-xs font-medium tracking-widest dark:hover:bg-gray-800 rounded cursor-pointer uppercase select-none"
              href="/"
            >
              Home
            </Link>
          </li>
          {/* <li className="mx-1 w-1/4"><Link className="dark:text-gray-400 bg-transparent text-gray-500 w-full px-6 py-2 inline-block text-center dark:hover:text-white hover:text-gray-700 hover:bg-black hover:bg-opacity-5 text-xs font-medium tracking-widest dark:hover:bg-gray-800 rounded cursor-pointer uppercase select-none" href="/about">About</Link></li> */}
          <li className="mx-1 w-1/4">
            <Link
              className="dark:text-gray-400 bg-transparent text-gray-500 w-full px-6 py-2 inline-block text-center dark:hover:text-white hover:text-gray-700 hover:bg-black hover:bg-opacity-5 text-xs font-medium tracking-widest dark:hover:bg-gray-800 rounded cursor-pointer uppercase select-none"
              href="/blog"
            >
              Blog
            </Link>
          </li>
          <li className="mx-1 w-1/4">
            <Link
              className="dark:text-white dark:bg-gray-800 text-gray-700  bg-black bg-opacity-5 w-full px-6 py-2 inline-block text-center dark:hover:text-white hover:text-gray-700 hover:bg-black hover:bg-opacity-5 text-xs font-medium tracking-widest dark:hover:bg-gray-800 rounded cursor-pointer uppercase select-none"
              href="/projects"
            >
              Projects
            </Link>
          </li>
        </ul>
      </nav>
    </header>
  );
}
