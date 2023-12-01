import Link from 'next/link'
import Date from '@/components/date';
import { getAllTags, getAllPostsByTagSlug, getTagBySlug } from '../../lib/ghost';
import Head from 'next/head';
import Toggle from '../../components/Toggle'  
import Footer from '../components/footer';


export async function getStaticPaths() {
  const tags = await getAllTags();
  const paths = tags.map(({ slug }) => ({ params: { slug } })); 
  return { paths, fallback: false };
}
  
export async function getStaticProps({ params }) {
  const { slug } = params;
  const posts = await getAllPostsByTagSlug(slug);
  const tagData = await getTagBySlug(slug)
  return { props: { posts, tagData } };
}

export default function Tag({ posts, tagData }) {
  return (
	<div className="flex flex-col min-h-screen">
      <Head>
          <title>{tagData.name}</title>
          <meta name="description" content={"A collection of posts tagged with "+ tagData.name} key="desc" />
          <meta property="og:title" content={tagData.name} />
          <meta
            property="og:description"
            content={"A collection of posts tagged with "+ tagData.name}
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
            {/* <li className="mx-1 w-1/4"><Link className="dark:text-gray-400 bg-transparent text-gray-500 w-full px-6 py-2 inline-block text-center dark:hover:text-white hover:text-gray-700 hover:bg-black hover:bg-opacity-5 text-xs font-medium tracking-widest dark:hover:bg-gray-800 rounded cursor-pointer uppercase select-none" href="/about">About</Link></li> */}
            <li className="mx-1 w-1/4"><Link className="dark:text-gray-400 bg-transparent text-gray-500 w-full px-6 py-2 inline-block text-center dark:hover:text-white hover:text-gray-700 hover:bg-black hover:bg-opacity-5 text-xs font-medium tracking-widest dark:hover:bg-gray-800 rounded cursor-pointer uppercase select-none" href="/blog">Blog</Link></li>
            <li className="mx-1 w-1/4"><Link className="dark:text-gray-400 bg-transparent text-gray-500 w-full px-6 py-2 inline-block text-center dark:hover:text-white hover:text-gray-700 hover:bg-black hover:bg-opacity-5 text-xs font-medium tracking-widest dark:hover:bg-gray-800 rounded cursor-pointer uppercase select-none" href="/projects">Projects</Link></li>
          </ul>
        </nav>
      </header>


      <main className="flex-grow">
      <div className="mx-auto max-w-2xl px-4 md:px-0 pt-16 sm:pt-24">
        <h1 className="text-black dark:text-white text-3xl font-extrabold tracking-tight sm:text-4xl">{tagData.name}</h1>
        <p className="mt-2 dark:text-gray-300 text-gray-500 text-lg sm:text-xl">A collection of {tagData.count.posts} posts</p>
        <div>
          {posts.map((post) => (
              <Link className="block mt-8 p-4 bg-gray-100 dark:bg-gray-900 rounded-md sm:p-8" key={post.uuid} href={`/blog/${post.slug}`}>
                <div className="flex-col">
                    <time className="pb-2 dark:text-gray-400 text-gray-500 whitespace-nowrap text-sm"><Date dateString={post.published_at} /></time>
                    <h3 className="dark:text-white text-xl font-bold">{post.title} </h3>   
                </div>
                <p className="mt-3 dark:text-gray-300 text-gray-600">{post.excerpt}</p>
              </Link>
          ))}
        </div>
      </div>
      </main>
    
      <Footer />
	  {/* <h1>{tagData.name}</h1>
	  <p>A collection of {tagData.count.posts} posts</p>
	  <ul>
        {posts.map((post) => (
          <li key={post.uuid}>
            <Link href={`/${post.slug}`}>
              {post.title}
            </Link>
          </li>
        ))}
      </ul> */}



	</div>
  )
}