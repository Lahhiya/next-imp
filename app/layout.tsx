import type { Metadata } from "next";
import { Geist, Geist_Mono,Lato,Google_Sans} from "next/font/google";
import "./globals.css";
import Navbar from "./component/Navbar";

// const geistSans = Geist({
//   variable: "--font-geist-sans",
//   subsets: ["latin"],
// });

// const geistMono = Geist_Mono({
//   variable: "--font-geist-mono",
//   subsets: ["latin"],
// });
const lato = Lato({
  variable: "--font-lato",
  subsets: ["latin"],
  weight: ["100", "300", "400", "700", "900"],
})
const googleSans = Google_Sans({
  variable: "--font-google-sans",
  subsets: ["latin"],
  weight: [ "400","500","700"],
})

export const metadata: Metadata = {
  title: "entah jir",
  description: "lorem ipsum dolor sit amet consectetur adipisicing elit",
};


export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`antialiased relative ${googleSans.className} ${lato.className} bg-slate-200`}>
        <Navbar />
        {children}
      </body>
    </html>
  );
}
