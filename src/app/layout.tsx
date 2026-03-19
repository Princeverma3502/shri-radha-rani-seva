import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Navbar from "../components/layout/Navbar";
import Footer from "../components/layout/Footer";
import WhatsAppWidget from "../components/WhatsAppWidget";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  metadataBase: new URL("http://localhost:3000"),
  title: "Shri Radha Rani Seva Sansthan | Gau Seva",
  description: "निस्वार्थ सेवा ही सच्चा धर्म है। हम बेसहारा गोवंश और असहाय बुजुर्गों को एक सम्मानजनक, सुरक्षित और प्रेमपूर्ण जीवन प्रदान करने के लिए समर्पित हैं।",
  openGraph: {
    title: "Shri Radha Rani Seva Sansthan",
    description: "Your small contribution can save a life. Support our Gaushala and Old Age Home today.",
    images: [{
      url: "/logo.png",
      width: 200,
      height: 200,
      alt: "Shri Radha Rani Seva Sansthan Logo"
    }],
    url: "https://radha-rani-seva.vercel.app", 
    siteName: "Shri Radha Rani Seva Sansthan",
    type: "website",
    locale: "hi_IN"
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="hi">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased flex flex-col min-h-screen overflow-x-hidden bg-[#FFFCF5]`}
        suppressHydrationWarning
      >
        <Navbar />
        <main className="flex-grow">
          {children}
        </main>
        <Footer />
        <WhatsAppWidget />
      </body>
    </html>
  );
}