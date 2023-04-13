import { Nunito } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/navbar/Navbar";

export const metadata = {
  title: "Airbnb Clone",
  description: "A clone of airbnb using NextJS",
};

const font = Nunito({
  subsets: ["latin"],
});

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="pt-BR">
      <body className={font.className}>
        <Navbar />
        {children}
      </body>
    </html>
  );
}
