"use client";

import Link from "next/link";
import { TopLevelNavItem } from "./Header";



// function TopLevelNavItem({
//   href,
//   children,
// }: {
//   href: string;
//   children: React.ReactNode;
// }) {
//   return (
//     <li className="md:hidden">
//       <Link
//         href={href}
//         className="block py-1 text-sm text-zinc-600 transition hover:text-zinc-900 dark:text-zinc-400 dark:hover:text-white"
//       >
//         {children}
//       </Link>
//     </li>
//   );
// }


export function Navigation(props: React.ComponentPropsWithoutRef<"nav">) {
  return (
    <nav {...props}>
      <ul role="list">
        <TopLevelNavItem href="/">Find Work</TopLevelNavItem>
        <TopLevelNavItem href="#">Find Talent</TopLevelNavItem>
        <TopLevelNavItem href="#">Article</TopLevelNavItem>
        <TopLevelNavItem href="#">About Us</TopLevelNavItem>
        <TopLevelNavItem href="#">Contact Us</TopLevelNavItem>
      </ul>
    </nav>
  );
}
