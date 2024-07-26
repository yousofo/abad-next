"use client"
import React, { useState } from 'react'
import "./courses.dev.css"
import CoursesComponent from '@/components/dataFetching/courses/CoursesComponent'
import SeachFilter from '@/components/dataFetching/courses/SeachFilter'

const Courses = () => {
  const [searchFilter, setSearchFilter] = useState("")
  return (
    <main className='courses-page'>
      {/* HERO start  */}
      <section className="hero h-dvh md:min-h-[600px] md:h-auto relative">
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
      {/* HERO end */}
      {/* COURSES start */}
      <section className="relative flex flex-col gap-32 md:gap-48 container px-4 max-w-screen-xl  md:py-10 mx-auto z-40">
        {/* SERACH FILTER start */}
        <CoursesComponent/>
      </section>
      {/* COURSES end */}
    </main>

  )
}

export default Courses