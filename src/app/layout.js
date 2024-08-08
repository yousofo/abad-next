import 'react-toastify/dist/ReactToastify.css';
import Header from "@/components/Header/Header";
import Footer from "@/components/Footer/Footer";
import { StateProvider } from "@/components/GlobalState/StateProvider";
import Authentication from "@/components/shared/auth/Authentication";
import NavList from "@/components/NavList/NavList";
import PopUps from "@/components/PopUps/PopUps";
import BrowserWarning from "@/components/shared/browser-support/BrowserWarning";
import { ToastContainer } from "react-toastify";
import Loader from "@/components/shared/Loader/Loader";
import "./globals.css";

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
      <body /*className={bukra.className}*/>
        <BrowserWarning />
        <StateProvider>
          <Loader />
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
