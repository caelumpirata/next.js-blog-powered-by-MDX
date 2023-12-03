import Link from "next/link";
import Head from "next/head";
import Toggle from "../components/Toggle";
import Footer from "../components/Footer";
import Date from "@/components/Date";
import fs from "fs";
import matter from "gray-matter";
import path from "path";
import { postFilePaths, POSTS_PATH } from "../utils/mdxUtils";

export function getStaticProps() {
  const posts = postFilePaths.map((filePath) => {
    const source = fs.readFileSync(path.join(POSTS_PATH, filePath));
    const { content, data } = matter(source);

    return {
      content,
      data,
      filePath,
    };
  });

  return { props: { posts } };
}

export default function Home({ posts }) {
  return (
    <>
      <Head>
        <title>Blog | Caelum Pirata</title>
        <meta
          name="description"
          content="Blog written by Caelum Pirata."
          key="desc"
        />
        <meta property="og:title" content="Blog | Caelum Pirata" />
        <meta
          property="og:description"
          content="Blog written by Caelum Pirata."
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
                className="dark:text-white dark:bg-gray-800 text-gray-700  bg-black bg-opacity-5 w-full px-6 py-2 inline-block text-center dark:hover:text-white hover:text-gray-700 hover:bg-black hover:bg-opacity-5 text-xs font-medium tracking-widest dark:hover:bg-gray-800 rounded cursor-pointer uppercase select-none"
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

      <main className="flex-grow">
        <div className="mx-auto max-w-2xl px-4 md:px-0 pt-16 sm:pt-24">
          <h1 className="text-black dark:text-white text-3xl font-extrabold tracking-tight sm:text-4xl">
            Blog
          </h1>
          <div>
            {posts.map((post) => (
              <Link
                className="block mt-8 p-4 bg-gray-100 dark:bg-gray-900 rounded-md sm:p-8"
                key={post.filePath}
                as={`/blog/${post.filePath.replace(/\.mdx?$/, "")}`}
                href={`/blog/[slug]`}
              >
                <div className="flex-col">
                  <time className="pb-2 dark:text-gray-400 text-gray-500 whitespace-nowrap text-sm">
                    <Date dateString={post.data.date} />
                  </time>
                  <h3 className="dark:text-white text-xl font-bold">
                    {post.data.title}{" "}
                  </h3>
                </div>
                <p className="mt-3 dark:text-gray-300 text-gray-600">
                  {post.data.description}
                </p>
              </Link>
            ))}
            {/* {posts.map((post) => (
              <Link className="block mt-8 p-4 bg-gray-100 dark:bg-gray-900 rounded-md sm:p-8" key={post.uuid} href={`/blog/${post.slug}`}>
                <div className="flex-col">
                    <time className="pb-2 dark:text-gray-400 text-gray-500 whitespace-nowrap text-sm"><Date dateString={post.published_at} /></time>
                    <h3 className="dark:text-white text-xl font-bold">{post.title} </h3>   
                </div>
                <p className="mt-3 dark:text-gray-300 text-gray-600">{post.excerpt}</p>
              </Link>
          ))} */}
          </div>
        </div>
      </main>
    </>
  );
}
