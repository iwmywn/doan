import type { Metadata } from "next";
import "@/globals.css";
import { montserrat } from "@/ui/fonts";
import Header from "@/ui/header";
import Footer from "@/ui/footer";
import ScrollToTop from "@/ui/to-top";
import { HeightProvider } from "@/hooks/useHeight";
import Gap from "@/ui/gap";
import PopUp from "@/ui/pop-up";

export const metadata: Metadata = {
  title: {
    template: "%s - StyleWave",
    default: "StyleWave",
  },
  description: "fashion",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${montserrat.className} antialiased`}>
        <PopUp />
        <HeightProvider>
          <Header />
          <Gap z={10} />
        </HeightProvider>
        {children}
        <HeightProvider>
          <Gap z={-9999} />
          <Footer />
        </HeightProvider>
        <ScrollToTop />
      </body>
    </html>
  );
}
