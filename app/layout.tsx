import type { Metadata } from "next";
import "./globals.css";
import Navbar from "@/components/layout/navbar";
import Footer from "@/components/layout/footer";
import { NextUIProvider } from "@nextui-org/react";
import { WindowAttributesProvider } from "@/context/windowAttributes";
export const metadata: Metadata = {
  title: "Yalla",
  icons: {
    icon: ['/favicon.ico?v=4'],
    apple: ['/apple-touch-icon.png?v=4'],
    shortcut: ['/apple-touch-icon.png']
  }
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {

  return (
    <html className="bg-bs-gray-dark-v1 text-bs-light-v2">
      <body dir='rtl' className="">
        <WindowAttributesProvider>
          <main className="w-full  flex flex-col items-center overflow-hidden ">
            <div className="w-full  extra-wide:w-extra-wide">
              <NextUIProvider>
                <Navbar />
                <div className="h-10 w-full"></div>
                <div className="px-2">
                  {children}
                </div>
                <div className="py-28 hidden phone-md:block">
                  <Footer />
                </div>
                <div className="h-28 w-full phone-md:hidden block" />
              </NextUIProvider>
            </div>
          </main>
        </WindowAttributesProvider>
      </body>
    </html >
  );
}
