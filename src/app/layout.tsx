import type { Metadata } from "next";
import { Raleway } from "next/font/google";
import "./globals.css";
import { AOSInit } from "./components/AOS";
import FloatingWhatsApp from "./components/FloatinfWhatsapp";
import { AppProvider, } from "./components/Context";
import ProfileBar from "./components/ProfileBar";
import BackToTop from "./components/BackToTop";
import ContextWrapper from "./components/ContextWrapper";

const raleway = Raleway({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Sangodare Isaac O",
  description: "Software Developer - Frontend",
  icons: "/img/Sangodare Isaac.jpeg",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {

  return (
    <html lang="en">
      <AOSInit />
      <body className={`${raleway.className} `}>
        <AppProvider>
          <ContextWrapper>
            <FloatingWhatsApp />
            <ProfileBar />
            {children}
            <BackToTop targetId={"top"} />
          </ContextWrapper>
        </AppProvider>
      </body>
    </html>
  );
}
