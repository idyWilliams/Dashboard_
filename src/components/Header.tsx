import { forwardRef } from "react";
import Link from "next/link";
import clsx from "clsx";
import { motion, useScroll, useTransform } from "framer-motion";

import {
  MobileNavigation,
  useIsInsideMobileNavigation,
} from "@/components/MobileNavigation";
import { useMobileNavigationStore } from "@/components/MobileNavigation";
import { Logo } from "./Logo";

interface TopLevelNavItemProps {
  href: string;
  children: React.ReactNode;
  className?: string;
}

export const TopLevelNavItem: React.FC<TopLevelNavItemProps> = ({
  href,
  children,
  className,
}) => {
  const baseClasses =
    "text-sm leading-5  transition hover:text-zinc-900 ";
  const combinedClasses = `${baseClasses} ${className || "text-white"}`;

  return (
    <li>
      <Link href={href} className={combinedClasses}>
        {children}
      </Link>
    </li>
  );
};



export const Header = forwardRef<
  React.ElementRef<"div">,
  { className?: string }
>(function Header({ className }, ref) {
  let { isOpen: mobileNavIsOpen } = useMobileNavigationStore();
  let isInsideMobileNavigation = useIsInsideMobileNavigation();

  let { scrollY } = useScroll();
  let bgOpacityLight = useTransform(scrollY, [0, 72], [0.5, 0.9]);
  let bgOpacityDark = useTransform(scrollY, [0, 72], [0.2, 0.8]);

  return (
    <motion.div
      ref={ref}
      className={clsx(
        className,
        "fixed top-0 left-0 right-0 z-50 flex h-12 items-center justify-between gap-12 px-4 transition sm:px-4 lg:z-30 lg:px-4 w-full lg:w-11/12 lg:mx-auto lg:mt-8 lg:rounded-2xl shadow-lg",
        !isInsideMobileNavigation && "backdrop-blur-sm dark:backdrop-blur",
        isInsideMobileNavigation
          ? "bg-[#525AA0]/[var(--bg-opacity-light)]"
          : "bg-[#525AA0]"
      )}
      style={
        {
          "--bg-opacity-light": bgOpacityLight,
          "--bg-opacity-dark": bgOpacityDark,
        } as React.CSSProperties
      }
    >
      <div
        className={clsx(
          "absolute inset-x-0 top-full h-px transition",
          (isInsideMobileNavigation || !mobileNavIsOpen) && "bg-zinc-900/7.5"
        )}
      />
      <div className="hidden lg:block">
        <Link href="/" aria-label="Home">
          <Logo className="h-10" />
        </Link>
      </div>
      <div className="flex items-center justify-between gap-5 lg:hidden">
        <MobileNavigation />
        <Link href="/" aria-label="Home">
          <Logo className="h-6" />
        </Link>
      </div>
      <div className="flex items-center gap-5">
        <nav className="hidden md:block">
          <ul role="list" className="flex items-center gap-8">
            <TopLevelNavItem href="/">Find Work</TopLevelNavItem>
            <TopLevelNavItem href="#">Find Talent</TopLevelNavItem>
            <TopLevelNavItem href="#">Article</TopLevelNavItem>
            <TopLevelNavItem href="#">About Us</TopLevelNavItem>
            <TopLevelNavItem href="#">Contact Us</TopLevelNavItem>

          </ul>
        </nav>
        <div className="hidden md:block md:h-5 md:w-px md:bg-zinc-900/10" />
        <div className="hidden min-[416px]:contents">
          {/* <Button href="#">Sign in</Button> */}
        </div>
      </div>
      <div className="flex items-center gap-5">
        <nav className="hidden md:block">
          <ul role="list" className="flex items-center gap-5">
            <TopLevelNavItem href="/">Log In</TopLevelNavItem>
            <TopLevelNavItem className="bg-white text-[#202229] px-4 py-2 rounded-xl" href="#">
              Join Now
            </TopLevelNavItem>
          </ul>
        </nav>

      </div>
    </motion.div>
  );
});
