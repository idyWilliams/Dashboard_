import Image from "next/image";
import Link from "next/link";
import vectorLIght from "/public/vectorLight.png";
import { Logo } from "./Logo";

export default function Footer() {
  return (
    <div className="bg-[#0C0C0C] text-light px-8 py-16 -skew-y-3 ">
      {/* <div className="wrapper"> */}
      <div className="bg-[#525AA0] w-full flex flex-col items-center justify-center gap-6 py-28 relative overflow-hidden ">
        {/* <div className="w-full p-5 border-b-[5vw] border-l-[100vw] border-l-dark border-b-[#525AA0] absolute -top-10" /> */}
        <h2 className="text-3xl md:text-5xl max-w-xl font-semibold text-center px-4 md:px-0 skew-y-3 text-white">
          Need a job done, and done well? Get started
        </h2>
        <button className="bg-[#000] p-4  rounded-2xl skew-y-3">
          <Image
            src={vectorLIght}
            alt="vector"
            width={40}
            height={40}
            className="h-4 w-6 rotate-90"
          />
        </button>
        {/* <div className="w-full p-0 border-b-[3vw] border-l-[100vw] border-l-[#525AA0] border-b-dark absolute -bottom-1" /> */}
      </div>
      {/* </div> */}

      <div className="wrapper flex flex-col md:flex-row gap-20 py-36 skew-y-3">
        <div className="md:max-w-sm flex flex-col gap-7">
          <Link href="/" aria-label="Home">
            <Logo className="h-10" />
          </Link>
          <p className="pb-10 text-white">
            We take complex hiring processes - and simplify them. Connecting you
            to the world’s highly qualified talent pool.
          </p>
          <div>
            <p className="opacity-50 mb-6 text-[#fff] text-center md:text-left">LINKS AND REDIRECTS</p>
            <div className="flex flex-row items-center justify-center md:justify-start gap-4">
              <Link href="/" passHref>
                <span className="bg-[#292B34] px-10 py-3 rounded-2xl text-white text-xs">
                  Hire now
                </span>
              </Link>
              <Link href="/" passHref>
                <span className="bg-[#292B34] px-10 py-3 rounded-2xl text-white text-xs">
                  Apply now
                </span>
              </Link>
            </div>
          </div>
        </div>

        <div className="flex flex-col md:flex-row justify-between gap-20">
          <div>
            <div className="text-3xl md:text-5xl font-semibold mb-24 text-white">
              <h1 className="leading-tight text-center md:text-left">
                Connecting the right people to <br /> the right businesses.
              </h1>
            </div>
            <div className="flex flex-col md:flex-row justify-between gap-10 md:gap-0">
              {sections.map((section, sectionIndex) => (
                <div key={sectionIndex} className="flex flex-col gap-3">
                  <p className="mb-1 text-sm opacity-50 text-white">
                    {section.title}
                  </p>
                  {section.links.map((link, linkIndex) => (
                    <Link href="/" passHref key={linkIndex}>
                      <span className="hover:border-b-2 transition-all text-white text-sm cursor-pointer">
                        {link}
                      </span>
                    </Link>
                  ))}
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      <div className="border-t border-light/50 pt-4 skew-y-3">
        <div className="wrapper flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-sm text-white">All rights reserved by Zwilt</p>
          <div className="flex items-center gap-4">
            <Link href="/" passHref>
              <span className="underline opacity-70 text-sm text-white">
                Privacy Policy
              </span>
            </Link>
            <Link href="/" passHref>
              <span className="underline opacity-70 text-sm text-white">
                Terms and Conditions
              </span>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}

const sections = [
  {
    title: "PLATFORM",
    links: ["Find Work", "Find Talent", "Categories", "About Us"],
  },
  {
    title: "CATEGORIES",
    links: ["Data Science", "IT & Networking", "Web & Mobile"],
  },
  {
    title: "HELP",
    links: ["FAQ’s", "Contact Us", "Web & Mobile"],
  },
  {
    title: "GET IN TOUCH @",
    links: ["Instagram", "LinkedIn", "Twitter"],
  },
];