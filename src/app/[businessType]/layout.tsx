import type { Metadata } from 'next'
import {Inter, Kalam} from 'next/font/google'
import './../globals.css'
import Topbar from "@/components/Topbar";
import Navbar from "@/components/Navbar";

const kalam = Kalam({
    weight: ['400', '700'],
    style: ['normal'],
    subsets: ['latin']
})


export const metadata: Metadata = {
  title: 'Create Next App',
  description: 'Generated by create next app',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
      <html style={{background: "#F8F2E3"}} lang="pl">
      <body className={kalam.className}>
      <main>
          <Topbar/>
          <Navbar/>
          {children}
      </main>
      </body>
      </html>
  )
}
