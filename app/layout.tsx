import "./css/style.css";

import { GeistSans } from "geist/font/sans";
import Header from "@/components/ui/header";
import Chatbot from "@/components/ui/chatbot";
import Footer from "@/components/ui/footer";

export const metadata = {
  title: "SiliconMind AI",
  description: "Chatbot Development and AI Automation",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body
        className={`${GeistSans.className} antialiased bg-white text-gray-900 tracking-tight`}
      >
        <div className="flex flex-col min-h-screen overflow-hidden supports-[overflow:clip]:overflow-clip">
          <Header />
          {children}
          <Footer />
        </div>
        <Chatbot />
      </body>
    </html>
  );
}
