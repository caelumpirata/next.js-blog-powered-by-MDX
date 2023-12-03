import fs from "fs";
import matter from "gray-matter";
import { MDXRemote } from "next-mdx-remote";
import { serialize } from "next-mdx-remote/serialize";
import dynamic from "next/dynamic";
import Head from "next/head";
import Image from "next/image";
import Link from "next/link";
import path from "path";
import { postFilePaths, POSTS_PATH } from "../../utils/mdxUtils";
import Toggle from "@/components/Toggle";
import Footer from "../../components/Footer";
import Date from "@/components/Date";
import { useEffect, useState } from 'react';
import { Suspense } from "react";
import { useRouter } from 'next/router'; // Import the useRouter hook

// Custom components/renderers to pass to MDX.
// Since the MDX files aren't loaded by webpack, they have no knowledge of how
// to handle import statements. Instead, you must include components in scope
// here.
const components = {
  // It also works with dynamically-imported components, which is especially
  // useful for conditionally loading components for certain routes.
  // See the notes in README.md for more details.

  Head,
  Image,
  Link,
};

export const getStaticProps = async ({ params }) => {
  const postFilePath = path.join(POSTS_PATH, `${params.slug}.mdx`);
  const source = fs.readFileSync(postFilePath);

  const { content, data } = matter(source);

  const mdxSource = await serialize(content, {
    // Optionally pass remark/rehype plugins
    mdxOptions: {
      remarkPlugins: [],
      rehypePlugins: [],
    },
    scope: data,
  });

  return {
    props: {
      source: mdxSource,
      frontMatter: data,
    },
  };
};

export const getStaticPaths = async () => {
  const paths = postFilePaths
    // Remove file extensions for page paths
    .map((path) => path.replace(/\.mdx?$/, ""))
    // Map the path into the static paths object required by Next.js
    .map((slug) => ({ params: { slug } }));

  return {
    paths,
    fallback: false,
  };
};



export default function PostPage({ source, frontMatter }) {

// code for showing viewCount
  const router = useRouter();
  const { slug } = router.query; 

  const [viewCount, setViewCount] = useState(null);

  useEffect(() => {
    if (slug) {
      fetch(`/api/redis?id=/blog/${slug}`) // Pass the slug as an identifier to the API
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
    // <Layout>
    <div className="flex flex-col min-h-screen">
      <Head>
        <title>{frontMatter.title}</title>
        <meta name="description" content={frontMatter.description} key="desc" />
        <meta property="og:title" content={frontMatter.title} />
        <meta property="og:description" content={frontMatter.description} />
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
      {/* <header>
        <nav>
          <Link href="/" legacyBehavior>
            <a>👈 Go back home</a>
          </Link>
        </nav>
      </header> */}

      {/* <h1>{frontMatter.title}</h1>
            {frontMatter.description && (
              <p className="description">{frontMatter.description}</p>
            )} */}

      <main className="flex-grow">
        <article className="pt-16 sm:pt-24">
          <header>
            <div className="mx-auto max-w-2xl px-4 md:px-0">
              <div>
                <Link
                  className="dark:hover:text-gray-100 inline-flex items-center py-4 dark:text-gray-300 text-gray-500 hover:text-gray-700 text-sm sm:text-base"
                  href="/blog"
                >
                  <svg
                    stroke="currentColor"
                    fill="none"
                    strokeWidth="2"
                    viewBox="0 0 24 24"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    height="1em"
                    width="1em"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <line x1="19" y1="12" x2="5" y2="12"></line>
                    <polyline points="12 19 5 12 12 5"></polyline>
                  </svg>{" "}
                  <span className="ml-1">Blog</span>
                </Link>
              </div>
              <h1 className="mb-3 text-black dark:text-white text-3xl xs:text-4xl font-extrabold tracking-tight">
                {frontMatter.title}
              </h1>
              <div className="flex items-center justify-between">
                <time className="dark:text-gray-400 text-gray-500 xs:text-sm text-xs">
                  <Date dateString={frontMatter.date} />
                </time>
                
                  {/* <p className="dark:text-gray-400 text-gray-500 hover:text-indigo-500 text-xs tracking-wide ">
                    <Suspense fallback={<p>Loading view count...</p>}>{viewCount} 
                    </Suspense> views</p> */}
                    <p className="dark:text-gray-400 text-gray-500 hover:text-indigo-500 text-xs tracking-wide">
                        {viewCount} views
                    </p>
                
              </div>
            </div>
          </header>
          <div className="mx-auto max-w-2xl px-4 md:px-0 prose dark:prose-dark lg:prose-lg mt-8 sm:mt-12">
            <div>
              <MDXRemote {...source} components={components} />
            </div>
          </div>
        </article>
      </main>
    </div>
  );
}
