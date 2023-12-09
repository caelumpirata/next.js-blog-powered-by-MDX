import "../styles/globals.css";
import { ThemeProvider } from "next-themes";
import Layout from "@/components/layout";
import Head from "next/head";
import { SpeedInsights } from '@vercel/speed-insights/next';
import { Analytics } from '@vercel/analytics/react';


export default function MyApp({ Component, pageProps }) {
  return (
    <ThemeProvider attribute="class">
      <Layout>
        <Head>
          <link
            rel="icon"
            type="image/webp"
            sizes="128x128"
            href="/favicon.png"
          />
        </Head>
        <Component {...pageProps} />
        <Analytics />
        <SpeedInsights />
      </Layout>
    </ThemeProvider>
  );
}
