import type { Metadata } from "next";
import "./globals.css";
import Provider from "@/components/Provider";
import Navbar from "@/components/Navbar";

export const metadata: Metadata = {
  title: "reBike-remastered",
  description: "New version of reBike",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>
        <Provider>
          <Navbar />
          {children}
        </Provider>
      </body>
    </html>
  );
}
