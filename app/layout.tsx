"use client"

import './globals.css'
// import { Inter } from 'next/font/google'
import NavbarLayout from "@/Layouts/NavbarLayout"
import ModalLayout from "@/Layouts/ModalLayout"
import {RecoilRoot} from "recoil"
import FooterLayout from "@/Layouts/FooterLayout"
// const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'InfoJobs: Advanced Search',
  description: 'Advanced search for InfoJobs',
}

export default function HomeLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body style={{position:"relative"}}>
        <RecoilRoot>
          <ModalLayout>
          <NavbarLayout>
            <FooterLayout>
              {children}
            </FooterLayout>
          </NavbarLayout>
          </ModalLayout>  
        </RecoilRoot>
      </body>
    </html>
  )}
