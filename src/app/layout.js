import "./globals.css";
import Header from "@/components/Header/Header";
import Footer from "@/components/Footer/Footer";
import { StateProvider } from "@/components/GlobalState/StateProvider";
import Authentication from "@/components/shared/auth/Authentication";
import NavList from "@/components/NavList/NavList";
import PopUps from "@/components/PopUps/PopUps";

// import localFont from 'next/font/local'

// Font files can be colocated inside of `app`
// const bukra = localFont({
//   // src: [
//   //   {
//   //     path: './bukra/29LT-Bukra-regular.ttf',
//   //     weight: '400',
//   //     style: 'normal',
//   //   }
//   //   // {
//   //   //   path: './Roboto-Italic.woff2',
//   //   //   weight: '500',
//   //   //   style: 'medium',
//   //   // },
//   //   // {
//   //   //   path: './Roboto-Bold.woff2',
//   //   //   weight: '700',
//   //   //   style: 'bold',
//   //   // },
//   //   // {
//   //   //   path: './Roboto-BoldItalic.woff2',
//   //   //   weight: '700',
//   //   //   style: 'italic',
//   //   // },
//   // ],
//   display: 'swap'
// })

export const metadata = {
  title: "ABAD",
  description: "description for abad",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" dir="rtl">
      <body /*className={bukra.className}*/>
        <StateProvider>
          <Authentication />
          <NavList />
          <PopUps/>
          
          <Header />
          {children}
          <Footer />
        </StateProvider>
      </body>
    </html>
  );
}
