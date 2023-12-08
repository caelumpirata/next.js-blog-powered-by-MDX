import Link from "next/link";
import Head from "next/head";
import swr from "swr";
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
            {posts.map((post) => {
              const slug = post.filePath.replace(/\.mdx?$/, "");

              const fetcher = (url) => fetch(url).then((res) => res.text());
              const { data: viewCount, error } = swr(
                `/api/redisGet?id=/blog/${slug}`,
                fetcher
              );

              if (error) {
                console.error("Error fetching data:", error);
              }

              return (
                <Link
                  className="block mt-8 p-4 bg-gray-100 dark:bg-gray-900 rounded-md sm:p-8"
                  key={post.filePath}
                  as={`/blog/${slug}`}
                  href="/blog/[slug]"
                >
                  <div className="flex-col">
                  <div className="flex items-center justify-between">

                    <time className="pb-2 dark:text-gray-400 text-gray-500 whitespace-nowrap text-sm">
                      <Date dateString={post.data.date} />
                    </time>
                    <p className="text-gray-500 dark:text-gray-500 text-xs">{viewCount} views</p>
                    </div>
                    <h3 className="dark:text-white text-xl font-bold">
                      {post.data.title}
                    </h3>
                  </div>
                  <p className="mt-3 dark:text-gray-300 text-gray-600">
                    {post.data.description}
                  </p>
                  {/* {viewCount && <p>{viewCount}</p>} */}
                </Link>
              );
            })}
          </div>
        </div>
      </article>
    </>
  );
}
