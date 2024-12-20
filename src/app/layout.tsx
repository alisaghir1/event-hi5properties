import { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";
import { AppWrapper } from "./context";
// import Script from "next/script";

const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});
const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});

export const metadata: Metadata = {
  title: "Dubai Luxury Properties | Join us in one of the best event's in Istanbul",
  description:
    "Experience the luxury of Dubai real estate at the Hi5 Properties Showcase in Istanbul. Explore exclusive Dubai projects, investment opportunities, and high-end properties that define the future of living. Join us for an immersive event where innovation meets luxury in the heart of Istanbul.",
  icons: {
    icon: "/logo.svg", // Replace with the path to your logo image in the public folder
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
      {/* <Script
          strategy="afterInteractive"
          src="https://www.googletagmanager.com/gtag/js?id=G-WF659TH2JG"
          async
          />
          <Script
          id="google-analytics"
          strategy="afterInteractive"
          >
          {`
          window.dataLayer = window.dataLayer || [];
          function gtag(){dataLayer.push(arguments);}
          gtag('js', new Date());
          gtag('config', 'G-WF659TH2JG');
          `}
          </Script> */}
      </head>
      <body className={`${geistSans.variable} ${geistMono.variable} antialiased`}>
<AppWrapper>
        {children}
      </AppWrapper>
      </body>
    </html>
  );
}
