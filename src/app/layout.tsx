import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Mobile App",
  description: "A mobile-like application interface",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>
        <div className="min-h-screen w-full flex items-center justify-center">
          <div className="phone-frame">
            <div className="phone-notch" />
            <div className="phone-screen">
              {children}
            </div>
          </div>
        </div>
      </body>
    </html>
  );
}
