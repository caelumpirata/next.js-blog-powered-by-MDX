import '../styles/globals.css'
import { Analytics } from '@vercel/analytics/react';
import { Inter } from 'next/font/google'
import { ThemeProvider } from 'next-themes'


// import Script from 'next/script'

const inter = Inter({ subsets: ['latin'] })



export default function MyApp({ Component, pageProps }) {
  return (
    <main className={inter.className}> 
      {/* <Script
        id="adsbygoogle-init"
        strategy="lazyOnload"
        crossOrigin="anonymous"
        src= "https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-7278426684287328"
      /> */}
        <ThemeProvider attribute="class">
          <Component {...pageProps} />

        </ThemeProvider>
      <Analytics />
    </main>
  )
}