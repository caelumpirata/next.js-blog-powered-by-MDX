import "../styles/globals.css";
import { ThemeProvider } from "next-themes";
import Layout from "@/components/layout";
import Head from "next/head";

export default function MyApp({ Component, pageProps }) {
  return (
      <ThemeProvider attribute="class">
        <Layout >
        <Head>
        <link rel="icon" type="image/webp" sizes="128x128" href="/trees.svg" />
      </Head>
          <Component {...pageProps} />
        </Layout>
      </ThemeProvider>
  );
}
