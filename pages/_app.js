import '../styles/globals.css'
import { Inter } from 'next/font/google'
import { ThemeProvider } from 'next-themes'


// import Script from 'next/script'

const inter = Inter({ subsets: ['latin'] })



export default function MyApp({ Component, pageProps }) {
  return (
    <main className={inter.className}> 
        <ThemeProvider attribute="class">
          <Component {...pageProps} />
        </ThemeProvider>
    </main>
  )
}