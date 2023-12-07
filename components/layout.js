import { Inter } from "next/font/google";

const inter = Inter({ subsets: ["latin"] });

export default function Layout({ children }) {
  return (
    <>
      <main className={`${inter.className} flex flex-col min-h-screen`}>
        {children}
      </main>
    </>
  );
}
