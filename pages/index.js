import Link from 'next/link'
import { getAllPosts } from '../lib/ghost';
import Date from '../components/date';
import Head from 'next/head';
import Toggle from '../components/Toggle'
import Footer from './components/footer';

import fs from 'fs'
import matter from 'gray-matter'
import path from 'path'
import Layout from '../components/Layout'
import { postFilePaths, POSTS_PATH } from '../utils/mdxUtils'



export function getStaticProps() {
  const posts = postFilePaths.map((filePath) => {
    const source = fs.readFileSync(path.join(POSTS_PATH, filePath))
    const { content, data } = matter(source)

    return {
      content,
      data,
      filePath,
    }
  })

  return { props: { posts } }
}

export default function Home({ posts }) {
  return (
    <div className="flex flex-col min-h-screen">
      <Head>
          <title>Caelum Pirata</title>
          <meta name="description" content="Caelum Pirata, A Software engineer who loves learning in public."key="desc" />
          <meta property="og:title" content="Caelum Pirata" />
          <meta
            property="og:description"
            content="Caelum Pirata, A Software engineer who loves learning in public."
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
            <li className="mx-1 w-1/4"><Link className="dark:text-white dark:bg-gray-800 text-gray-700  bg-black bg-opacity-5 w-full px-6 py-2 inline-block text-center dark:hover:text-white hover:text-gray-700 hover:bg-black hover:bg-opacity-5 text-xs font-medium tracking-widest dark:hover:bg-gray-800 rounded cursor-pointer uppercase select-none" href="/">Home</Link></li>
            {/* <li className="mx-1 w-1/4"><Link className="dark:text-gray-400 bg-transparent text-gray-500 w-full px-6 py-2 inline-block text-center dark:hover:text-white hover:text-gray-700 hover:bg-black hover:bg-opacity-5 text-xs font-medium tracking-widest dark:hover:bg-gray-800 rounded cursor-pointer uppercase select-none" href="/about">About</Link></li> */}
            <li className="mx-1 w-1/4"><Link className="dark:text-gray-400 bg-transparent text-gray-500 w-full px-6 py-2 inline-block text-center dark:hover:text-white hover:text-gray-700 hover:bg-black hover:bg-opacity-5 text-xs font-medium tracking-widest dark:hover:bg-gray-800 rounded cursor-pointer uppercase select-none" href="/blog">Blog</Link></li>
            <li className="mx-1 w-1/4"><Link className="dark:text-gray-400 bg-transparent text-gray-500 w-full px-6 py-2 inline-block text-center dark:hover:text-white hover:text-gray-700 hover:bg-black hover:bg-opacity-5 text-xs font-medium tracking-widest dark:hover:bg-gray-800 rounded cursor-pointer uppercase select-none" href="/projects">Projects</Link></li>
          </ul>
        </nav>
      </header>

      <title>Caelum Pirata</title>

    <main className="flex-grow">
        <div className="mx-auto max-w-2xl px-4 md:px-0 ">
          <div className="mt-16 sm:mt-32 sm:pb-8">
            <h1 className="text-black dark:text-white text-3xl xs:text-4xl font-extrabold tracking-tight">👋 caelumpirata, online</h1>
          <p className="mt-2 dark:text-gray-300 text-gray-500 text-lg sm:text-xl">CSE Grad.</p>
        </div>


        <section className="mt-20 sm:mt-24">
          {/* <h3 className="mb-3 dark:text-gray-400 text-gray-500 tracking-wide uppercase">
            Me in 7 Seconds
          </h3> */}
          <div className="prose dark:prose-dark sm:prose-lg">
            <p>I write&nbsp;
              <Link href="https://github.com/caelumpirata" target="_blank" rel="noreferrer">
                software</Link>. Mostly for the open Web. I&apos;m currently building user interfaces with <Link href="https://vaadin.com/" target="_blank" rel="noreferrer">Vaadin</Link> or&nbsp;
                <Link href="https://nextjs.org/" target="_blank" rel="noreferrer">Next.js</Link>.
                
                Also, I&apos;m all about&nbsp;
                <Link href="https://en.wikipedia.org/wiki/DevOps" target="_blank" rel="noreferrer">DevOps</Link> and making apps work smoothly with Kubernetes.
              </p>
            {/* <p><Link href="/blog">I publish articles on my blog.</Link> about all the cool stuff I&apos;m learning. If it&apos;s really cool stuff, <Link href="https://www.youtube.com/@caelumpirata" target="_blank" rel="noreferrer">I do not make YouTube videos</Link>.</p><p>Learning in public is the driving force behind my creative endeavors.</p> */}
          </div>
          {/* <div className="mt-8">
            <Link className="px-6 py-3 text-white text-xs font-medium tracking-wider bg-black dark:bg-indigo-800 rounded-md disabled:opacity-30 uppercase" href="/about">
              More About Me
            </Link>
          </div> */}
        </section>


        <section className="mt-20 sm:mt-24"><h3 className="mb-3 dark:text-gray-400 text-gray-500 tracking-wide uppercase">Latest Posts</h3>
              {/* {posts.((post) => (
                    <Link className="flex flex-col-reverse justify-between py-4 border-b border-gray-200 dark:border-gray-800 sm:flex-row sm:items-baseline" key={post.uuid}  href={`/blog/${post.slug}`}>
                      <h3 className="mt-1 dark:text-white font-bold sm:mt-0">{post.title}</h3>
                      <time className="dark:text-gray-400 text-gray-500 whitespace-nowrap text-sm sm:pl-3" ><Date dateString={post.published_at} /></time> 
                    </Link>
              ))} */}

{posts.map((post) => (
            <Link className="flex flex-col-reverse justify-between py-4 border-b border-gray-200 dark:border-gray-800 sm:flex-row sm:items-baseline"
             key={post.filePath}
              as={`/posts/${post.filePath.replace(/\.mdx?$/, '')}`}
              href={`/posts/[slug]`}
            >
              <h3 className="mt-1 dark:text-white font-bold sm:mt-0">{post.data.title}</h3>
              
            </Link>
        ))}
              
              {/* <div className="flex mt-6"><Link className="px-6 py-3 text-white text-xs font-medium tracking-wider bg-black dark:bg-indigo-800 rounded-md disabled:opacity-30 uppercase" href="/blog">View All Posts</Link></div> */}
        </section>

              
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
    <Footer />
    </div>
    
  );
} 

