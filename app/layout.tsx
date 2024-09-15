import "./globals.css";
import ActiveSectionContextProvider from "@/context/active-section-context";
import { Toaster } from "react-hot-toast";
import localFont from "next/font/local";
import { cn } from "@/lib/utils";

const circular = localFont({
  src: "../public/fonts/circular-std.ttf",
  variable: "--font-circular",
});

const markPro = localFont({
  src: [
    {
      path: "../public/fonts/mark-pro.ttf",
      weight: "400",
    },
    {
      path: "../public/fonts/mark-pro-bold.ttf",
      weight: "700",
    },
  ],
  variable: "--font-mark-pro",
});
const condensed = localFont({
  src: [
    {
      path: "../public/fonts/condensed.ttf",
      weight: "400",
    },
    {
      path: "../public/fonts/condensed-bold.ttf",
      weight: "700",
    },
  ],
  variable: "--font-condensed",
});

export const metadata = {
  title: "Armaan | Frontend Developer",
  description:
    "I am Armaan, a frontend developer skilled in Next.js and React, who has built and scaled apps generating over $100k+ in revenue.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head>
        <meta property="og:title" content="Armaan | Frontend Developer" />
        <meta
          property="og:description"
          content="I am Armaan, a frontend developer skilled in Next.js and React, who has built and scaled apps generating over $100k+ in revenue."
        />
        <meta
          property="og:image"
          content="https://github.com/armanalam03/assets/blob/main/favicon.png?raw=true"
        />
        <meta property="og:url" content="https://example.com" />
        <meta property="og:type" content="website" />
        <meta property="og:locale" content="en_US" />

        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Armaan | Frontend Developer" />
        <meta
          name="twitter:description"
          content="I am Armaan, a frontend developer skilled in Next.js and React, who has built and scaled apps generating over $100k+ in revenue."
        />
        <meta
          name="twitter:image"
          content="https://github.com/armanalam03/assets/blob/main/favicon.png?raw=true"
        />
      </head>
      <body
        className={cn(
          `relative  bg-black text-white text-opacity-90 `,
          circular.className,
          markPro.variable,
          condensed.variable
        )}
      >
        <>
          <div className="bg-black absolute top-[-6rem] -z-10 right-[11rem] h-[31.25rem] w-[31.25rem] rounded-full blur-[10rem] sm:w-[68.75rem]"></div>
          <div className="bg-black absolute top-[-1rem] -z-10 left-[-35rem] h-[31.25rem] w-[50rem] rounded-full blur-[10rem] sm:w-[68.75rem] md:left-[-33rem] lg:left-[-28rem] xl:left-[-15rem] 2xl:left-[-5rem]"></div>
          <ActiveSectionContextProvider>
            {children}
            <Toaster position="top-right" />
          </ActiveSectionContextProvider>
        </>
      </body>
    </html>
  );
}
