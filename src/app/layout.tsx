import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "NextJs Cours",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="fr">
      <body className="bg-blue-100">{children}</body>
    </html>
  );
}
