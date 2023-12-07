import { Inter } from "next/font/google";
import Header from "./header";
import Footer from "./footer";

const inter = Inter({ subsets: ["latin"] });

export default function Layout({ children }) {
  return (
    <>
    <Header />
      <main className={`${inter.className} flex flex-col min-h-screen`}>
        {children}
      </main>
      <Footer />
    </>
  );
}
