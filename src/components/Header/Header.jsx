import React from "react";
import "./header.css";
import Link from "next/link";

const Header = () => {
  return (
    <header className="absolute w-full top-0 pt-6">
      <nav className="container max-w-screen-xl px-4 flex mx-auto justify-between items-center">
        {/* abad logo */}
        <Link className="text-[#282828]" href="/">
          <img
            src="/media/abad-logo.png"
            alt=""
            className="min-w-36 max-w-44 w-full"
          />
        </Link>
        {/* nav links */}
        <ul className="nav-list cairo-font hidden absolute md:static md:flex flex-col md:flex-row bg-white md:bg-transparent p-4 lg:p-0 max-w-xl w-fit md:w-full justify-between items-center md:text-white text-sm lg:text-base px-4">
          <li>
            <Link href="/">الرئيسية</Link>
          </li>
          <li>
            <Link href="/courses">الدورات</Link>
            <ul />
          </li>
          <li>
            <Link href="/articles">المقالات</Link>
          </li>
          <li>
            <Link href="">الاعتمادات والشركاء</Link>
          </li>
          <li>
            <Link href="/contact">اتصل بنا</Link>
          </li>
        </ul>
        {/* logout btn */}
        <a
          href="#"
          className="bg-abad-gold rounded-xl p-2 px-4 hidden md:block"
        >
          تسجيل الدخول
        </a>
        {/* small screens nav icon */}
        <svg
          className="md:hidden toggle-nav-list cursor-pointer min-w-8"
          xmlns="http://www.w3.org/2000/svg"
          width={33}
          viewBox="0 0 31 28"
          fill="none"
        >
          <rect
            x="0.318181"
            y="0.318181"
            width="29.9091"
            height="27.3636"
            rx="4.77272"
            stroke="white"
            strokeWidth="0.636362"
          />
          <path
            d="M24.1817 21.6363H6.36355C5.66062 21.6363 5.09082 21.0664 5.09082 20.3636C5.09082 19.6607 5.66062 19.0908 6.36355 19.0908H24.1817C24.8846 19.0908 25.4545 19.6607 25.4545 20.3636C25.4544 21.0664 24.8846 21.6363 24.1817 21.6363Z"
            fill="white"
          />
          <path
            d="M24.1817 15.2727H6.36355C5.66062 15.2727 5.09082 14.7029 5.09082 14C5.09082 13.2971 5.66062 12.7273 6.36355 12.7273H24.1817C24.8846 12.7273 25.4545 13.2971 25.4545 14C25.4545 14.703 24.8846 15.2727 24.1817 15.2727Z"
            fill="white"
          />
          <path
            d="M24.1817 8.90899H6.36355C5.66062 8.90899 5.09082 8.33919 5.09082 7.63626C5.09082 6.93332 5.66062 6.36353 6.36355 6.36353H24.1817C24.8846 6.36353 25.4545 6.93332 25.4545 7.63626C25.4545 8.33919 24.8846 8.90899 24.1817 8.90899Z"
            fill="white"
          />
        </svg>
      </nav>
    </header>
  );
};

export default Header;
