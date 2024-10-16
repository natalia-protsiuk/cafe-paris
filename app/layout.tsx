import type { Metadata } from "next";

import "./globals.css";

export const metadata: Metadata = {
  title: "Cafe Paris",
  description: "Generated by create next app",
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
          className="fixed top-0 left-0 w-full min-h-screen bg-fixed bg-cover bg-center z-[-1]"
          style={{
            backgroundImage: "url('../images/flour-chocolate.jpg')",
          }}
        ></div>

        <div className="relative z-10">{children}</div>
      </body>
    </html>
  );
}
