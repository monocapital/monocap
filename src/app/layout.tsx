import type { Metadata } from "next";
import "./globals.css";
import "./mobile-text.css"; // Import our custom mobile text CSS
import "./about/underline-animation.css";
import "./about/success-metrics.css"; // This line is already present
import CustomCursor from "@/components/CustomCursor";
import Footer from "@/components/Footer"; // Import Footer component

export const metadata: Metadata = {
  title: "Mono Capital",
  description: "Mono Capital - Strategic Funding",
  icons: {
    icon: "https://static.wixstatic.com/media/da1f02_2699db14d3284e4e8c3022416c6ce1a5~mv2.png/v1/fill/w_126,h_126,al_c,q_85,usm_0.66_1.00_0.01,enc_avif,quality_auto/5_edited.png",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body suppressHydrationWarning>
        {children}
        <Footer /> {/* Add Footer to all pages */}
        <CustomCursor />
      </body>
    </html>
  );
}
