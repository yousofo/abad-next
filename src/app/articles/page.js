import React from 'react'
import "./articles.css"
import ArticlesFilteringWrapper from '@/components/articles/ArticlesFilteringWrapper'

const Articles = () => {

  return (
    <main className='relative'>
      {/* HERO start  */}
      <section className="hero h-dvh md:min-h-[600px] md:h-auto relative">
        {/* HERO text */}
        <div className="intro text-center absolute flex flex-col items-center h-full justify-center gap-5 md:gap-7 text-white w-full max-w-full px-4">
          <h2 className="text-2xl font-medium md:text-4xl lg:text-5xl xl:text-6xl max-w-72 sm:max-w-fit">
            <span className="text-abad-gold whitespace-nowrap my-3 block">
              المقالات
            </span>
            <p className="text-sm md:text-2xl max-w-2xl font-normal leading-loose md:leading-[2]">
              معهد شبكة آباد للتدريب من المعاهد الرائدة في تقديم الدورات التطويرية
              المتخصصة في تقنية المعلومات.
            </p>
          </h2>
        </div>
        {/* background  */}
        <div className="back-shape overflow-hidden w-full relative -z-10 h-full md:h-auto">
          <img
            className="w-full h-full md:h-auto object-cover md:min-h-[600px]"
            src="/media/BackgroundHero_rect.png"
            alt=""
          />
          <img
            className="md:w-36 w-20 absolute top-[8vh] md:top-[10vh] right-0"
            src="/media/hero-rectangle.png"
            alt=""
          />
        </div>
      </section>
      {/* HERO end  */}
      {/* main secion start */}
      <section className="p-8 w-full max-w-screen-lg mx-auto h-auto">
        <ArticlesFilteringWrapper/>
      </section>
    </main>
  )
}

export default Articles