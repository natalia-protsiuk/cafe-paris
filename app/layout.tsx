import type { Metadata } from "next";

import "./globals.css";
import Header from "./components/Header";
import Footer from "./components/Footer";

export const metadata: Metadata = {
  title: "Ресторан Cafe Paris Миколаїв | Весілля, банкети, меню та бронювання",
  description: "Cafe Paris — ресторан у Миколаєві з банкетним залом до 100 гостей. Пропонуємо весільні меню від 800 грн, банкети, авторську кухню та бронювання дат для свят.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        <div
          className="fixed top-0 left-0 w-full min-h-screen bg-fixed bg-cover bg-center z-[-1]  sm:block"
          style={{
            backgroundImage: "url('../images/cafe-paris-background.jpg')",
            backgroundBlendMode: "overlay",
            backgroundColor: "rgba(0, 0, 0, 0.6)",
          }}
        ></div>

        <div className="relative z-10">
          <Header />
          <main>{children}</main>
          <Footer />
        </div>
      </body>
    </html>
  );
}
