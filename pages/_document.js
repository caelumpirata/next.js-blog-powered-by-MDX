import { Html, Head, Main, NextScript } from 'next/document'
import Script from 'next/script'


export default function Document() {
  return (
    <Html lang="en">
      <Head>
      <link rel="icon" type="image/webp" sizes="128x128" href="/favicon.png" />
      <Script async src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-7278426684287328"
           crossOrigin="anonymous"></Script>
      </Head>
      <body className='antialiased'>
        <Main />
        <NextScript />
      </body>

    </Html>
  )
}
