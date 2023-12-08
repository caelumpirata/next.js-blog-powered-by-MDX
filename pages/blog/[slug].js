import fs from "fs";
import matter from "gray-matter";
import { MDXRemote } from "next-mdx-remote";
import { serialize } from "next-mdx-remote/serialize";
import Head from "next/head";
import Image from "next/image";
import Link from "next/link";
import path from "path";
import { postFilePaths, POSTS_PATH } from "../../utils/mdxUtils";
import Date from "@/components/date";
import { useRouter } from "next/router"; // Import the useRouter hook
import useSWR from "swr";

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

    // Fetch view count using SWR
    const { query } = useRouter();
    const { slug } = query;

    const fetcher = (url) => fetch(url).then((res) => res.text());


    const { data: viewCount, error } = useSWR(
      slug ? `/api/redis?id=/blog/${slug}` : null, // Pass the slug as an identifier to the API
      fetcher
    );
  
    if (error) {
      console.error("Error fetching data:", error);
    }

  return (
    <>
      <Head>
        <title>{frontMatter.title}</title>
        <meta name="description" content={frontMatter.description} key="desc" />
        <meta property="og:title" content={frontMatter.title} />
        <meta property="og:description" content={frontMatter.description} />
      </Head>

      <article className="pt-16 sm:pt-24 flex-grow">
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
    </>
  );
}
