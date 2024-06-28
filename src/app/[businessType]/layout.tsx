import type { Metadata } from 'next'
import {Kalam} from 'next/font/google'
import './../globals.css'
import Topbar from "@/components/Topbar";
import Navbar from "@/components/Navbar";
import Providers from "@/Providers";
import Footer from "@/components/Footer";

const kalam = Kalam({
    weight: ['400', '700'],
    style: ['normal'],
    subsets: ['latin']
})


export const metadata: Metadata = {
  title: 'Misiobazik',
  description: 'Niepubliczny żłobek i przedszkole Misiobazik',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
      <html style={{background: "#F8F2E3"}} lang="pl">
      <body className={kalam.className}>
      <div id="read-more-modal"></div>
          <Providers>
              <Topbar/>
              <Navbar/>
              <main>
                  {children}
              </main>
              <Footer/>
          </Providers>
      </body>
      </html>
  )
}
