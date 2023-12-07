import Link from "next/link";
import Head from "next/head";

import Date from "@/components/date";
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


      <article className="flex-grow">
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
      </article>
    </>
  );
}
