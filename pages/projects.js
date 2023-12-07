import Link from "next/link";
import Head from "next/head";

export default function Home({ posts }) {
  return (
    <>
      <Head>
        <title>Projects | Caelum Pirata</title>
        <meta
          name="description"
          content="Projects by Caelum Pirata. A Software engineer who loves to code."
          key="desc"
        />
        <meta property="og:title" content="Projects | Caelum Pirata" />
        <meta
          property="og:description"
          content="Projects by Caelum Pirata.
            A Software engineer who loves to code."
        />
      </Head>

      <article className="flex-grow">
        <div className="mx-auto max-w-2xl px-4 md:px-0 pt-16 sm:pt-24">
          <h1 className="text-black dark:text-white text-3xl font-extrabold tracking-tight sm:text-4xl">
            Projects
          </h1>

          <div className="prose dark:prose-dark sm:prose-lg">
            <p className="mt-2 dark:text-gray-300 text-gray-500 text-lg sm:text-xl">
              My personal projects are on&nbsp;
              <Link
                href="https://github.com/caelumpirata"
                target="_blank"
                rel="noreferrer"
              >
                GitHub
              </Link>
              .
            </p>
          </div>

          <div>
            <Link
              className="block mt-8 p-4 bg-gray-100 dark:bg-gray-900 rounded-md sm:p-8"
              href=""
            >
              <div className="flex-col">
                {/* <h3 className="dark:text-white text-xl font-bold">GitHub - @caelumpirata</h3>    */}
              </div>
            </Link>
            <Link
              className="block mt-8 p-4 bg-gray-100 dark:bg-gray-900 rounded-md sm:p-8"
              href=""
            >
              <div className="flex-col">
                {/* <h3 className="dark:text-white text-xl font-bold">Instagram - @caelumpirata</h3>    */}
              </div>
            </Link>
            <Link
              className="block mt-8 p-4 bg-gray-100 dark:bg-gray-900 rounded-md sm:p-8"
              href=""
            >
              <div className="flex-col">
                {/* <h3 className="dark:text-white text-xl font-bold">twitter - @caelumpirata</h3>    */}
              </div>
            </Link>
          </div>
        </div>
      </article>
    </>
  );
}
