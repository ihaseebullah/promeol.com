import "./css/style.css";

import { Inter } from "next/font/google";
import localFont from "next/font/local";
import "@fortawesome/fontawesome-svg-core/styles.css";
import Header from "@/components/ui/header";
import { LoadingProvider } from "@/context/uicontext";
import { config } from "@fortawesome/fontawesome-svg-core";
config.autoAddCss = false;

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

const nacelle = localFont({
  src: [
    {
      path: "../public/fonts/nacelle-regular.woff2",
      weight: "400",
      style: "normal",
    },
    {
      path: "../public/fonts/nacelle-italic.woff2",
      weight: "400",
      style: "italic",
    },
    {
      path: "../public/fonts/nacelle-semibold.woff2",
      weight: "600",
      style: "normal",
    },
    {
      path: "../public/fonts/nacelle-semibolditalic.woff2",
      weight: "600",
      style: "italic",
    },
  ],
  variable: "--font-nacelle",
  display: "swap",
});

export const metadata = {
  title: "Promeol",
  description: "Startup powering the rest!",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <LoadingProvider>
      <html lang="en">
        <head>
          <title>Promeol</title>
          <script
            async
            data-nf='{"formurl":"https://noteforms.com/forms/promeol-wave-1-txjzqa","emoji":"👨‍💻","position":"right","bgcolor":"#3B82F6","width":"500"}'
            src="https://noteforms.com/widgets/embed-min.js"
          ></script>
        </head>
        <body
          className={`${inter.variable} ${nacelle.variable} bg-gray-950 font-inter text-base text-gray-200 antialiased no-scrollbar max-h-[400px] overflow-y-auto
  [&::-webkit-scrollbar]:w-2
  [&::-webkit-scrollbar-track]:rounded-full
  [&::-webkit-scrollbar-thumb]:rounded-full
  [&::-webkit-scrollbar-thumb]:bg-gradient-to-b from-gray-800 to-gray-800/60 bg-[length:100%_100%]
  dark:[&::-webkit-scrollbar-track]:bg-neutral-700
  dark:[&::-webkit-scrollbar-thumb]:bg-neutral-500`}
        >
          <div className="flex min-h-screen flex-col overflow-hidden supports-[overflow:clip]:overflow-clip no-scrollbar">
            <Header />
            {children}
          </div>
        </body>
      </html>
    </LoadingProvider>
  );
}
