import type { Metadata } from "next";
import { Poppins } from "next/font/google"; // Import Poppins from Google Fonts
import "./globals.css";

// Define the Poppins font
const poppins = Poppins({
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"], // Specify the weights you want
  subsets: ["latin"], // Add more subsets if needed
});

export const metadata: Metadata = {
  title: "Create Next App",
  description: "Solar Crafts",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${poppins.className} antialiased`}>
        {children}
      </body>
    </html>
  );
}
