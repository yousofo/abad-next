import "./globals.css";
import Header from "@/components/Header/Header";
import Footer from "@/components/Footer/Footer";
import { StateProvider } from "@/components/GlobalState/StateProvider";
import Authentication from "@/components/shared/auth/Authentication";
import NavList from "@/components/NavList/NavList";
import PopUps from "@/components/PopUps/PopUps";
import BrowserWarning from "@/components/shared/browser-support/BrowserWarning";
import CustomHead from "@/components/Head/Head";
import Script from 'next/script'

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
      <head>
      <Script id="borwserCheckingScript" strategy="beforeInteractive">
          {`(
          function() {
            function getBrowserInfo() {
              var userAgent = navigator.userAgent;
              var browserName = "Unknown";
              var browserVersion = "Unknown";
              var match;

              if (/MSIE|Trident/.test(userAgent)) {
                browserName = "Internet Explorer";
                match = userAgent.match(/(MSIE |rv:)(\\d+\\.\\d+)/);
                if (match && match.length > 2) {
                  browserVersion = match[2];
                }
              } else if (/Chrome/.test(userAgent) && !/Edge/.test(userAgent)) {
                browserName = "Chrome";
                match = userAgent.match(/Chrome\\/(\\d+\\.\\d+)/);
                if (match && match.length > 1) {
                  browserVersion = match[1];
                }
              } else if (/Firefox/.test(userAgent)) {
                browserName = "Firefox";
                match = userAgent.match(/Firefox\\/(\\d+\\.\\d+)/);
                if (match && match.length > 1) {
                  browserVersion = match[1];
                }
              } else if (/Safari/.test(userAgent) && !/Chrome/.test(userAgent)) {
                browserName = "Safari";
                match = userAgent.match(/Version\\/(\\d+\\.\\d+)/);
                if (match && match.length > 1) {
                  browserVersion = match[1];
                }
              } else if (/Edge/.test(userAgent)) {
                browserName = "Edge";
                match = userAgent.match(/Edge\\/(\\d+\\.\\d+)/);
                if (match && match.length > 1) {
                  browserVersion = match[1];
                }
              }

              return { browserName: browserName, browserVersion: browserVersion };
            }

            var browserInfo = getBrowserInfo();
            var browserName = browserInfo.browserName;
            var browserVersion = browserInfo.browserVersion;

            var outdatedBrowsers = {
              "Internet Explorer": "11",
              "Safari": "11",
              "Chrome": "60",
              "Firefox": "54",
              "Edge": "15"
            };

            if (outdatedBrowsers[browserName] && parseFloat(browserVersion) < parseFloat(outdatedBrowsers[browserName])) {
              alert('انت تستخدم ' + browserName + ' ' + browserVersion + '. يجب استخدام متصفح حديث ');
            }
          }
        )()`}
        </Script>
      </head>
      <body /*className={bukra.className}*/>
        
        <StateProvider>
          <Authentication />
          <NavList />
          <PopUps />
          <Header />
          {children}
          <Footer />
        </StateProvider>
      </body>
    </html>
  );
}
