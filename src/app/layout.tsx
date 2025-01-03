import type { Metadata } from "next";
import "../globals.css";

export const metadata: Metadata = {
  title: "Moises",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <meta name="theme-color" content="#000" />
      </head>
      <body>
        <main>{children}</main>
      </body>
    </html>
  );
}
