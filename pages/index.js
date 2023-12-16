import Link from "next/link";
import Head from "next/head";


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
      <article className="flex-grow">
        <div className="mx-auto max-w-2xl px-4 md:px-0 pt-12 sm:pt-24">
          <header className="flex flex-col-reverse justify-between sm:flex-row sm:items-center">
            <div className="sm:max-w-md">
              <h1 className="font-regular mt-4 text-black dark:text-white text-4xl tracking-tight sm:mt-0">
                Hey! <span>👋</span> This&apos;s <b>Caelum</b>
              </h1>
              <p className="prose dark:prose-dark md:prose-lg mt-8 sm:mt-4">
                Welcome to his Online home. He writes software, mostly for the
                open Web.
              </p>
            </div>
            {/* image content goes here */}
          </header>

          <div className="prose dark:prose-dark sm:prose-lg sm:mt-8">
            <p>
              This website is a place for him to publish ideas and lessons he
              learns while pursuing the things that peaks his curiosity.{" "}
              <Link href="/blog">His writing</Link> spans topics like software
              and designs.
            </p>
          </div>

          <section className="mt-20 sm:mt-24">
            <h3 className="mb-3 dark:text-gray-400 text-gray-500 tracking-wide uppercase">
              Technical Contributors
            </h3>
            <Link
              className="block mt-8 p-4 bg-gray-100 dark:bg-gray-900 rounded-md sm:p-8"
              href="https://waytocognition.info/"
            >
              {/* <div className="flex-col"> */}
              <h3 className="dark:text-white font-bold">@waytocognition</h3>
              {/* </div> */}
            </Link>

            <Link
              className="block mt-8 p-4 bg-gray-100 dark:bg-gray-900 rounded-md sm:p-8"
              href="https://github.com/knight0917"
            >
              <div className="flex-col">
                <h3 className="dark:text-white font-bold">@knight0917</h3>
              </div>
            </Link>
          </section>
        </div>
      </article>
    </>
  );
}
