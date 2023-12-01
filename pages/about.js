import Link from 'next/link'
import Footer from '../components/footer';
import Head from 'next/head';
import Toggle from '../components/Toggle'

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen">
      <Head>
          <title>About | Caelum Pirata</title>
          <meta name="description" content="About Caelum Pirata. A Software engineer who loves Learning in public."key="desc" />
          <meta property="og:title" content="About | Caelum Pirata" />
          <meta
            property="og:description"
            content="About Caelum Pirata.
            A Software engineer who loves Learning in public."
          />
      </Head>
      <header className="bg-gray-100/60 border-b border-gray-200 sticky-header dark:bg-gray-800/60 dark:border-gray-800">
        <nav className="mx-auto max-w-4xl md:px-2 md:py-2">
        <div className="md:hidden">
          
          {/* <div className="flex items-center h-12 text-gray-700 dark:text-white"> */}
            <Toggle className="flex items-center h-12 text-gray-700 dark:text-white" />
            {/* <button className="px-4 h-full" aria-label="Toggle Mobile Menu"><svg stroke="currentColor" fill="none" strokeWidth="2" viewBox="0 0 24 24" strokeLinecap="round" strokeLinejoin="round" height="16" width="16" xmlns="http://www.w3.org/2000/svg"><line x1="3" y1="12" x2="21" y2="12"></line><line x1="3" y1="6" x2="21" y2="6"></line><line x1="3" y1="18" x2="21" y2="18"></line></svg></button> */}
          {/* </div> */}
         
        </div>
          <ul className="hidden justify-between w-full md:flex">
            <li className="mx-1 w-1/4"><Link className="dark:text-gray-400 bg-transparent text-gray-500 w-full px-6 py-2 inline-block text-center dark:hover:text-white hover:text-gray-700 hover:bg-black hover:bg-opacity-5 text-xs font-medium tracking-widest dark:hover:bg-gray-800 rounded cursor-pointer uppercase select-none" href="/">Home</Link></li>
            {/* <li className="mx-1 w-1/4"><Link className="dark:text-white dark:bg-gray-800 text-gray-700  bg-black bg-opacity-5 w-full px-6 py-2 inline-block text-center dark:hover:text-white hover:text-gray-700 hover:bg-black hover:bg-opacity-5 text-xs font-medium tracking-widest dark:hover:bg-gray-800 rounded cursor-pointer uppercase select-none" href="/about">About</Link></li> */}
            <li className="mx-1 w-1/4"><Link className="dark:text-gray-400 bg-transparent text-gray-500 w-full px-6 py-2 inline-block text-center dark:hover:text-white hover:text-gray-700 hover:bg-black hover:bg-opacity-5 text-xs font-medium tracking-widest dark:hover:bg-gray-800 rounded cursor-pointer uppercase select-none" href="/blog">Blog</Link></li>
            <li className="mx-1 w-1/4"><Link className="dark:text-gray-400 bg-transparent text-gray-500 w-full px-6 py-2 inline-block text-center dark:hover:text-white hover:text-gray-700 hover:bg-black hover:bg-opacity-5 text-xs font-medium tracking-widest dark:hover:bg-gray-800 rounded cursor-pointer uppercase select-none" href="/projects">Projects</Link></li>
          </ul>
        </nav>
      </header>

      <title>About | Caelum Pirata</title>
    
      <main className="flex-grow">
      <div className="mx-auto max-w-2xl px-4 md:px-0 pt-12 sm:pt-24">
        <header className="flex flex-col-reverse justify-between sm:flex-row sm:items-center"> 
        <div className="sm:max-w-md"><h1 className="font-regular mt-4 text-black dark:text-white text-4xl tracking-tight sm:mt-0">Hey! <span>👋</span> I&apos;m <b>Caelum</b></h1><p className="prose dark:prose-dark md:prose-lg mt-8 sm:mt-4">Welcome to my Online home. I write software, mostly for the open Web, and I deeply value the art of learning in public.</p></div>
 {/* image content goes here */}
        </header>

        <div className="prose dark:prose-dark sm:prose-lg sm:mt-8">
          <p>This website is a place for me to scratch the writer&apos;s itch. I publish ideas and lessons I learn while pursuing the things that peak my curiosity. <Link href="/blog">My writing</Link> spans topics like software, designs and video editing.</p>
          {/* <p><Link href="https://www.youtube.com/@caelumpirata" target="_blank" rel="noreferrer">On my YouTube channel</Link> I do not dive deeper into these topics in the form of programming sessions, livestreams and tutorials.</p> */}
          </div>

        {/* <div className="my-8"><div className="relative p-6 bg-gray-100 dark:bg-gray-900 rounded-md sm:p-10"><div><div className="mb-6 text-center sm:mb-10"><h3 className="text-center text-gray-800 dark:text-white xs:text-2xl text-xl font-extrabold tracking-tight sm:text-3xl">Subscribe To Original Copy</h3><p className="mt-2 dark:text-gray-300 text-gray-600 xs:text-lg sm:text-xl">A weekly email for makers on the Web.</p></div><form className="flex flex-col">
          <input className="placeholder-gray-400 dark:focus:border-gray-300 bg-gray-200 dark:bg-gray-700 focus:border-gray-500 border-transparent rounded-md focus:ring-0" type="email" name="email" placeholder="hello@caelumpirata.com" />
            <button className="mt-4 px-6 py-3 text-white text-xs font-medium tracking-wider bg-black dark:bg-indigo-800 rounded-md disabled:opacity-30 uppercase" type="submit">Subscribe</button></form><Link className="block mt-4 text-center dark:text-gray-400 text-gray-500 underline text-xs" href="/projects">Learn More</Link></div></div>
        </div> */}

      </div>
    </main>
    <Footer />

    </div>
  );
} 