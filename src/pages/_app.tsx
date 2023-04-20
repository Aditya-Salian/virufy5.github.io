import { type AppProps } from "next/app";
import "~/styles/globals.css";
import Navbar from "~/components/organisms/Navbar/Navbar";
import Footer from "~/components/organisms/Footer/Footer";

import { Montserrat } from "next/font/google";

const montserrat = Montserrat({
  subsets: ["latin"],
  variable: "--font-montserrat",
});

export default function App({ Component, pageProps }: AppProps) {
  return (
    <main className={`${montserrat.variable} font-sans`}>
      <Navbar />
      <div className="flex justify-center">
        <div className="max-w-[1440px]">
          <Component {...pageProps} />
        </div>
      </div>
      <Footer />
    </main>
  );
}
