import localFont from "next/font/local";

/**
 * Creates local font instance
 */
export const Switzer = localFont({
  src: [
    {
      path: "./fonts/Switzer-Extrabold.woff2",
      weight: "900",
      style: "extrabold",
    },
    {
      path: "./fonts/Switzer-Bold.woff2",
      weight: "800",
      style: "bold",
    },
    {
      path: "./fonts/Switzer-Medium.woff2",
      weight: "700",
      style: "medium",
    },
    {
      path: "./fonts/Switzer-Regular.woff2",
      weight: "500",
      style: "regular",
    },
    {
      path: "./fonts/Switzer-Light.woff2",
      weight: "300",
      style: "light",
    },
    {
      path: "./fonts/Switzer-Thin.woff2",
      weight: "100",
      style: "light",
    },
  ],
  variable: "--font-switzer",
  display: "swap",
});
