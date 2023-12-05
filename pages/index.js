import Link from "next/link";
import Head from "next/head";
import Toggle from "../components/Toggle";

export default function Home() {
  return (
    <>
      <Head>
        <title>Caelum Pirata</title>
        <meta
          name="description"
          content="About Caelum Pirata. A Software engineer who loves Learning in public."
          key="desc"
        />
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
            {/* toggle in mobile view */}
            <Toggle className="flex items-center h-12 text-gray-700 dark:text-white" />
          </div>
          <ul className="hidden justify-between w-full md:flex">
            <li className="mx-1 w-1/4">
              <Link
                className="dark:text-white dark:bg-gray-800 text-gray-700  bg-black bg-opacity-5 w-full px-6 py-2 inline-block text-center dark:hover:text-white hover:text-gray-700 hover:bg-black hover:bg-opacity-5 text-xs font-medium tracking-widest dark:hover:bg-gray-800 rounded cursor-pointer uppercase select-none"
                href="/"
              >
                Home
              </Link>
            </li>
            {/* <li className="mx-1 w-1/4"><Link className="dark:text-white dark:bg-gray-800 text-gray-700  bg-black bg-opacity-5 w-full px-6 py-2 inline-block text-center dark:hover:text-white hover:text-gray-700 hover:bg-black hover:bg-opacity-5 text-xs font-medium tracking-widest dark:hover:bg-gray-800 rounded cursor-pointer uppercase select-none" href="/about">About</Link></li> */}
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
                className="dark:text-gray-400 bg-transparent text-gray-500 w-full px-6 py-2 inline-block text-center dark:hover:text-white hover:text-gray-700 hover:bg-black hover:bg-opacity-5 text-xs font-medium tracking-widest dark:hover:bg-gray-800 rounded cursor-pointer uppercase select-none"
                href="/projects"
              >
                Projects
              </Link>
            </li>
          </ul>
        </nav>
      </header>

      <title>Caelum Pirata</title>

      <main className="flex-grow">
        <div className="mx-auto max-w-2xl px-4 md:px-0 pt-12 sm:pt-24">
          <header className="flex flex-col-reverse justify-between sm:flex-row sm:items-center">
            <div className="sm:max-w-md">
              <h1 className="font-regular mt-4 text-black dark:text-white text-4xl tracking-tight sm:mt-0">
                Hey! <span>👋</span> I&apos;m <b>Caelum</b>
              </h1>
              <p className="prose dark:prose-dark md:prose-lg mt-8 sm:mt-4">
                Welcome to my Online home. I write software, mostly for the open
                Web.
              </p>
            </div>
            {/* image content goes here */}
          </header>

          <div className="prose dark:prose-dark sm:prose-lg sm:mt-8">
            <p >
              This website is a place for me to publish ideas and lessons I learn while pursuing the things that
              peak my curiosity. <Link href="/blog">My writing</Link> spans
              topics like software, designs and video editing.
            </p>

          </div>

          <section className="mt-20 sm:mt-24">
        <h3 className="mb-3 dark:text-gray-400 text-gray-500 tracking-wide uppercase">Technical Contributors</h3>
              <Link className="block mt-8 p-4 bg-gray-100 dark:bg-gray-900 rounded-md sm:p-8" href="https://waytocognition.info/">
                {/* <div className="flex-col"> */}
                    <h3 className="dark:text-white font-bold">@waytocognition</h3>   
                {/* </div> */}
              </Link>

              <Link className="block mt-8 p-4 bg-gray-100 dark:bg-gray-900 rounded-md sm:p-8" href="https://github.com/knight0917">
                <div className="flex-col">
                    <h3 className="dark:text-white font-bold">@knight0917</h3>   
                </div>
              </Link>
        </section>
        </div>
      </main>
    </>
  );
}
