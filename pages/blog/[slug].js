import Link from 'next/link'
import { getAllPosts, getPostBySlug } from '../../lib/ghost';
import Footer from '../components/footer';
import Date from '../../components/date';
import Head from 'next/head'
import Toggle from '../../components/Toggle'
import { useEffect, useState } from 'react';
// import Image from 'next/image';
// import { renderToStaticMarkup } from 'react-dom/server';



import { useRouter } from 'next/router'; // Import the useRouter hook

export async function getStaticPaths() {
  const posts = await getAllPosts();
  const paths = posts.map(({ slug }) => ({ params: { slug } }));
  return { paths, fallback: false };
}

export async function getStaticProps({ params }) {
  const { slug } = params;
  const data = await getPostBySlug(slug);
  return { props: { data } };
}



export default function Post({ data }) {
  const router = useRouter(); // Get the router instance

  //code for upstash view counter to get /dog from router 
  const { slug } = router.query; // Access the slug from router.query

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








  
  
  // Function to go back to the previous page
  const goBack = () => {
    router.back();
  };
  return (
    <div className="flex flex-col min-h-screen">
      <Head>
          <title>{data.meta_title}</title>
          <meta name="description" content={data.meta_description} key="desc" />
          <meta property="og:title" content={data.meta_title} />
          <meta
            property="og:description"
            content={data.excerpt}
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
            <li className="mx-1 w-1/4"><Link className="dark:text-white dark:bg-gray-800 text-gray-700  bg-black bg-opacity-5 w-full px-6 py-2 inline-block text-center dark:hover:text-white hover:text-gray-700 hover:bg-black hover:bg-opacity-5 text-xs font-medium tracking-widest dark:hover:bg-gray-800 rounded cursor-pointer uppercase select-none" href="/blog">Blog</Link></li>
            <li className="mx-1 w-1/4"><Link className="dark:text-gray-400 bg-transparent text-gray-500 w-full px-6 py-2 inline-block text-center dark:hover:text-white hover:text-gray-700 hover:bg-black hover:bg-opacity-5 text-xs font-medium tracking-widest dark:hover:bg-gray-800 rounded cursor-pointer uppercase select-none" href="/projects">Projects</Link></li>
          </ul>
        </nav>
      </header>

      <main className="flex-grow">
        <article className="pt-16 sm:pt-24"> 
            <header>
                <div className="mx-auto max-w-2xl px-4 md:px-0">
                <div><Link className="dark:hover:text-gray-100 inline-flex items-center py-4 dark:text-gray-300 text-gray-500 hover:text-gray-700 text-sm sm:text-base" href="/blog"><svg stroke="currentColor" fill="none" strokeWidth="2" viewBox="0 0 24 24" strokeLinecap="round" strokeLinejoin="round" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg"><line x1="19" y1="12" x2="5" y2="12"></line><polyline points="12 19 5 12 12 5"></polyline></svg> <span className="ml-1">Blog</span></Link></div>
                    <h1 className="mb-3 text-black dark:text-white text-3xl xs:text-4xl font-extrabold tracking-tight">{data.title}</h1>

                    <div className="flex items-center justify-between">
                        <time className="dark:text-gray-400 text-gray-500 xs:text-sm text-xs"><Date dateString={data.published_at} /></time>
                        <p className="dark:text-gray-400 text-gray-500 hover:text-indigo-500 text-xs tracking-wide ">{viewCount} views</p>
                    </div>

                    

                </div>
            </header>
            
            <div className="mx-auto max-w-2xl px-4 md:px-0 prose dark:prose-dark lg:prose-lg mt-8 sm:mt-12">
              
                <div>
                      {/* {data.tags.map((tag) => (
                        <Link key={tag.id} href={`/tag/${tag.slug}`}>
                          #{tag.name}
                        </Link>
                      ))} */}
  
                    <div dangerouslySetInnerHTML={{ __html: data.html }} />
                    {/* {content} */}
                    {/* <div dangerouslySetInnerHTML={{ __html: contentWithImages }} /> */}

                </div>
            </div>

        </article>


        
        <div className="mx-auto max-w-2xl px-4 md:px-0 mt-8">
          <div className="flex items-center justify-center pt-6 border-gray-300 dark:border-gray-700 ">
            <div>
                {data.tags.map((tag) => (
                  <Link className="mr-2 px-2 py-2 text-indigo-500 dark:text-indigo-500 xs:text-sm text-xs bg-indigo-100 dark:bg-gray-900 rounded-md lowercase" key={tag.id} href={`/tag/${tag.slug}`}>{tag.name}</Link> 
              ))}
            </div>
              {/* <Link className="dark:text-gray-400 text-gray-500 hover:text-indigo-500 text-xs tracking-wide uppercase" aria-label="twitter" href="https://twitter.com/intent/tweet?text=Never%20Setup%20A%20Development%20Environment%20From%20Scratch%20Again&amp;url=https%3A%2F%2Fjakewiesler.com%2Fblog%2Fportable-development-environment&amp;via=jakewies">tags</Link> */}
          </div>
        </div>
          

          {/* <div className="mx-auto max-w-2xl px-4 md:px-0 mt-16 sm:mt-24">
                <div className="flex flex-col items-center p-6 bg-gray-100 dark:bg-gray-900 rounded-md sm:flex-row sm:p-10"> */}
                      {/* IMAGE */}

                    {/* <div>
                      <h3 className="mt-4 text-center text-xl sm:mt-0 sm:text-left sm:text-2xl">Hey! <span>👋</span> I&apos;m <b>Caelum</b></h3><p className="mt-4 text-center leading-6 sm:text-left sm:text-lg">Thanks for reading! I <Link className="text-indigo-400 underline" href="/blog">write</Link> about software and building on the Web. Learn more about me <Link className="text-indigo-400 underline" href="/">here.</Link></p>
                      </div>
                </div> */}

          {/* </div> */}

  

      </main>
      <Footer />


        
        

    </div>
  );
}