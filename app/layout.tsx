import './globals.css'
// import { Inter } from 'next/font/google'
import NavbarLayout from "@/Layouts/NavbarLayout"
import ModalLayout from "@/Layouts/ModalLayout"
import FooterLayout from "@/Layouts/FooterLayout"

import dynamic from 'next/dynamic';
 
const RecoilRootLayout = dynamic(() => import("@/Layouts/RecoilRootLayout"), {
  ssr: false,
});
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
        <RecoilRootLayout>
          <ModalLayout>
          <NavbarLayout>
            <FooterLayout>
              {children}
            </FooterLayout>
          </NavbarLayout>
          </ModalLayout>  
        </RecoilRootLayout>
      </body>
    </html>
  )}
