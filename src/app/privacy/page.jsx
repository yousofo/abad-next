import React from "react";

const page = () => {
  return (
    <main>
      {/* HERO start  */}
      <section className="hero h-dvh md:min-h-[600px] md:h-auto relative">
        <div className="intro text-center absolute flex flex-col items-center justify-center gap-4 md:gap-6 text-white w-max max-w-full px-4">
          <h2 className="text-2xl font-medium md:text-3xl lg:text-4xl xl:text-5xl max-w-60 sm:max-w-fit">
            <span className="text-abad-gold whitespace-nowrap"> الخصوصية</span>
            <span>والاستخدام</span>
          </h2>
        </div>
        <div className="back-shape overflow-hidden w-full relative -z-10 h-full md:min-h-[600px] md:h-auto">
          <img
            className="w-full h-full md:h-auto object-cover md:min-h-[600px]"
            src="/media/BackgroundHero_rect.png"
            alt=""
          />
          <img
            className="md:w-36 w-20 absolute top-[8vh]  md:top-[10vh] right-0 "
            src="/media/hero-rectangle.png"
            alt=""
          />
        </div>
      </section>
      {/* HERO end  */}
      <section className="flex flex-col md:flex-row gap-16 w-full px-8 max-w-screen-xl -mt-8 sm:-mt-0 mx-auto mb-8">
        <nav
          className="flex flex-col p-6 gap-8 w-max h-fit mx-auto text-[#8A8394]"
          style={{ boxShadow: "5px 4px 25px 0px #00000014" }}
        >
          <a href="" className="text-[#260E3F]">
            شروط الخدمة
          </a>
          <a href="">سياسة الخصوصية</a>
          <a href="">سياسة الملكية الفكرية</a>
          <a href="">اتفاقية الخدمات الرئيسية</a>
          <a href="">سياسة العروض الترويجية</a>
        </nav>
        <article className="flex-1 flex flex-col gap-8 text-[#151318] font-medium md:text-lg">
          <h2 className="font-bold text-2xl md:text-[42px]">شروط الخدمة</h2>
          <p>
            هناك حقيقة مثبتة منذ زمن طويل وهي أن المحتوى المقروء لصفحة ما سيلهي
            القارئ عن التركيز على الشكل الخارجي للنص أو شكل توضع الفقرات في
            الصفحة التي يقرأها. ولذلك يتم استخدام طريقة لوريم إيبسوم لأنها تعطي
            توزيعاَ طبيعياَ -إلى حد ما- للأحرف عوضاً عن استخدام "هنا يوجد محتوى
            نصي، هنا يوجد محتوى نصي" فتجعلها تبدو (أي الأحرف) وكأنها نص مقروء.
            العديد من
          </p>
          <h6>1. الحسابات </h6>
          <p>
            هنالك العديد من الأنواع المتوفرة لنصوص لوريم إيبسوم، ولكن الغالبية
            تم تعديلها بشكل ما عبر إدخال بعض النوادر أو الكلمات العشوائية إلى
            النص. إن كنت تريد أن تستخدم نص لوريم إيبسوم ما، عليك أن تتحقق أولاً
            أن ليس هناك أي كلمات أو عبارات محرجة أو غير لائقة مخبأة في هذا النص.
            بينما تعمل جميع مولّدات نصوص لوريم إيبسوم على الإنترنت على إعادة
            تكرار مقاطع من نص لوريم إيبسوم نفسه عدة مرات بما تتطلبه الحاجة، يقوم
            مولّدنا هذا باستخدام كلمات من قاموس يحوي على أكثر من 200 كلمة لا
            تينية، مضاف إليها مجموعة من الجمل النموذجية، لتكوين نص لوريم إيبسوم
            ذو شكل منطقي قريب
          </p>
          <h6>2. تسجيل المحتوى والوصول إليه مدى الحياة</h6>
          <p>
            هنالك العديد من الأنواع المتوفرة لنصوص لوريم إيبسوم، ولكن الغالبية
            تم تعديلها بشكل ما عبر إدخال بعض النوادر أو الكلمات العشوائية إلى
            النص. إن كنت تريد أن تستخدم نص لوريم إيبسوم ما، عليك أن تتحقق أولاً
            أن ليس هناك أي كلمات أو عبارات محرجة أو غير لائقة مخبأة في هذا النص.
            بينما تعمل جميع مولّدات نصوص لوريم إيبسوم على الإنترنت على إعادة
            تكرار مقاطع من نص لوريم إيبسوم نفسه عدة مرات بما تتطلبه الحاجة، يقوم
            مولّدنا هذا باستخدام كلمات من قاموس يحوي على أكثر من 200 كلمة لا
            تينية، مضاف إليها مجموعة من الجمل النموذجية، لتكوين نص لوريم إيبسوم
            ذو شكل منطقي قريب
          </p>
          <h6>3. المدفوعات والاعتمادات والمبالغ المستردة</h6>
          <p>
            هنالك العديد من الأنواع المتوفرة لنصوص لوريم إيبسوم، ولكن الغالبية
            تم تعديلها بشكل ما عبر إدخال بعض النوادر أو الكلمات العشوائية إلى
            النص. إن كنت تريد أن تستخدم نص لوريم إيبسوم ما، عليك أن تتحقق أولاً
            أن ليس هناك أي كلمات أو عبارات محرجة أو غير لائقة مخبأة في هذا النص.
            بينما تعمل جميع مولّدات نصوص لوريم إيبسوم على الإنترنت على إعادة
            تكرار مقاطع من نص لوريم إيبسوم نفسه عدة مرات بما تتطلبه الحاجة، يقوم
            مولّدنا هذا باستخدام كلمات من قاموس يحوي على أكثر من 200 كلمة لا
            تينية، مضاف إليها مجموعة من الجمل النموذجية، لتكوين نص لوريم إيبسوم
            ذو شكل منطقي قريب
          </p>
          <h6>4. قواعد المحتوى والسلوك</h6>
          <p>
            هنالك العديد من الأنواع المتوفرة لنصوص لوريم إيبسوم، ولكن الغالبية
            تم تعديلها بشكل ما عبر إدخال بعض النوادر أو الكلمات العشوائية إلى
            النص. إن كنت تريد أن تستخدم نص لوريم إيبسوم ما، عليك أن تتحقق أولاً
            أن ليس هناك أي كلمات أو عبارات محرجة أو غير لائقة مخبأة في هذا النص.
            بينما تعمل جميع مولّدات نصوص لوريم إيبسوم على الإنترنت على إعادة
            تكرار مقاطع من نص لوريم إيبسوم نفسه عدة مرات بما تتطلبه الحاجة، يقوم
            مولّدنا هذا باستخدام كلمات من قاموس يحوي على أكثر من 200 كلمة لا
            تينية، مضاف إليها مجموعة من الجمل النموذجية، لتكوين نص لوريم إيبسوم
            ذو شكل منطقي قريب
          </p>
        </article>
      </section>
    </main>
  );
};

export default page;
