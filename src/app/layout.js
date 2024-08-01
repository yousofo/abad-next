import "./globals.css";
import Header from "@/components/Header/Header";
import Footer from "@/components/Footer/Footer";
import { StateProvider } from "@/components/GlobalState/StateProvider";
import Authentication from "@/components/shared/auth/Authentication";
import NavList from "@/components/NavList/NavList";
import PopUps from "@/components/PopUps/PopUps";
import BrowserWarning from "@/components/shared/browser-support/BrowserWarning";
import Script from 'next/script'
import { ToastContainer } from "react-toastify";

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
  title: "ABAD | آباد للتدريب",
  description: "معهد شبكة آباد للتدريب من المعاهد الرائدة في تقديم الدورات التطويرية المتخصصة في تقنية المعلومات.",
  keywords: [
    "معهد شبكة أباد في الرياض الذي يُعتبر الأفضل لتدريب وتعليم دورات تقنية المعلومات",
    " شبكات",
    " وأمان المعلومات في المملكة العربية السعودية. يُقدم المعهد مجموعة واسعة من الدورات",
    " بما في ذلك Cisco",
    " Microsoft",
    " CCNA",
    " CCNP",
    " CCIE",
    " MCSA",
    " صيانة الحاسوب والدعم الفني",
    " وأمان المعلومات مع تركيز على سيبر سيكيورتي وشهادة Security Plus. يقدم المعهد شهادات احترافية ومعتمدة في مجالات الشبكات وأمان المعلومات",
    " مما يساعد الطلاب على تعزيز مهاراتهم والاعتراف بخبراتهم من قبل الصناعة. التدريب يشمل جوانب عملية على رواترات وسويتشات",
    " Security Plus",
    " ITIL",
    " اختبارات CCNA وITIL",
    " إدارة المشاريع PMP عن بعد",
    " eLearn",
    " CEH (Certified Ethical Hacker)",
    " اختراق الشبكات والجوال",
    " شركة EC-Council",
    " فايروول",
    " CCNP Security",
    " تطبيقات عملية في داتا سينتر وكلاود أون لاين",
    " وإدارة وحماية السيرفرات حضوريًا في الرياض. توفير الدورات في مجال أمان المعلومات والسايبر سيكيورتي لجميع التخصصات",
    " بالإضافة إلى دورات في برمجة الويب باستخدام ASP.NET و Oracle",
    " ولغات البرمجة C# و Java",
    " والتعامل مع قواعد البيانات باستخدام SQL و Oracle.تمدة في وظائف تقنية المعلومات أمن الشبكات"
  ]
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" dir="rtl">
      {/* <head>
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
      </head> */}
      <body /*className={bukra.className}*/>
        <BrowserWarning />
        <StateProvider>
          <Authentication />
          <NavList />
          <ToastContainer />
          <PopUps />
          <Header />
          {children}
          <Footer />
        </StateProvider>
      </body>
    </html>
  );
}
