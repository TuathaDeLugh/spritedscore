import Image from "next/image";
import Link from "next/link";
import React from "react";
import dynamic from 'next/dynamic'

const DarkmodeCSR = dynamic(() => import('./Darkmode'), { ssr: false })

function Footer ()  {
  return (
    <>
      <footer className=" border-t border-slate-200 dark:border-slate-600 relative z-10 pb-10 pt-20 bg-slate-50 dark:bg-slate-800  ">
        <div className="container max-w-[1500px] mx-auto">
          <div className=" flex flex-wrap justify-around">
            <div className="w-full px-4 sm:w-10/ lg:w-4/12">
              <div className="mb-10 lg:mb-5 w-full">
                <Link href="/" className="mb-6 max-w-[300px] flex items-center gap-2">
                  <Image
                    className=" w-auto"
                    src="/logo.png"
                    width={60}
                    height={55}
                    alt="logo"
                  />
            <h2 className="text-2xl text-purple-700 font-bold dark:text-purple-400">SPIRITED SCORE</h2>

                </Link>
                <p className="mb-6 text-base text-justify  ">
                Dive into the captivating world of anime with Spirited Score, your ultimate destination for insightful and engaging anime reviews. Discover in-depth analyses of your favorite series, uncover hidden gems, and explore the vibrant realm of Japanese animation.
                </p>
                <DarkmodeCSR/>
              </div>
            </div>

            <LinkGroup header="Links">
              <NavLink link="/" label="Home" />
              <NavLink link="/allreview" label="All Reviews" />
              <NavLink link="/contact" label="Contact Us" />
              <NavLink link="/about" label="About Us" />
              <NavLink link="/login" label="Log In" />
            </LinkGroup>
            <LinkGroup header="Search by">
              <NavLink link="/allreview/filter/Action" label="Action" />
              <NavLink link="/allreview/filter/Romance" label="Romance" />
              <NavLink link="/allreview/filter/Fantasy" label="Fantacy" />
              <NavLink link="/allreview/filter/Sci-fi" label="Si-fi" />
              <NavLink link="/allreview/filter/super_natural" label="Super Natural" />
            </LinkGroup>
            <LinkGroup header="Social">
              <NavLink link="/#" label="Discord" />
              <NavLink link="/#" label="Facebook" />
              <NavLink link="/#" label="Instagram" />
              <NavLink link="/#" label="Reddit" />
              <NavLink link="/#" label="Twitter (X)" />
            </LinkGroup>
          </div>
        </div>
        <div>
          <span className="absolute bottom-0 left-0 z-[-1]">
            <svg
              width={217}
              height={229}
              viewBox="0 0 217 229"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M-64 140.5C-64 62.904 -1.096 1.90666e-05 76.5 1.22829e-05C154.096 5.49924e-06 217 62.904 217 140.5C217 218.096 154.096 281 76.5 281C-1.09598 281 -64 218.096 -64 140.5Z"
                fill="url(#paint0_linear_1179_5)"
              />
              <defs>
                <linearGradient
                  id="paint0_linear_1179_5"
                  x1="76.5"
                  y1={281}
                  x2="76.5"
                  y2="1.22829e-05"
                  gradientUnits="userSpaceOnUse"
                >
                  <stop stopColor="#3056D3" stopOpacity="0.08" />
                  <stop offset={1} stopColor="#C4C4C4" stopOpacity={0} />
                </linearGradient>
              </defs>
            </svg>
          </span>
          <span className="absolute right-10 top-10 z-[-1]">
            <svg
              width={75}
              height={75}
              viewBox="0 0 75 75"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M37.5 -1.63918e-06C58.2107 -2.54447e-06 75 16.7893 75 37.5C75 58.2107 58.2107 75 37.5 75C16.7893 75 -7.33885e-07 58.2107 -1.63918e-06 37.5C-2.54447e-06 16.7893 16.7893 -7.33885e-07 37.5 -1.63918e-06Z"
                fill="url(#paint0_linear_1179_4)"
              />
              <defs>
                <linearGradient
                  id="paint0_linear_1179_4"
                  x1="-1.63917e-06"
                  y1="37.5"
                  x2={75}
                  y2="37.5"
                  gradientUnits="userSpaceOnUse"
                >
                  <stop stopColor="#13C296" stopOpacity="0.31" />
                  <stop offset={1} stopColor="#C4C4C4" stopOpacity={0} />
                </linearGradient>
              </defs>
            </svg>
          </span>
        </div>
      </footer>
    </>
  );
};

export default Footer;

const LinkGroup = ({ children, header }) => {
  return (
    <>
      <div className="w-full text-center md:text-left md:w-1/3 px-4 lg:w-2/12 ">
        <div className="mb-10 w-full">
          <h4 className="mb-9 text-lg font-semibold text-purple-600 dark:text-purple-400">
            {header}
          </h4>
          <ul className="space-y-3">{children}</ul>
        </div>
      </div>
    </>
  );
};

const NavLink = ({ link, label }) => {
  return (
    <li>
      <Link
        href={link}
        className="inline-block text-base leading-tight  hover:text-purple-800  dark:hover:text-purple-400 "
      >
        {label}
      </Link>
    </li>
  );
};
