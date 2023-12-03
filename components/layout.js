
import Footer from "./footer";
import { Inter } from "next/font/google";

const inter = Inter({ subsets: ["latin"] });


export default function Layout({ children }) {
  return (
    <>
      <div className={`${inter.className} flex flex-col min-h-screen`}>{children}</div>
      <Footer />
    </>
  );
}
