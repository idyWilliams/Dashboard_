import Image from "next/image";
import Link from "next/link";
// import logoIconButton from "@assets/svg/logo-icon-button.svg";
// import logo from "@image/Frame 55.png";

export default function Footer() {
  return (
    <div className="bg-dark text-light px-3 py-6">
      <div className="wrapper">
        <div className="bg-[#525AA0] w-full flex flex-col items-center justify-center gap-6 py-28 relative overflow-hidden">
          <div className="w-full p-5 border-b-[5vw] border-l-[100vw] border-l-dark border-b-[#525AA0] absolute -top-10" />
          <h2 className="text-3xl md:text-5xl max-w-xl font-semibold text-center px-4 md:px-0">
            Need a job done, and done well? Get started
          </h2>
          {/* <Image
            src={logoIconButton}
            alt="Logo Icon Button"
            className="w-16 md:w-auto"
          /> */}
          <div className="w-full p-0 border-b-[3vw] border-l-[100vw] border-l-[#525AA0] border-b-dark absolute -bottom-1" />
        </div>
      </div>

      <div className="wrapper flex flex-col md:flex-row gap-20 py-36">
        <div className="md:max-w-sm flex flex-col gap-7">
          {/* <Image src={logo} alt="Logo" className="w-32" /> */}
          <p className="pb-10">
            We take complex hiring processes - and simplify them. Connecting you
            to the world’s highly qualified talent pool.
          </p>
          <div>
            <p className="opacity-50 mb-6">LINKS AND REDIRECTS</p>
            <div className="flex flex-col md:flex-row items-center gap-4">
              <Link href="/" passHref>
                <span className="bg-[#292B34] px-10 py-3 rounded-2xl">Hire now</span>
              </Link>
              <Link href="/" passHref>
                <span className="bg-[#292B34] px-10 py-3 rounded-2xl">Apply now</span>
              </Link>
            </div>
          </div>
        </div>

        <div className="flex flex-col md:flex-row justify-between gap-20">
          <div>
            <div className="text-3xl md:text-5xl font-semibold mb-24">
              <h1 className="leading-tight">
                Connecting the right people to the right businesses.
              </h1>
            </div>

            <div className="flex flex-col md:flex-row justify-between gap-10 md:gap-0">
              {[
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
              ].map((section, index) => (
                <div key={index} className="flex flex-col gap-3">
                  <p className="mb-1 text-sm opacity-50">{section.title}</p>
                  {section.links.map((link, index) => (
                    <Link href="/" passHref key={index}>
                      <span className="hover:border-b-2 border-r-[20px] border-r-dark border-b-light transition-all">
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

      <div className="border-t border-light/50 pt-4">
        <div className="wrapper flex flex-col md:flex-row items-center justify-between gap-4">
          <p>All rights reserved by Zwilt</p>
          <div className="flex items-center gap-4">
            <Link href="/" passHref>
              <span className="underline opacity-70">Privacy Policy</span>
            </Link>
            <Link href="/" passHref>
              <span className="underline opacity-70">Terms and Conditions</span>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
